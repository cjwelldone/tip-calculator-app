//focus initial tip value
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
const errorMessage = document.querySelector('.errorMessage');


//initial values for bill, tip, people, total, tipAmout
let bill = 0;
let tip = 0;
let people = 0;
let tipAmount = Number;
let total = Number;

tipAmountOutputField.textContent = '0.00';
totalAmountOutputField.textContent = '0.00';

billInput.addEventListener('input', updateBillAmount)
peopleInput.addEventListener('input', updatePeopleAmount)
resetButton.addEventListener('click', resetAll)

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
    if(people >= 1) {
        errorMessage.innerHTML = '';
        peopleInput.classList.replace('peopleInputAlert','peopleInput')
    } else {
       errorMessage.innerHTML = `Can't be zero`;
       peopleInput.classList.add('peopleInputAlert')
    }
    tipCalculator(bill, tip, people);
}

/*  Calculates tip based on user input & updates output fields */
function tipCalculator (bill, tip, people) {
    if (people != 0 || tip != 0) {
        tipAmount = ((bill / people) * 0.01 * tip);
        total = (bill/people) + tipAmount;
        if (total == Infinity){
            total = 0;
        }
        if (tipAmount == Infinity){
            tipAmount  = 0;
        }
    } else {
        tipAmount = 0;
        total = bill;
    }

    tipAmountOutputField.textContent = tipAmount.toFixed(2);
    totalAmountOutputField.textContent = total.toFixed(2);
}

/* Clear all fields */
function resetAll() {
    billInput.value = '';
    peopleInput.value = '';
    tipAmountOutputField.textContent = '0.00';
    totalAmountOutputField.textContent = '0.00';
    tipInputCustom.value = '';
    const modal = document.querySelector('.modal');
    modal.classList.remove("show");
    errorMessage.innerHTML = '';
    people = 0;
    tipAmount = 0;
    tip = 0;
}