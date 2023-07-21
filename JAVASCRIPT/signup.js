var form = document.getElementById("forms");

// var emailAddress= document.getElementById("emailAddress");
// var  userName = document.getElementById("Username");
// function

let submits = function sumbmit(event){
    event.preventDefault();
    const myemail = document.getElementById("emailAddress").value;
    const userNames = document.getElementById("username").value;
    const retypePassword = document.getElementById("reconfirmPassword").value;
    var psswrd = document.getElementById("passwords").value;

    if(myemail===""|| userNames===""||retypePassword===""||psswrd===""){
        alert("Kindly complete all fields");
        return false;
        }
      if (psswrd !== retypePassword) {
     alert("Passwords do not match");
    return false;
        }

    // console.log(myemail);
    // console.log(userName);
    const formData = {
        email: myemail,
        username: userNames,
        pssword:psswrd,
      };
sendFormData(formData)
};

let sendFormData = function (formData) {
    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
      form.addEventListener("submit", submits);



//     const jsonData = JSON.stringify(formData);
//     console.log(jsonData);

// form.addEventListener("submit",submit);
















// var form = document.getElementById("forms");
// var psswrd = document.getElementById("passwords");

// let submit = function submit(event) {
//   event.preventDefault();

//   const myemail = document.getElementById("emailAddress").value;
//   const userNames = document.getElementById("username").value;
//   const password = document.getElementById("passwords").value;
//   const retypePassword = document.getElementById("reconfirmPassword").value;

//   if (myemail === "" || userNames === "" || password === "" || retypePassword === "") {
//     alert("Kindly complete all fields");
//     return false;
//   }

//   if (password !== retypePassword) {
//     alert("Passwords do not match");
//     return false;
//   }

//   const formData = {
//     email: myemail,
//     username: userNames,
//     password: password,
//   };

//   axios
//     .post("YOUR_API_URL", formData) // Replace "YOUR_API_URL" with the actual URL of your API endpoint
//     .then(function (response) {
//       // Handle the API response if needed
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       // Handle any errors that occur during the API request
//       console.error(error);
//     });
// };

// form.addEventListener("submit", submit);
















// var email = document.getElementById("emailAddress")
// var password = document.getElementById("Passwords")
// var btn = document.getElementById("signupbtn")
// var links = document.getElementById("signupbtn")














// let emalival = function emailValidation(){
//     let pattern1 = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
//     let pattern2 = /[A-Za-z]+[0-9]/;
//     let result1 = pattern1.test(email.value)
//     let result2 = pattern2.test(password.value)
//     if(result1===true && result2===true){
//        window.location.href = "http://127.0.0.1:5500/htmls/SuccessfulAccount.html";
//        console.log(true);
//     }
//     else{
//         if(result2===false){error.textContent = "invalid password. your password should contain letters and numbers"}
//         if(result1===false){error.textContent = "invalid email"}

//         console.log(false)
//     }



