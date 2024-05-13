const signupform= document.querySelector("#signupform")
signupform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nombre=document.querySelector("#nombre").value
    const email=document.querySelector("#email").value
    const password=document.querySelector("#password").value
    const contDiv=document.getElementById("usuario");


    const users= JSON.parse(localStorage.getItem("users"))  ||[]
    const isuserRegistered=users.find(user => user.email === email)
    if(isuserRegistered){
        return alert("usuario registrado")
        
    }
    users.push({nombre:nombre, email:email, password: password})
    localStorage.setItem("users", JSON.stringify(users))
    
    console.log(contDiv);
    contDiv.textContent = nombre.value;
    alert("Registro Exitoso!") 


   window.location.href= "login.html"
})

