/**
 * Created by Jenek on 10.10.2017.
 */
var link     = document.querySelector(".write-us");
var popup    = document.querySelector(".modal-content");
var overlay  = document.querySelector(".modal-overlay");
var close    = popup.querySelector(".modal-content-close");
var form     = popup.querySelector("form");
var login    = popup.querySelector("[name=name]");
var email    = popup.querySelector("[name=email");
var feedback = popup.querySelector("[name=feedback]");
var storage  = localStorage.getItem("login");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-content-error");
    overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function(event) {
    if(!login.value || !email.value || !feedback.value) {
        event.preventDefault();
        popup.classList.add("modal-content-error")
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-error")) {
            popup.classList.remove("modal-content-error");
        }
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            overlay.classList.remove("modal-overlay-show");
        }
    }
})
