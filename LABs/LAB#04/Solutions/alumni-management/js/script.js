function login() {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

function updateLoginButton() {

    const loginLogout = document.getElementById("loginLogout");

    if (loginLogout) {

        const loggedIn = localStorage.getItem("loggedIn");

        if (loggedIn === "true") {

            loginLogout.textContent = "Logout";
            loginLogout.href = "#";
            loginLogout.onclick = logout;

        } else {

            loginLogout.textContent = "Login";
            loginLogout.href = "login.html";
            loginLogout.onclick = null;

        }
    }
}

updateLoginButton();