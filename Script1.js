function validate(e){
    e.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const Age=document.getElementById("Age").value;
    const messagebox=document.getElementById("messagebox");
    let messagebox='';
    if (email ===''){
        messagebox="enter an email";
    }
    else if(password ===''){
        messagebox="enter the password";
    }
    else if (Age === '') {
        messagebox = "enter the Age";
    }
    else{
        messagebox="login successful"
    }
    messagebox.innerText=messagebox;

}