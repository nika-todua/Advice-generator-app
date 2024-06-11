let generatorBtn = document.querySelector(".generator-btn");
let textid = document.querySelector(".id");
let text = document.querySelector(".text span");

generatorBtn.addEventListener("click", () => {
    apiget()
});

function apiget(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        textid.innerHTML = data.id
        text.innerHTML = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}