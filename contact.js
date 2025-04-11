function validateForm() {
    const name = document.forms["contactForm"]["name"].value.trim();
    const email = document.forms["contactForm"]["email"].value.trim();
    const message = document.forms["contactForm"]["message"].value.trim();
  
    
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
  
    return true;
  }
  