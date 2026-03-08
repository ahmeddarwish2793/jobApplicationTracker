// Load user from localStorage
let user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    user = {
        name: "Ahmed Darwish",
        applications: []
    };
    localStorage.setItem("user", JSON.stringify(user));
}

// Back button & Cancel
function goBack() {
    window.location.href = "../pages/main.html";
}

document.querySelector(".back-btn").addEventListener("click", goBack);
document.querySelector(".button-secondary").addEventListener("click", goBack);

// Save application
document.getElementById("createForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const company = document.getElementById("companyInput").value.trim();
    const position = document.getElementById("positionInput").value.trim();
    const status = document.getElementById("statusInput").value;
    const date = document.getElementById("dateInput").value;

    if (!company || !position || !date) {
        alert("Please fill all required fields.");
        return;
    }

    const newApp = {
        company,
        position,
        status,
        date
    };

    user.applications.push(newApp);

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "../pages/main.html";
});