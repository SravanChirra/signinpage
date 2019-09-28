



//window.localStorage.clear();
// storing input from signup form

function store() {

    //console.log(userdeatils[userdeatils.length - 1]);
    var name = document.getElementById('user_name').value;
    var pw = document.getElementById('user_pw').value;
    var cpw = document.getElementById('user_cpw').value;

    if (name == "" || pw == "" || cpw == "") {
        alert("Enter all details");
    }
    else if (pw != cpw) {
        alert("pw and cpw doesn't match");
    }
    else {
        var userObj = {
            'userName': name,
            'userPw': pw
        }
        var details = JSON.parse(window.localStorage.getItem("data"));
        console.log(details);
        if (details != null) {
            console.log(details.length);

            if (details.filter(e => e.userName === name).length > 0) {
                alert('Email ID already Exists');
            } else {
                details.push(userObj);
            }
        }
        else if (details == null) {
            details = [];
            console.log(details.length);
            details.push(userObj);
        } else {
            console.log(details.length);
        }
        window.localStorage.setItem("data", JSON.stringify(details));

    }
}
// detailslist contains registeed users data 
var detailslist = JSON.parse(window.localStorage.getItem("data"));


// check if stored data from register-form is equal to entered data in the   login-form
function check() {
    // stored data from the register-form
    var storedName = localStorage.getItem('user-name');
    var storedPw = localStorage.getItem('user-pw');

    // entered data from the login-form
    var loginUserName = document.getElementById('userName').value;
    var loginUserPw = document.getElementById('userPw').value;


    if (loginUserName == "" || loginUserPw == "") {
        document.getElementById('login-error').innerHTML = "Email & Password are required";
        return false;
    }
    else {
        // to check user exists or not in the application
        if (detailslist.filter(e => e.userName === loginUserName).length > 0) {
            // check if stored data from register-form is equal to data from login form
            for (var i = 0; i < detailslist.length; i++) {
                if (loginUserName == detailslist[i].userName && loginUserPw == detailslist[i].userPw) {
                    // window.location.href = 'https://keep.google.com';
//                     window.location.href = 'notes.html';
                    alert("You are logged in");

                    return false;
                }
                else {
                    document.getElementById('login-error').innerHTML = "Email and Password combination is not valid";
                    return false;
                }
            }
            // return false;
        }
        else {
            document.getElementById('login-error').innerHTML = "Email doesn't exist, Please register";
             window.location.href = "index.html";
            return false;
        }
    }
}


