// get a reference to the sms or call radio buttons
const billItemTypeElement = document.querySelector(".billItemTypeRadio");
const addBtnElement1 = document.querySelector(".radioBillAddBtn");
const callsTotalElem1 = document.querySelector(".callTotalTwo");
const smsTotalElem1 = document.querySelector(".smsTotalTwo");
const totalCostElem1 = document.querySelector(".totalTwo");
//get a reference to the add button

let totalCost1 = 0;
let callsTotal1 = 0;
let smsTotal1 = 0;

//create a variable that will keep track of the total bill


function textBillTotal() {
    // get the value entered in the billType textfield

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        // update the correct total
         if (billItemType === "call") {
            callsTotal1 += 2.75
        }
        else if (billItemType === "sms") {
            smsTotal1 += 0.75;
        }
    }
        
    //update the totals that is displayed on the screen.
    callsTotalElem1.innerHTML = callsTotal1.toFixed(2);
    smsTotalElem1.innerHTML = smsTotal1.toFixed(2);
    totalCost1 = callsTotal1 + smsTotal1;
    totalCostElem1.innerHTML = totalCost1.toFixed(2);


    if (totalCost1 >= 50) {
        // adding the danger class will make the text red
        totalCostElem1.classList.add("critical");
    }
    else if (totalCost1 >= 30) {
        totalCostElem1.classList.add("warning");
    }else if(roundedBillTotal < 20){
        billTotalElement.classList.remove("critical");
        billTotalElement.classList.remove("warning");
    }

}

addBtnElement1.addEventListener('click', textBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
