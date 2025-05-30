
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            console.log("Form submitted");

            const name = form.elements["Name"].value.trim();
            const email = form.elements["Email"].value.trim();
            const number = form.elements["number"].value.trim();
            const message = form.elements["message"].value.trim(); // updated name

            if (!name || !email || !number || !message) {
                alert("Please fill in all fields.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been sent.");
            form.reset();
        });
    });

