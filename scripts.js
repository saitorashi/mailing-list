/** This function is called when submitting. 
If email is blank, it will return a message**/
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Please input your email");
      return false;
    }
  }
  