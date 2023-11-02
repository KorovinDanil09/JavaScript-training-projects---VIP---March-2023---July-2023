let text = "I`m a Web Developer...";
let i = 0;
let speed = 100;

function write() {
    if (i < text.length) {
        document.querySelector("#message").textContent += text.charAt(i);
        i++;
        setTimeout(write, speed);
    }
}
write();