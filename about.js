console.log("hello world");



function handleSubmit(evt) {
    evt.preventDefault();

    alert("your request has been Submitted!");
}
function complimentHandler() {
    alert("Nice smile!");
}

let picture = document.querySelector("img")

picture.addEventListener("mouseover",complimentHandler)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);