const billInput = document.querySelector('.billInput');
const tipInput = document.querySelector('.tipInput');
const peopleInput = document.querySelector('.people');
const tipAmountOutputField = document.querySelector('.tipAmount');
const totalAmountOutputField = document.querySelector('.totalAmount');
const resetButton = document.querySelector('.reset');
const tipInputButtons = document.querySelectorAll('[data-tip]');

tipInputButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        tipValue= button.dataset.tip;
        console.log(tipValue)
    })
    
})

//initial values for bill, tip, people
let bill = 0;
/* let bill = Number(billInput.value); */
let tip = Number(tipInput.value);
let people = 1;


billInput.addEventListener('input', updateBillAmount)
//tipInput.addEventListener('input', updateTipAmount)
peopleInput.addEventListener('input', updatePeopleAmount)
resetButton.addEventListener('click', resetAll)

/* update the amount of tip based on the button clicked */
function updateTipAmount(e) {
    //updates the tip value
    tip = Number(e.target.value)
    tipCalculator(bill, tip, people);
}

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
    tipInput.value = ''; 
    peopleInput.value = '';
    tipAmountOutputField.textContent = '';
    totalAmountOutputField.textContent = '';
    people = 1;
    tip = Number(tipInput.value)
}