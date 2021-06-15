const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const ResetButton = document.getElementById('reset');

//Form information for sign up
const inputNameSignUp = document.getElementById("name-signup");
const inputEmailSignUp = document.getElementById("email-signup");
const inputPasswordSignUp = document.getElementById("password-signup");
const genderSignUp = document.getElementById("gender");

//email ang password for login
const inputEmailLogin = document.getElementById("email-login");
const inputPasswordLogin = document.getElementById("password-login");

//Sign up button and form
const SignIn = document.getElementById("sign-in");
const SignUp = document.getElementById("sign-up");
const MyForm = document.getElementById("myForm");

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


function setInputValue(input_id,  val){
     document.getElementById(input_id).setAttribute('value', val); 
}

function setSelectValue(input_id, val){
    let selectElement = document.getElementById(input_id);
    let option = document.createElement("option");
    option.text = val;
    selectElement.add(option);
}

ResetButton.addEventListener("click", (event) => {
    event.preventDefault();
    setInputValue('user-name', "");
    setInputValue('user-email', "");
    setInputValue('user-password', "");
    document.getElementById('user-gender').remove([0]);
})

SignUp.addEventListener("click", (event) => {
    event.preventDefault();
   const name = MyForm.elements['name'].value;
   const email = MyForm.elements['email'].value;
   const password = MyForm.elements['password'].value;
   const gender = MyForm.elements['gender'].value;

   if(name !== "" && email !== "" && password !== "" && gender !== ""){
    setInputValue('user-name', name);
    setInputValue('user-email', email);
    setInputValue('user-password', password);
    setSelectValue('user-gender', gender);
    modal.style.display = "block";
   }else {
       alert("one textfield is empty")
   }
   
    //window.location.href = "user.html"
});

SignIn.addEventListener("click", () => {
    alert("Please sign an account first");
});

inputEmailLogin.addEventListener("change", (event) => {
    event.preventDefault();
    inputEmailLogin.classList.add("onLeave");
    const isEmpty = event.target.value;

    if(isEmpty !== ""){
        inputEmailLogin.style.border = "1px solid green";
    }else {
        inputEmailLogin.style.border = "1px solid red";
    }

})

inputPasswordLogin.addEventListener("change", (event) => {
    event.preventDefault();
    inputPasswordLogin.classList.add("onLeave");
    const isEmpty = event.target.value;

    if(isEmpty !== ""){
        inputPasswordLogin.style.border = "1px solid green";
    }else {
        inputPasswordLogin.style.border = "1px solid red";
    }

})

inputNameSignUp.addEventListener("change", (event) => {
    event.preventDefault();
    inputNameSignUp.classList.add("onLeave");
    const isEmpty = event.target.value;

    if(isEmpty !== ""){
        inputNameSignUp.style.border = "1px solid green";
    }else {
        inputNameSignUp.style.border = "1px solid red";
    }

})

inputEmailSignUp.addEventListener("change", (event) => {
    event.preventDefault();
    inputEmailSignUp.classList.add("onLeave");
    const isEmpty = event.target.value;

    if(isEmpty !== ""){
        inputEmailSignUp.style.border = "1px solid green";
    }else {
        inputEmailSignUp.style.border = "1px solid red";
    }

})

inputPasswordSignUp.addEventListener("change", (event) => {
    event.preventDefault();
    inputPasswordSignUp.classList.add("onLeave");
    const isEmpty = event.target.value;

    if(isEmpty !== ""){
        inputPasswordSignUp.style.border = "1px solid green";
    }else {
        inputPasswordSignUp.style.border = "1px solid red";
    }
})


genderSignUp.addEventListener("change", (event) => {
    event.preventDefault();
    genderSignUp.classList.add("onLeave");
    const isEmpty = event.target.value;

    if(isEmpty !== ""){
        genderSignUp.style.border = "1px solid green";
    }else {
        genderSignUp.style.border = "1px solid red";
    }
})




signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});