function validate(){
    fname_validation();
    lname_validation();
    email_validation();
    mobile_validation();
    pswd_validation();
    age_validation();

    if ((fname_validation()==1) && (lname_validation()==1) && (email_validation()==1) && (mobile_validation()==1) && (pswd_validation()==1) && (age_validation()==1)){
        return true;
    }
    else{
        // alert("Please fill the form exactly as requirerd, click OK to see errors !")
        return false;
    }
}


function fname_validation(){
    let fn = document.getElementById("fname");
    if (fn.value.length < 1){
        document.getElementById("fname-error").innerHTML = "* Fill this !";
        return 0;
    } 
    else if(fn.value.length >= 10){
        document.getElementById("fname-error").innerHTML = "* Enter upto 10 characters only !";
        return 0;
    }
    else{
        document.getElementById("fname-error").innerHTML = "";
        return 1;
    }
}

function lname_validation(){
    let ln = document.getElementById("lname");
    if (ln.value.length < 1){
        document.getElementById("lname-error").innerHTML = "* Fill this !";
        return 0;
    } 
    else if(ln.value.length >= 10){
        document.getElementById("lname-error").innerHTML = "* Enter upto 10 characters only !";
        return 0;
    }
    else{
        document.getElementById("lname-error").innerHTML = "";
        return 1;
    }
}

function email_validation(){
    let em = document.getElementById("email");
    let str = em.value;
    let i = str.search(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    if(str.length < 1){
        document.getElementById("email-error").innerHTML = "* Fill this !";
        return 0;
    }
    else if (i < 0) {
        document.getElementById("email-error").innerHTML = "* Enter correct email ID !";
        return 0;
    }
    else {
        document.getElementById("email-error").innerHTML = "";
        return 1;
    }
}

function mobile_validation(){
    let phn = document.getElementById("phnnumber");
    if (phn.value.length < 1){
        document.getElementById("number-error").innerHTML = "* Fill this !";
        return 0;
    }
    else if (phn.value < 9000000000 || phn.value > 9999999999   ){
        document.getElementById("number-error").innerHTML = "* Enter correct Mobile number !";
        return 0;
    }
    else{
        document.getElementById("number-error").innerHTML = "";
        return 1;
    }
}

function pswd_validation(){
    let p1 = document.getElementById("pwd");
    let p2 = document.getElementById("cpwd");
    if (p1.value.length < 1){
        document.getElementById("pswd-error").innerHTML = "* Fill this!"
        return 0;
    }
    else if(p2.value.length < 0){
        document.getElementById("cpswd-error").innerHTML = "* Fill this!"
        return 0;
    }
    else if (p1.value != p2.value){
        document.getElementById("cpswd-error").innerHTML = "* Enter same password as above !"
        return 0;
    }
    else{
        // document.getElementById("pswd-error").innerHTML = "";
        // document.getElementById("cpswd-error").innerHTML = "";
        return 1;
    }
}

function age_validation(){
    let a = document.getElementById("age");
    if (a.value < 13 || a.value > 120){
        document.getElementById("age-error").innerHTML = "* Your age should be in 13 to 120  !";
        return 0;
    }
    else{
        document.getElementById("age-error").innerHTML = "";
        return 1;
    }
}