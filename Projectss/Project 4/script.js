


const Signup = document.getElementById("signupForm")
console.log(Signup)

    Signup.addEventListener('submit', SignupData)

function SignupData(event){

    let email = document.getElementById("signupEmail").value

    let password = document.getElementById("Password").value

    let confirmpassword = document.getElementById("signupPassword").value

    let signobject = { 
        Email:email,
        Password:password,
        ConfirmPassword:confirmpassword
    }


    console.log(signobject)

    localStorage.setItem('SignFormData',JSON.stringify(signobject))


    if (password == confirmpassword){
        alert("Signup successful")            
    }

    else{
        alert("Password Is Not Same")
    }
}


const Login = document.getElementById("loginForm")
console.log(Login)

    Login.addEventListener('submit' ,LoginData)

    function LoginData() {

        let stringData = localStorage.getItem("SignFormData")

        let Parse = JSON.parse(stringData)

        let logEmail = document.getElementById("loginEmail").value

        let logPass = document.getElementById("loginPassword").value

        if(Parse.Email == logEmail && Parse.ConfirmPassword == logPass){
            alert("Login successful");
        }
        else{
            alert('Invalid email or password');
        }

        
    }