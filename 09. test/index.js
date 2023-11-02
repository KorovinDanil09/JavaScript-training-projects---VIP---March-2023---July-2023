const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
btn.addEventListener("click", result);

function result(e) {
    e.preventDefault();

    let point = 0;

    if(document.querySelector("#an_2").checked === true) {
        point++;
    } else {
        
    }
    if(document.querySelector("#an_5").checked === true) {
        point++;
    }
    if(document.querySelector("#an_7").checked === true) {
        point++;
    }
    if(document.querySelector("#an_12").checked === true) {
        point++;
    }
    if(document.querySelector("#an_17").checked === true) {
        point++;
    }
    if(document.querySelector("#an_20").checked === true) {
        point++;
    }
    if(document.querySelector("#an_23").checked === true) {
        point++;
    }
    if(document.querySelector("#an_28").checked === true) {
        point++;
    }
    if(document.querySelector("#an_31").checked === true) {
        point++;
    }
    if(document.querySelector("#an_33").checked === true) {
        point++;
    }
    if(document.querySelector("#an_40").checked === true) {
        point++;
    }

    text.textContent = `${"Ваши баллы:"} ${point}`;

    if(point === 11) {
        Swal.fire({
            title: 'Поздравляем, вы ответили на все вопросы!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
}