var form = document.getElementById("forms")
var email = 
     
function login(event) {
    event.preventDefault();
  
    const email = document.getElementById("emailAddress").value;
    const password = document.getElementById("password").value;
  
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return false;
    }
  
    const registeredEmail = "example@example.com"; // Replace with the registered email
    const registeredPassword = "password123"; // Replace with the registered password
  
    
    if (email === registeredEmail && password === registeredPassword) {
      console.log("Login successful");
    } else {
      alert("Incorrect email or password");
    }
  }

  form.addEventListener("submit", login);
  