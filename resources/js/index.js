const navToggle = document.querySelector('#toggle');

document.addEventListener("click", (event) => {
    if (!navToggle.contains(event.target)) {
        navToggle.checked = false;
    }
});