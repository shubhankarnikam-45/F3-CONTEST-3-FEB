// hrere we store the all input fields in the variable.
let input = document.querySelectorAll("input");
let name = input[0];
let email = input[1];
let password = input[2];
let cPassword = input[3];

//array which store the each teachers information.
arr=[];
//getting the singup button.

let btn = document.querySelector("button");
btn.addEventListener("click", cheakValidation)

function cheakValidation(e) {
    e.preventDefault();

    if (cheakNumberOfWords(name.value) < 3) {
        alert("please enter the full name");
    }
    else if (cheakEmail(email.value) == false) {
        alert("Email must contain @")
    }
    else if (checkPassword(password.value)==false)
    {
        alert("Password format is incorrect");
    }
    else if(password.value!=cPassword.value)
    {
        alert("Password and Confirm is not Match");
    }
    else
    {

        //{email:teacher1@gmail,pass:123232,name:"Teacher 1 Name"}
       
        obj={};
        obj["email"]=email.value;
        obj["pass"]=password.value;
        obj["name"]=name.value;
        console.log(obj)
        arr.push(obj);
        // console.log(arr)
         localStorage.setItem("data",JSON.stringify(arr));

         email.value="";
         password.value="";
         name.value="";
         cPassword.value="";
        //  window.location.href="login.html";
    }
}


//function to cheak the name is valid or not.
function cheakNumberOfWords(name) {
    name = name.trim();
    name = name.split(" ");
    return name.length;
}


//cheaking email.
function cheakEmail(email)
{
    console.log("Sfsf")
    
    if(email.indexOf("@")==-1)
    {
        return false;
    }
    else
    {
        return true;
    }
}
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