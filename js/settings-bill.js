// get a reference to the sms or call radio buttons
const billItemTypeElement2 = document.querySelector(".billItemTypeWithSettings");
const addBtnElement2 = document.querySelector(".radioBillAddBtn1");
const BtnElement2 = document.querySelector(".updateSettings");
const callsTotalElem2 = document.querySelector(".callTotalSettings");
const smsTotalElem2 = document.querySelector(".smsTotalSettings");
const totalCostElem2 = document.querySelector(".totalSettings");
// get refences to all the settings fields
//get a reference to the add button
const callCost = document.querySelector(".callCostSetting");
const smsCost = document.querySelector(".smsCostSetting");
const warningLevel = document.querySelector(".warningLevelSetting");
const criticalLevel = document.querySelector(".criticalLevelSetting");
//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings
let total = 0;
let totalCall = 0;
let totalSms = 0;
// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

function textBillTotal() {
    // get the value entered in the billType textfield

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        // update the correct total
         if (billItemTypeWithSettings === "call") {
            totalCall += callCost
        }
        else if (billItemTypeWithSettings === "sms") {
            totalSms += smsCost;
        }
    }
        
    //update the totals that is displayed on the screen.
    callsTotalElem2.innerHTML = totalCall.toFixed(2);
    smsTotalElem1.innerHTML = totalSms.toFixed(2);
    total = totalCall + totalSms;
    totalCostElem2.innerHTML = total.toFixed(2);


    if (total >= warningLevel) {
        // adding the danger class will make the text red
        totalCostElem2.classList.add("danger");
    }
    else if (total >= criticalLevel) {
        totalCostElem2.classList.add("warning");
    }

}

addBtnElement2.addEventListener('click', textBillTotal);

BtnElement2.addEventListener('click', textBillTotal);
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
