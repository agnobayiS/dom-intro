//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");

function totalPhoneBill(total) {
    // logic goes herefunction totalPhoneBill(total){
    let callList = total.split(',')
    var call = []
    var sms = []

    for (var i = 0; i < callList.length; i++) {
        let newCallList = callList[i].trim();

        if (newCallList.includes('sms')) { sms.push(newCallList) } else if
            (newCallList.includes("call")) {
            call.push(newCallList)
        }
    }
    let totalCall = call.length;
    let totalSms = sms.length;
    const a = totalCall * 2.75
    const b = totalSms * 0.65
    const c = a + b
    return c.toFixed(2)
}
function calculateBtnClicked() {

    // get the string entered in the textArea
    var billString = billStringElement.value;
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;

    if (roundedBillTotal > 30) {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.add("danger");
    }

    else if (roundedBillTotal > 20) {
        billTotalElement.classList.add("warning")
    } 
}

calculateBtnElement.addEventListener('click', calculateBtnClicked);


//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
