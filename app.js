//focus on initial tip value
//https://stackoverflow.com/questions/52707480/html-button-selected-by-default/52707559
// open modal // Data Attributes
//https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/

const billInput = document.querySelector('.billInput');
const tipInputCustom = document.getElementById('custom');
const peopleInput = document.querySelector('.peopleInput');
const tipAmountOutputField = document.querySelector('.tipAmount');
const totalAmountOutputField = document.querySelector('.totalAmount');
const resetButton = document.querySelector('.reset');
const tipInputButtons = document.querySelectorAll('[data-tip]');



//initial values for bill, tip, people
let bill = 0;
/* let bill = Number(billInput.value); */
let tip = 0; //Number(tipInput.value);
let people = 1;

billInput.addEventListener('input', updateBillAmount)
peopleInput.addEventListener('input', updatePeopleAmount)
resetButton.addEventListener('click', resetAll)

/* update the amount of tip based on the button clicked - deprecated - with input tag element*/
/* function updateTipAmount(e) {
    //updates the tip value
    tip = Number(e.target.value)
    tipCalculator(bill, tip, people);
} */

/* update the amount of tip based on the button clicked with buttons*/
tipInputButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        /* get the tipvalue */
        tipValue= button.dataset.tip;
        const modal = document.getElementById(tipValue)
        
        /* check if input custom is true  */
        if (tipValue == 'custom') {
            //open ModalBox and get the customtipAmount 
            modal.classList.add("show")
            tipInputCustom.addEventListener('input', (e) =>{
                console.log(e.target.value);
                tip = Number(e.target.value);
                tipCalculator(bill, tip, people);
            })  
        } else {
            tip = Number(tipValue)
        }
        tipCalculator(bill, tip, people);
    })
})

/* update the amount of bill based on the bill input field */
function updateBillAmount(e) {
    bill = Number(e.target.value);
    tipCalculator(bill, tip, people);
}

/* update the amount of people based on the people input field */
function updatePeopleAmount(e) {
    people = Number(e.target.value);
    tipCalculator(bill, tip, people);
}

/*  Calculates tip based on user input & updates output fields */
function tipCalculator (bill, tip, people) {
    let tipAmount = ((bill / people) * 0.01 * tip);
    let total = (bill/people) + tipAmount;
    tipAmountOutputField.textContent = tipAmount.toFixed(2);
    totalAmountOutputField.textContent = total.toFixed(2);
}

/*  Clear all fields and start new */
function resetAll() {
    billInput.value = '';
    peopleInput.value = '';
    tipAmountOutputField.textContent = '';
    totalAmountOutputField.textContent = '';
    const modal = document.querySelector('.modal');
    modal.classList.remove("show");
    people = 1;
    
}