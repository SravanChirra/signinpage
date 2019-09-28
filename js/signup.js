//for duplicates and pushing ele to array
// else {
//     // debugger
//       var userObj = {
//           'userName' : name,
//           'userPw' : pw
//       }
//       var details = JSON.parse(window.localStorage.getItem("data"));
//       console.log(details);
//       if  (details != null){
//           console.log(details.length);
         
//           if (details.filter(e => e.userName === name).length > 0) {
//               alert('Email ID already Exists');
//             }else{
//               details.push(userObj);   
//             }
//       }
//       else if(details == null) {
//           details=[];
//           console.log(details.length);
//           details.push(userObj);                
//       } else{
//           console.log(details.length);
//       }         
//           window.localStorage.setItem("data", JSON.stringify(details));

// }

// sign up form validation starts------------
function regFormValidation() {
    var userName = document.getElementById("user_name").value;
    var userpw = document.getElementById("user_pw").value;
    var usercpw = document.getElementById('user_cpw').value;
    if(userNameValidation()) {
        if(pwValidation()) {
            if(cpwValidation()) {
                document.getElementById('user_name').value = "";
                document.getElementById('user_pw').value = "";
                document.getElementById('user_cpw').value = "";
            }
        }
    }
    return false;
}

function userNameValidation() {
    var userName = document.getElementById("user_name").value;
    var emailRegExpression = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    if( userName == "" || !userName.match(emailRegExpression)) {
        document.getElementById('user-name').style.paddingLeft= "1em";
        document.getElementById('user-name').style.color = "#f37d06fc";
        if(userName == "") {
            document.getElementById('user-name').innerHTML = "Please enter your email";
            return false;
        }
        else {
            document.getElementById('user-name').innerHTML = "Please enter valid email";
            return false;
        }
    }
    else {
        document.getElementById('user-name').innerHTML = "";
        return true;
    }
}
function pwValidation() {
    var userpw = document.getElementById("user_pw").value;
    var pwRegExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
    var minNumberofChars = 6;
    var maxNumberofChars = 10;
    if( userpw == "" || userpw.length < maxNumberofChars || userpw.length > minNumberofChars) {
        document.getElementById('user-pw').style.paddingLeft= "1em";
        document.getElementById('user-pw').style.color = "#f37d06fc";
        if(userpw == "") {
            document.getElementById('user-pw').innerHTML = "Please Enter your Password";
            return false;
        }
        else if(userpw.length < maxNumberofChars){
            document.getElementById('user-pw').innerHTML = "Enter more than 6 characters";
            return false;
        }
        else {
            document.getElementById('user-pw').innerHTML = "Enter less than 10 characters";
            return false;
        }
    }
    else {
        document.getElementById('user-pw').innerHTML = "";
        return true;
    }
}
function cpwValidation() {
    var usercpw = document.getElementById('user_cpw').value;
    var userpw = document.getElementById('user_pw').value;
    if(usercpw == "" || (userpw == !usercpw)) {
        document.getElementById('user-cpw').style.paddingLeft= "1em";
        document.getElementById('user-cpw').style.color = "#f37d06fc";
        document.getElementById('user-cpw').innerHTML = "Confirm your Password";
        return false;

    }
    else {
        document.getElementById('user-cpw').style.paddingLeft= "1em";
        document.getElementById('user-cpw').style.color = "#f37d06fc";
        document.getElementById('user-cpw').innerHTML = "Passwords are not matched";
        return true;
    }
}
// ------------sign up form validation ends