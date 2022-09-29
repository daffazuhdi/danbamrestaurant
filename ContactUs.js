function validation(){

  
   var namae = document.getElementById("namae").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var Agrea = document.getElementById("Agrea").value;
    var error_message = document.getElementById("error_message");
    var text;
     
    error_message.style.padding = "10px";
    
    
   
    if(namae.length <= 4){
      text = "Full Name is required";
      error_message.innerHTML = text;
      return false;
    }
  

   if(email.indexOf("@") == -1){
    text = "Email is required";
    error_message.innerHTML = text;   
    return false;
  }

  if(document.getElementById("location").value  == ""){
  text = "Location cannot be empty";
  error_message.innerHTML = text;
  return false;
  }

  if(document.getElementById("massage").value  == ""){
    text = "Message cannot be empty";
    error_message.innerHTML = text;
    return false;
  }

  alert("Your message has been sent!");
  return true;   
}
   

