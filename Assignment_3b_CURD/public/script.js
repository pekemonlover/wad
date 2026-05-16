const api = "http://localhost:3000/api/users";


// LOAD USERS
async function loadUsers() {

    const response = await fetch(`${api}/getUsers`);

    const users = await response.json();

    let table = document.getElementById("userTable");

    table.innerHTML = "";

    users.forEach(user => {

        table.innerHTML += `

            <tr>

                <td>${user.name}</td>

                <td>${user.email}</td>

                <td>${user.password}</td>

                <td>

                    <button onclick="deleteUser('${user._id}')">
                        Delete
                    </button>

                    <button onclick="editUser('${user._id}','${user.name}','${user.email}','${user.password}')">
                        Edit
                    </button>

                </td>

            </tr>

        `;

    });

}


// ADD USER
async function addUser() {

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    await fetch(`${api}/addUser`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            password
        })

    });

    loadUsers();

}


// DELETE USER
async function deleteUser(id) {

    await fetch(`${api}/deleteUser/${id}`, {

        method: "DELETE"

    });

    loadUsers();

}


// EDIT USER
async function editUser(id, oldName, oldEmail, oldPassword) {

    const name = prompt("Enter New Name", oldName);

    const email = prompt("Enter New Email", oldEmail);

    const password = prompt("Enter New Password", oldPassword);

    await fetch(`${api}/updateUser/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            password
        })

    });

    loadUsers();

}


// INITIAL LOAD
loadUsers();