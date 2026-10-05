var registrationScreen = document.getElementById("registrationScreen");
var profileScreen = document.getElementById("profileScreen");

var createBtn = document.getElementById("createBtn");
var editBtn = document.getElementById("editBtn");

createBtn.addEventListener("click", function () {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("course").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var message = document.getElementById("message");


    if (name == "") {
        message.textContent = "Please enter your name";
        return false;
    }

    else if (email == "") {
        message.textContent = "Please enter your email";
        return false;
    }

    else if (!email.includes("@")) {
        message.textContent = "Please enter a valid email";
        return false;
    }

    else if (age == "") {
        message.textContent = "Please enter your age";
        return false;
    }

    else if (age < 18) {
        message.textContent = "Age must be 18 or above";
        return false;
    }

    else if (course == "") {
        message.textContent = "Please select a course";
        return false;
    }

    else if (password == "") {
        message.textContent = "Please enter your password";
        return false;
    }

    else if (password.length < 6) {
        message.textContent= "Password must have at least 6 characters";
        return false;
    }

    else if (confirmPassword == "") {
        message.textContent = "Please confirm your password";
        return false;
    }

    else if (password != confirmPassword) {
        message.textContent = "Passwords do not match";
        return false;
    }

var gender;

    if (document.getElementById("Male").checked) {
        gender = "Male";
    }
    else if
         (document.getElementById("Female").checked) {
        gender = "Female";
    }

    else if (document.getElementById("Others").checked) {
        gender = "Others";
    }

    else {
        message.textContent = "Please select your gender";
        return;
    }

    
     var status;

    if (age >= 16 && age <= 17) {
        status = "Junior Student";
    }

    else if (age >= 18 && age <= 22) {
        status = "Student";
    }

    else {
        status = "Adult Student";
    }

     var student = {
        name: name,
        email: email,
        age: age,
        course: course,
        gender: gender,
        status: status
    };
 
    document.getElementById("sName").textContent="Name- "+student.name;

    document.getElementById("sAge").textContent="Age- "+student.age;

    document.getElementById("sEmail").textContent="Email- "+student.email;

    document.getElementById("sCourse").textContent ="Course- "+student.course;

    document.getElementById("sGender").textContent ="Gender- "+student.gender;

    document.getElementById("sStatus").textContent ="Status- "+student.status;


     registrationScreen.classList.add("hidden");

      profileScreen.classList.remove("hidden");

});

editBtn.addEventListener("click", function () {

    profileScreen.classList.add("hidden");

    registrationScreen.classList.remove("hidden");


        document.getElementById("name").value =
        document.getElementById("sName").textContent.replace("Name: ", "");

    document.getElementById("email").value =
        document.getElementById("sEmail").textContent.replace("Email: ", "");

    document.getElementById("age").value =
        document.getElementById("sAge").textContent.replace("Age: ", "");

    document.getElementById("course").value =
        document.getElementById("sCourse").textContent.replace("Course: ", "");


    var gender =
        document.getElementById("sGender").textContent.replace("Gender: ", "");

    document.getElementById("Male").checked = false;
    document.getElementById("Female").checked = false;
    document.getElementById("Others").checked = false;

    if (gender == "Male") {
        document.getElementById("Male").checked = true;
    }

    else if (gender == "Female") {
        document.getElementById("Female").checked = true;
    }

    else {
        document.getElementById("Others").checked = true;
    }


    document.getElementById("message").textContent = "";
});




   
   
