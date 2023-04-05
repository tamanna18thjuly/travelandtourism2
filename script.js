function validate(){
    var usrname = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;

    //Not leaving blank space
    if(usrname == ""){
        alert("Enter the username");
        document.form.username.focus();
        return false;
    }
    if(!isNaN(usrname)){
        alert("Enter the alphabets only");
        document.form.username.value="";
        document.form.username.focus();
        return false;

    }
   
        
    

}