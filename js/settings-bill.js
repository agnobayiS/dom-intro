const callCost1 = document.getElementById("callCost");
const smsCost1 = document.getElementById("smsCost");
const warningLevel1 = document.getElementById("warn");
const criticalLevel1 = document.getElementById("critical");

let callTotal = document.getElementById("callTotalSettings")
let smsTota = document.getElementById("smsTotalSettings")
let total = document.getElementById("totalSettings")


const myAddBtn = document.querySelector('.radioBillAddBtn1')
const myUpdte = document.querySelector(".updateSettings")

const phoneBillInstance = billWithSettings()

myUpdte.addEventListener('click', function () {

    phoneBillInstance.setCallCost(Number(callCost1.value));
    phoneBillInstance.setSmsCost(Number(smsCost1.value));
    phoneBillInstance.setWarninglevel(Number(warningLevel1.value));
    phoneBillInstance.setCritivalLevel(Number(criticalLevel1.value));

    colourChange()
});

function textBillTotal() {

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value;

        if (billItemTypeWithSettings === "call") {
            phoneBillInstance.makeCall();

        }
        else if (billItemTypeWithSettings === "sms") {
            phoneBillInstance.makeSms();
        }
    }
    callTotal.innerHTML = phoneBillInstance.getTotalCallCost().toFixed(2);
    smsTota.innerHTML = phoneBillInstance.getTotalSmsCost().toFixed(2);
    total.innerHTML = phoneBillInstance.getTotalCost().toFixed(2);

    colourChange()
}

myAddBtn.addEventListener('click', textBillTotal)

function colourChange() {
    document.getElementById("totalSettings").classList.remove("critical");
    document.getElementById("totalSettings").classList.remove("warning")
    document.getElementById("totalSettings").classList.add(phoneBillInstance.totaClassName());

}



