//dashboard

//getting JSON object.
let userInfo=document.querySelector(".userInfo");
let data=JSON.parse(localStorage.getItem("currentUser"));
console.log(data)

//heading 1 which is shown in dashboard
let heading1=document.createElement("h4");
userInfo.append(heading1);
heading1.innerText="WELCOME BACK:"+`   ${data["name"]}`

// heading 2 which is shown in the dashboard

let heading2=document.createElement("h4");
userInfo.append(heading2);
heading2.innerText="YOUR EMAIL ID:"+`${data["email"]}`;


//variables that stores the value.
let form=document.querySelector("form");
let oldPassword=form[0];
let newPassword=form[1]
let confirmPassword=form[2]


let changeBtn=form[3];
let logoutBtn=form[4];



changeBtn.addEventListener("click",addNewPassword)

function addNewPassword(e)
{
    e.preventDefault();


    
    if (checkPassword(newPassword.value)==false)
    {
        alert("Password format is incorrect");
    }
    else{
    if(data.pass==oldPassword.value)
    {
        if(newPassword.value==confirmPassword.value)
        {
            data["pass"]=newPassword.value;
            //updating the value in the local storage
            localStorage.setItem("currentUser",JSON.stringify(data));

            //

            let data2=JSON.parse(localStorage.getItem("data"));
            
            for(i of data2)
            {
                if(i["email"]==data.email)
                {
                    i["pass"]=newPassword.value;
                }
            }

            
            localStorage.setItem("data",JSON.stringify(data2));
        }
        else
        {
            alert("new password or confirm password is wrong");
        }
    }
    else
    {
        alert("Enterd 'Old Password' is not correct");
    }

}
}

//logout button
logoutBtn.addEventListener("click",logOut)

function logOut(e)
{
    e.preventDefault();
    localStorage.removeItem('currentUser')
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
