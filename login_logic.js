// login for loop solving

    // login starts


        // const checkr = document.getElementById("checkregister");

        // checkr.onsubmit = e => {

        //     let email = document.getElementById("username").value;
        //     let password = document.getElementById("password").value;
        //     let localUsers = JSON.parse(localStorage.getItem("users"));



        //     // if (localUsers === "") {
        //     //     alert("Login Failure");
        //     //     return;
        //     // }

        //     let Success = false;

        //     for (let i = 0; i < localUsers.length; i++) {

        //         if (localUsers[i].email === email && localUsers[i].password === password) {
        //             Success = true;

        //             break;

        //         }

        //     }

        //     if (Success) {

        //         let profile_email = email;

        //         console.log(profile_email);

        //         localStorage.setItem("profile_email", profile_email);


        //         alert("Login Success")
        //         window.location.href = "pages/your opinion/profilepage.html"
        //     } else {
        //         alert("Login Failure");

        //     }
        // }



        //    login starts

const checkform = document.getElementById("checkregister");

const username = document.getElementById("username");

const password = document.getElementById("password");



const checkregisterFromValidation = () => {


    const user_data = JSON.parse(localStorage.getItem("users"));

    const username_value = username.value.trim();
    const password_value = password.value.trim();


    if (!username_value || !password_value) {

        alert("Please Fill All Required Field");

    }



    const email_check = user_data.filter(obj => obj.email == username_value && obj.password == password_value)

    if (email_check.length >= 1) {

        let profile_email = username_value;

        console.log(profile_email);

        localStorage.setItem("profile_email", profile_email);
        window.location.href = "pages/home/home.html"
        alert("Successfully Login");

        checkform.reset();




    } else {
        alert("Email or Password Incorrect");
    }

}



checkform.addEventListener("submit", (e) => {
    e.preventDefault();
    checkregisterFromValidation();
});