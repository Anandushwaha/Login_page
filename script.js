
var loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
    
    event.preventDefault();
   
    var usernameInput = document.getElementById("username");
    
    var passwordInput = document.getElementById("password");
    
    var username = usernameInput.value;
    
    var password = passwordInput.value;
    
    if (username === "admin" && password === "1234") {
       
        alert("Login successful!");
        
        window.location.href = "home.html";
    } else {
   
        alert("Invalid username or password!");
     
        usernameInput.value = "";
        passwordInput.value = "";
    }
});
