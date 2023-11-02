const entryField = document.querySelector("#entryField");
const buttonPlay = document.querySelector("#play");

const computerGeneration = Math.floor(Math.random() * 20 + 1);
console.log(computerGeneration);

entryField.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        play();
    }
})

buttonPlay.addEventListener("click", play);

function play() {
    const infoNumber = document.querySelector("#entryField").value;
    if (infoNumber < 1 || infoNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Что-то пошло не так...',
            text: 'Введите число от 1 до 20!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    } else if (isNaN(infoNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Что-то пошло не так...',
            text: 'Нужно ввести число!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    } else {
    const infoNumber = document.querySelector("#entryField").value;
        if (infoNumber < computerGeneration) {
            Swal.fire('Попробуй число повыше', "Компьютер пока побеждает!")
        } else if (infoNumber > computerGeneration) {
            Swal.fire('Попробуй число пониже', "Компьютер пока побеждает!")
        } else {
            Swal.fire({
                title: 'Вы переиграли компьютер!',
                imageUrl: 'assets/chelovek-protiv-pk3.png',
                imageWidth: 400,
                imageHeight: 250,
                imageAlt: 'Победа над компьютером',
              })
        }
    }
    entryField.value = "";
}