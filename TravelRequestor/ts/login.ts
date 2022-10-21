const Username=document.getElementById("name")! as HTMLInputElement;
const uPassword=document.getElementById("password")! as HTMLInputElement;

const btSubmit=document.querySelector("button");
btSubmit?.addEventListener("click",displayRole);

enum Role{ADMINS=1,EMPLOYEES=2}

let admins={
    name:"admin",
    password:"admin",
    role:Role.ADMINS,
}
let employees={
    name:"employee",
    password:"employee",
    role:Role.EMPLOYEES,
}
let users=[admins,employees]

function displayRole(this: HTMLElement){

    var username = Username.value

    var password = uPassword.value

    // console.log(txtuser)

    for (let i in users) {

        if (users[i].password === password) {

            if (users[i].role === Role.ADMINS) {
                console.log("admin")
                window.location.href="http://127.0.0.1:5500/TravelRequestor/html/empForm.html";
                break;
            }

            else{
                console.log("employee")
                window.location.href="http://127.0.0.1:5500/TravelRequestor/html/adminrequestor.html";
                break;
            }
            
        }

    }

}
