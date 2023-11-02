const btnCalculate = document.querySelector("#btnCalculate");
btnCalculate.addEventListener("click", calculate);

const btnTip = document.querySelector("#btnTip");
btnTip.addEventListener("click", (e) => {
    e.preventDefault();
    tip.style.display = "block";
})

function calculate(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people ==="" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Заполните все поля для расчета!',
          })
    }

    let amount = bill / people;
    let tipResult = (bill * tip) / people;
    let result = amount + tipResult;

    amount = amount.toFixed(2);
    tipResult = tipResult.toFixed(2);
    result = result.toFixed(2);

    document.querySelector("#divaderBill").textContent = amount
    document.querySelector("#divaderTip").textContent = tipResult
    document.querySelector("#divaderTotal").textContent = result
}