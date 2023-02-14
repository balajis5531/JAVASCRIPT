//    register starts



// const form = document.getElementById("register");

// const f_name = document.getElementById("first_name");

// const l_name = document.getElementById("last_name");

// const mobilenumber = document.getElementById("mobile_number");

// const regemail = document.getElementById("regemail");

// const regpassword = document.getElementById("regpassword");



// const registerFromValidation = () => {


    const user_data = JSON.parse(localStorage.getItem("users"));

    const f_name_value = f_name.value.trim();
    const l_name_value = l_name.value.trim();
    const mobile_value = mobilenumber.value.trim();
    const reg_email_value = regemail.value.trim();
    const reg_pass_value = regpassword.value.trim();

    // empty array
    let record = [];



    // empty object
    let user = {};



    let users = JSON.parse(localStorage.getItem('users')) ?? record;



    user["first_name"] = f_name_value,
        user["last_name"] = l_name_value,
        user["mobile_number"] = mobile_value,
        user["email"] = reg_email_value,
        user["password"] = reg_pass_value;

    let check = true;

    if (user_data !== null) {


        for (let i = 0; i < user_data.length; i++) {

            if (user_data[i].email === reg_email_value) {

                check = false;

            }

            else if (user_data[i].mobile_number === mobile_value) {

                check = false;

                break;
            }

        }



    }

    if (check) {

        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));

        alert("Account created successfully");


    }

    else {
        alert("Already Have a account");
    }


}




form.onsubmit = e => {

    e.preventDefault();

    registerFromValidation();
}





// filter using this commend






const form = document.getElementById("register");

const f_name = document.getElementById("first_name");

const l_name = document.getElementById("last_name");

const mobilenumber = document.getElementById("mobile_number");

const regemail = document.getElementById("regemail");

const regpassword = document.getElementById("regpassword");



const registerFromValidation = () => {
    let record = [];

    const user_data = JSON.parse(localStorage.getItem("users")) ?? record;

    const f_name_value = f_name.value.trim();
    const l_name_value = l_name.value.trim();
    const mobile_value = mobilenumber.value.trim();
    const regemail_value = regemail.value.trim();
    const regpassword_value = regpassword.value.trim();

    if (!f_name_value || !l_name_value || !mobile_value || !regemail_value || !regpassword_value) {

        alert("Please Fill All Required Field");
    }



    const email_check = user_data.filter(obj => obj.email == regemail_value || obj.mobile == mobile_value);


    if (email_check.length >= 1) {
        alert("Email Already Exist or Phone Number Already exist");

    }
    else {
        const user = {}

        user["f_name"] = f_name_value
            user["l_name"] = l_name_value
            user["mobile"] = mobile_value
            user["email"] = regemail_value
            user["password"] = regpassword_value;


        user_data.push(user);

        localStorage.setItem("users", JSON.stringify(user_data));
        alert("Successfully Registered")
        form.reset();
    }


}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    registerFromValidation();
});




// you can use any one this
