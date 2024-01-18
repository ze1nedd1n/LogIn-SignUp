let users = [
    {
        name: "admin" ,
        email: "admin@gmail.com",
        password: "admin",
        age: 20,
        gender: "Male",
    },
    {
      name: "Harry",
      email: "hpotter@hogwards.com",
      password: "wizzardzrule777",
      age: 17,
      gender: "Male",
    },
    {
      name: "Hermione",
      email: "hgrainger@hogwards.com",
      password: "qDjVontJqoQdkvl",
      age: 17,
      gender: "Female",
    },
    {
      name: "Rick",
      email: "rsanchez@science.com",
      password: "LbmtDXfzYJwDTKA",
      age: 78,
      gender: "Male",
    },
  ];
  

function Login(){

    if(check_fields_login()){
        
        let email = document.getElementById("email").value;
        let pass = document.getElementById("password").value;
        const email_index = users.findIndex(({ email }) => email === document.getElementById("email").value);
        const pass_index = users.findIndex(({ password }) => password === document.getElementById("password").value);
        
        if(email_index == pass_index && email_index != -1){
            document.getElementsByClassName("wrong")[0].style.display = "none";
            document.getElementsByClassName("text_email")[0].style.marginTop = "10vh";

            Swal.fire({
                title: "Welcome, " + users[email_index].name,
                icon: "success",
              }).then(() => {
                location.href = "../index.html";
              });
        }
        else{
            document.getElementsByClassName("wrong")[0].style.display = "block";
            document.getElementsByClassName("text_email")[0].style.margin = "0";
        }
    }

}

