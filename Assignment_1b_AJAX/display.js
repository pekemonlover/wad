let users = JSON.parse(localStorage.getItem("users")) || [];

let table = document.getElementById("userTable");

users.forEach(function(user){

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = user.name;
    cell2.innerHTML = user.email;
    cell3.innerHTML = user.mobile;

});