document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    let userData = {
        name: name,
        email: email,
        mobile: mobile
    };

    // AJAX POST Method
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "index.html", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function(){

        if(xhr.readyState == 4){

            // Get old data from local storage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Push new data into array
            users.push(userData);

            // Store updated array
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration Successful");

            document.getElementById("registerForm").reset();
        }
    };

    xhr.send(JSON.stringify(userData));

});