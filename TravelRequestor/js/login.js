"use strict";
const Username = document.getElementById("name");
const uPassword = document.getElementById("password");
const btSubmit = document.querySelector("button");
btSubmit === null || btSubmit === void 0 ? void 0 : btSubmit.addEventListener("click", displayRole);
var Role;
(function (Role) {
    Role[Role["ADMINS"] = 1] = "ADMINS";
    Role[Role["EMPLOYEES"] = 2] = "EMPLOYEES";
})(Role || (Role = {}));
let admins = {
    name: "admin",
    password: "admin",
    role: Role.ADMINS,
};
let employees = {
    name: "employee",
    password: "employee",
    role: Role.EMPLOYEES,
};
let users = [admins, employees];
function displayRole() {
    var username = Username.value;
    var password = uPassword.value;
    // console.log(txtuser)
    for (let i in users) {
        if (users[i].password === password) {
            if (users[i].role === Role.ADMINS) {
                console.log("admin");
                window.location.href = "http://127.0.0.1:5500/TravelRequestor/html/empForm.html";
                break;
            }
            else {
                console.log("employee");
                window.location.href = "http://127.0.0.1:5500/TravelRequestor/html/adminrequestor.html";
                break;
            }
        }
    }
}
