//login page.
console.log("shubhankar")
let form = document.querySelector("form");
let email = form[0];
let password = form[1];
let btn = form[2];

//when user click on the button login
btn.addEventListener("click", loginCheak);

function loginCheak(e) {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));

    // console.log(data);
    let flag = false;


    if (cheakEmail(email.value) == false) {
        alert("Email must contain @")
    }
    else if (checkPassword(password.value) == false) {
        alert("Password format is incorrect");
    }
    else {
        for (let i of data) {
            if (i.email == email.value && i.pass == password.value) {
                flag = true;
                let obj = {};
                obj = i;

                //gerating the 16 character random string.
                let randomString = "";
                let number = "123456789";
                let sl = "abcdefghijklmnopqrstuvwxyz";
                let cl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

                let finalString = number + sl + cl;
                console.log(finalString)
                for (let i = 0; i <= 15; i++) {
                    let randomIndex = Math.floor(Math.random() * finalString.length);
                    randomString += finalString[randomIndex];
                }

                obj["token"] = randomString;
                //creating the localStorage of the currentUser.
                localStorage.setItem("currentUser", JSON.stringify(obj));

                window.location.href = "../dashboard.html";


            }
        }

    }


    if (flag == false) {
        alert("email id or passoword  is not found")
    }
}




//cheaking email.
function cheakEmail(email) {
    console.log("Sfsf")

    if (email.indexOf("@") == -1) {
        return false;
    }
    else {
        return true;
    }
}


//VALIDATION.   
//cheaking passowrd
function checkPassword(password) { // "A$bhi123"
    let cl = 0, sl = 0, n = 0, sc = 0
    for (let t of password) { //  A
        if (t >= "A" && t <= "Z") {
            cl = cl + 1 // capital letter
        }
        else if (t >= "a" && t <= "z") {
            sl++ // small letter
        }
        else if (t >= "0" && t <= "9") {
            n++ // number
        }
        else {
            sc++ // special character
        }
    }
    if (cl >= 1 && sl >= 1 && n >= 1 && sc >= 1) {
        return true
    }
    else {
        return false
    }
}
