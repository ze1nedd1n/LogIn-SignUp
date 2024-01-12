let users = ["admin","admin"];

function Login(){

    if(check_fields()){
        console.log("work");
        
        let email = document.getElementById("email").value;
        let pass = document.getElementById("password").value;
        
        if(users.includes(email) && users.includes(pass)){
            document.getElementsByClassName("wrong")[0].style.display = "none";
            document.getElementsByClassName("text_email")[0].style.marginTop = "10vh";
            console.log("yes");
        }
        else{
            console.log("no");  
            document.getElementsByClassName("wrong")[0].style.display = "block";
            document.getElementsByClassName("text_email")[0].style.margin = "0";
        }



    }

}

function check_fields(){
    let valide = true;

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if(email === ''){
        valide = false;
        document.getElementsByClassName('fill_field')[0].style.display = "block";
        if(pass === ''){
            document.getElementsByClassName('fill_field')[1].style.display = "block";
        }
        else {
            document.getElementsByClassName('fill_field')[1].style.display = "none";
        }
        return valide;
    }
    if(pass === ''){
        valide = false;
        document.getElementsByClassName('fill_field')[1].style.display = "block";
        if(email === ''){
            document.getElementsByClassName('fill_field')[0].style.display = "block";
        }
        else {
            document.getElementsByClassName('fill_field')[0].style.display = "none";
        }
        return valide;
    }
    
    document.getElementsByClassName('fill_field')[0].style.display = "none";
    document.getElementsByClassName('fill_field')[1].style.display = "none";
    return valide;


}