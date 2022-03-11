console.log("Ready for validation");
function validate_details(){    
    username_validation();
    email_validation();
    pname_validation();
    pprice_validation();

    if(username_validation() == 1
    && email_validation() == 1
    && pname_validation() == 1
    && pprice_validation() == 1
    ){
        // alert("done");
        return true;
    }
    else{
        // alert("fill the correct data !");
        return false;
    }
}


function username_validation() {
    let username = document.getElementById("uname");
    let str = username.value;
    let i = str.search(/^([0-9])/);
    // let len = str.length;
    if (i < 0) {
        document.getElementById("uname-error").innerHTML = "";
        return 1;
    }
    // else if (str.length < 1) {
    //     document.getElementById("uname-error").innerHTML = "* Fill this !";
    //     return 0;
    // }
    else {
        document.getElementById("uname-error").innerHTML = "* Enter letters only !";
        return 0;
        }
}
        
function email_validation() {
    let email = document.getElementById("emailid");
    let str = email.value;
    let i = str.search(/^\w+([\.-]?\w+)*@\w*(\.\w{2,3})/);
    if(str.length < 1){
        document.getElementById("email-error").innerHTML = "* Fill this !";
        return 0;
    }
    else if (i < 0) {
        document.getElementById("emailid-error").innerHTML = "* Enter correct email ID !";
        return 0;
    }
    else {
        document.getElementById("emailid-error").innerHTML = "";
        return 1;
    }
}

function pname_validation() {
    let product_name = document.getElementById("pname");
    let str = product_name.value;
    let i = str.search(/(?<!\d)\d{1,5}(?!\d)/);
    if (i < 0) {
        document.getElementById("pname-error").innerHTML = "* Enter correct product name as shown before !";
        return 0;
    }
    else {
        document.getElementById("pname-error").innerHTML = "";
        return 1;
    }
}
                                
function pprice_validation() {
    let product_price = document.getElementById("pprice");
    let str = parseInt(product_price.value);
    let len = str.length;
    // if (len > 0 && len <= 5) {
    //     document.getElementById("pprice-error").innerHTML = "";
    //     return 1;
    // }
    if (str > 0 && str < 9999){
        document.getElementById("pprice-error").innerHTML = "";
        return 1;
    }
    else {
        document.getElementById("pprice-error").innerHTML = "Enter price in range from 1 to 99999";
        return 0;
    }
}
                
                
                
// function validate(){
//  uname_validation();
//      emailid_validation();
//      pname_validation();
//      pprice_validation();

                //     if (
                //         (uname_validation()==1)
                //         // && (emailid_validation()==1)
                //         // && (pname_validation()==1)
                //         // && (pprice_validation()==1)
                //         ){
                //             return true;
                //         }
                //         else{
                //             return false;
                //         }
                // }
                
                // function uname_validation(){
                //     let username = document.getElementById("uname");
                //     if(username.value.length < 1){
                //         document.getElementById("uname-error").innerHTML = "* Fill this !";
                //         return 0;
                //     }
                //     else if(isNaN){
                //         return 1;
                //     }
                //     else{
                //         document.getElementById("uname-error").innerHTML = "* Only letters allowed !";
                //         return 0;
                //     }
                // }