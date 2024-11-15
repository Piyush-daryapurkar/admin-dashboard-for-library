
function signup(){

    let email=document.getElementById('email').value
    let password=document.getElementById('password').value

    let user=JSON.parse(localStorage.getItem("users")) || {}

    if(user.email===email){
        alert("you are already exists Please Login....")
       
    }
    else{
        let ob={
                    email:email,
                    password:password
                }

        localStorage.setItem("users",JSON.stringify(ob))
     }   

}



function login(){

    let email=document.getElementById('email').value
    let password=document.getElementById('password').value

    let user=JSON.parse(localStorage.getItem("users"))
    

    if(!user || user.email!==email){
        alert("you are not registered... Please SignUp first")
        return false;
    }
    else if(user.password!==password){
        alert("Incorrect Password for "+email)
        return false;

    }

   


}

let user=JSON.parse(localStorage.getItem("users"))
document.getElementById('username').innerHTML=user.email


