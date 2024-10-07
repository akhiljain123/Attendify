document.querySelector("#form").addEventListener("submit", submitFun);

function submitFun(elme) {
    elme.preventDefault();
    const username = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;

    if (username == "teacher" && password == "password") {
        window.location.href = "student.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }
}
