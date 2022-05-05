// get a reference to the sms or call radio buttons

// const BtnElement2 = document.querySelector(".updateSettings");

// get refences to all the settings fields
//get a reference to the add button
// const callCost = document.querySelector(".callCostSetting");
// const smsCost = document.querySelector(".smsCostSetting");
// const warningLevel = document.querySelector(".warningLevelSetting");
// const criticalLevel = document.querySelector(".criticalLevelSetting");
//get a reference to the 'Update settings' button
var callCost1 = 0;
var smsCost1 = 0;
var criticalLevel1 = 0;
var warningLevel1 = 0;




// create a variables that will keep track of all the settings
var total = 0;
var totalCall = 0;
var totalSms = 0;
// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed
//const billItemTypeElement2 = document.querySelector(".billItemTypeWithSettings");
//const addBtnElement2 = document.querySelector(".radioBillAddBtn1");
//const callsTotalElem2 = document.querySelector(".callTotalSettings");
//const smsTotalElem2 = document.querySelector(".smsTotalSettings");
// const totalCostElem2 = document.querySelector(".totalSettings");

//addBtnElement2.addEventListener('click', textBillTotal);


function textBillTotal() {
    //alert(totalCall)
    // get the value entered in the billType textfield

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        // update the correct total

        if (billItemTypeWithSettings === "call") {
            if (criticalLevel1 > total) {
                totalCall += callCost1;
            }
        }
        else if (billItemTypeWithSettings === "sms") {
            if (criticalLevel1 > total) {
                totalSms += smsCost1;
            }

        }
    }

    //update the totals that is displayed on the screen.
    document.getElementById("callTotalSettings").innerHTML = totalCall.toFixed(2);
    document.getElementById("smsTotalSettings").innerHTML = totalSms.toFixed(2);
    total = totalCall + totalSms;
    document.getElementById("totalSettings").innerHTML = total.toFixed(2);

    colourChange()
    

    

}


function Update() {
    //alert("Hello")
    callCost1 = Number(document.getElementById("callCost").value);
    smsCost1 = Number(document.getElementById("smsCost").value);
    warningLevel1 = Number(document.getElementById("warn").value);
    criticalLevel1 = Number(document.getElementById("critical").value);

    //  callCost1 = Number(callCost.value)
    //     smsCost1 = Number(smsCost.value)
    //     criticalLevel1 = Number(criticalLevel.value)
    //     warningLevel1 = Number(warningLevel.value)

    colourChange()
}
function colourChange(){

    if (total >= criticalLevel1) {
        document.getElementById("totalSettings").classList.add("danger");


    }
    else if (total >= warningLevel1) {
        // adding the danger class will make the text red
        document.getElementById("totalSettings").classList.add("warning");
    }

    if(criticalLevel1 >total &&  warningLevel1 > total ){
        document.getElementById("totalSettings").classList.remove("danger");
        document.getElementById("totalSettings").classList.remove("warning");
    }

}




//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