function check_fields_login(){
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



function SignUp(){
    

    if(check_fields_signUp()){
        
        let name = document.getElementById("name").value;
        let Email = document.getElementById("email").value;
        let pass = document.getElementById("password").value;
        let age = document.getElementById("Age").value;
        let gender = document.querySelector('input[name="gender"]:checked').value;

        const check_email = users.findIndex(({ email }) => email === document.getElementById("email").value);
        if(check_email < 0){
            let user = new Object();
            user.name = name;
            user.email = Email;
            user.password = pass;
            user.age = age;
            user.gender = gender;

            users.push(user);
            console.log(users);
            Swal.fire({
                title: "Аккаунт успешно создан",
                icon: "success",
              });
        }
        else{
            Swal.fire({
                title: "Аккаунт с такой почтой уже существует",
                icon: "error",
              });
        }

        

    }

}
// document.getElementById("SignUp").addEventListener("click", function(event) {
//     event.preventDefault(); // Предотвращает отправку формы по умолчанию
//     SignUp();
// });



function check_fields_signUp(){
    let valide = true;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let age = document.getElementById("Age").value;


    
    if(name === ''){
        valide = false;
        document.getElementsByClassName('fill_field')[0].style.display = "block";
        if(email === ''){
            document.getElementsByClassName('fill_field')[1].style.display = "block";
        }
        else if(email !== ''){
            document.getElementsByClassName('fill_field')[1].style.display = "none";
        }
        if(pass === ''){
            document.getElementsByClassName('fill_field')[2].style.display = "block";
        }
        else if(pass !== ''){
            document.getElementsByClassName('fill_field')[2].style.display = "none";
        }
        if(age === ''){
            document.getElementsByClassName('fill_field')[3].style.display = "block";
        }
        else if(age !== ''){
            document.getElementsByClassName('fill_field')[3].style.display = "none";
        } 
        if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == false ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "block";
        }   
        else if ( ( document.getElementById('Male').checked == true ) && ( document.getElementById('Female').checked == false ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }
        else if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == true ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }     
        return valide;
    }
    if(email === ''){
        valide = false;
        document.getElementsByClassName('fill_field')[1].style.display = "block";
        if(name === ''){
            document.getElementsByClassName('fill_field')[0].style.display = "block";
        }
        else if(name !== ''){
            document.getElementsByClassName('fill_field')[0].style.display = "none";
        }
        if(pass === ''){
            document.getElementsByClassName('fill_field')[2].style.display = "block";
        }
        else if(pass !== ''){
            document.getElementsByClassName('fill_field')[2].style.display = "none";
        }
        if(age === ''){
            document.getElementsByClassName('fill_field')[3].style.display = "block";
        }
        else if(age !== ''){
            document.getElementsByClassName('fill_field')[3].style.display = "none";
        } 
        if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == false ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "block";
        }   
        else if ( ( document.getElementById('Male').checked == true ) && ( document.getElementById('Female').checked == false ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }
        else if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == true ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }            
        return valide;
    }
    if(pass === ''){
        valide = false;
        document.getElementsByClassName('fill_field')[2].style.display = "block";
        if(email === ''){
            document.getElementsByClassName('fill_field')[1].style.display = "block";
        }
        else if(email !== ''){
            document.getElementsByClassName('fill_field')[1].style.display = "none";
        }
        if(name === ''){
            document.getElementsByClassName('fill_field')[0].style.display = "block";
        }
        else if(name !== ''){
            document.getElementsByClassName('fill_field')[0].style.display = "none";
        }
        if(age === ''){
            document.getElementsByClassName('fill_field')[3].style.display = "block";
        }
        else if(age !== ''){
            document.getElementsByClassName('fill_field')[3].style.display = "none";
        }  
        if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == false ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "block";
        }   
        else if ( ( document.getElementById('Male').checked == true ) && ( document.getElementById('Female').checked == false ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }
        else if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == true ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }           
        return valide;
    }
    
    if(age === ''){
        valide = false;
        document.getElementsByClassName('fill_field')[3].style.display = "block";
        if(email === ''){
            document.getElementsByClassName('fill_field')[1].style.display = "block";
        }
        else if(email !== ''){
            document.getElementsByClassName('fill_field')[1].style.display = "none";
        }
        if(pass === ''){
            document.getElementsByClassName('fill_field')[2].style.display = "block";
        }
        else if(pass !== ''){
            document.getElementsByClassName('fill_field')[2].style.display = "none";
        }
        if(name === ''){
            document.getElementsByClassName('fill_field')[0].style.display = "block";
        }
        else if(name !== ''){
            document.getElementsByClassName('fill_field')[0].style.display = "none";
        } 
        if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == false ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "block";
        }   
        else if ( ( document.getElementById('Male').checked == true ) && ( document.getElementById('Female').checked == false ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }
        else if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == true ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }     
        return valide;
    }
    

    if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == false ) ){
        valide = false;
        document.getElementsByClassName('fill_field')[4].style.display = "block";
        if(name === ''){
            document.getElementsByClassName('fill_field')[0].style.display = "block";
        }
        else if(name !== ''){
            document.getElementsByClassName('fill_field')[0].style.display = "none";
        } 
        if(email === ''){
            document.getElementsByClassName('fill_field')[1].style.display = "block";
        }
        else if(email !== ''){
            document.getElementsByClassName('fill_field')[1].style.display = "none";
        }
        if(pass === ''){
            document.getElementsByClassName('fill_field')[2].style.display = "block";
        }
        else if(pass !== ''){
            document.getElementsByClassName('fill_field')[2].style.display = "none";
        }
        if(age === ''){
            document.getElementsByClassName('fill_field')[3].style.display = "block";
        }
        else if(age !== ''){
            document.getElementsByClassName('fill_field')[3].style.display = "none";
        } 
        if ( ( document.getElementById('Male').checked == true ) && ( document.getElementById('Female').checked == false ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }
        else if ( ( document.getElementById('Male').checked == false ) && ( document.getElementById('Female').checked == true ) )
        {
                document.getElementsByClassName('fill_field')[4].style.display = "none";
        }     
        return valide;
    }
    document.getElementsByClassName('fill_field')[0].style.display = "none";
    document.getElementsByClassName('fill_field')[1].style.display = "none";
    document.getElementsByClassName('fill_field')[2].style.display = "none";
    document.getElementsByClassName('fill_field')[3].style.display = "none";
    document.getElementsByClassName('fill_field')[4].style.display = "none";
    return valide;


}