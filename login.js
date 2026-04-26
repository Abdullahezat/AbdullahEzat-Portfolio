VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: "#0065ad",
    backgroundColor:"#000c1a"
});

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (username === "admin" && password === "1234") {
        window.location.href = "index.html";
    } 
    else {
        alert("بيانات الدخول غير صحيحة!");
    }
}