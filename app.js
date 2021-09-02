const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#next-button");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const hiddenItems = document.querySelectorAll(".hide");

const availableNotes = [2000,500,200,100,50,20,10,5,1];

nextButton.addEventListener("click", function onNextValidate() {
    if (billAmount.value > 0) {
        for (hiddenItem of hiddenItems) {
            hiddenItem.style.display = "block";
        }
    }
});

checkButton.addEventListener("click", function onCheckValidate() {
    errorMessage.style.display = "none";
    if (billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const cashToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(cashToBeReturned);
        }
        else{
            showErrorMessage("Cash Given is insufficient!");
        }
    }
    else{
        showErrorMessage("Please enter valid bill amount!");
    }
});

function showErrorMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

function calculateChange(cashToBeReturned) {
    for(let i=0; i<availableNotes.length; i++){
        let numberOfNotes = Math.trunc(cashToBeReturned / availableNotes[i]);
        cashToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}