 function openPopup() {
    document.getElementById("popup").style.display = "block";
    const navbar=document.querySelector("nav")
    navbar.style.display="none"
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
    const navbar=document.querySelector("nav")
    navbar.style.display=""
  }



const btn=document.querySelector(".submit")
const nameRegex  = /^[A-Za-z]{2,30}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegex = /^[6-9]\d{9}$/; 
const passwordd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


btn.addEventListener('click',(e)=>{
    e.preventDefault()

   const first=document.querySelector(".first").value.trim()
   const last=document.querySelector(".last").value.trim()
   const email=document.querySelector(".email").value.trim()
   const phone=document.querySelector(".phone").value.trim()

   
   
   if(!nameRegex.test(first)){
    alert("Enter valid first name")
    return false
   }

   if(!nameRegex.test(last)){
    alert("Enter valid last name")
    return false
   }

   if(!emailRegex.test(email)){
    alert("Enter valid email")
    return false
   }

   if(!phoneRegex.test(phone)){
    alert("Enter valid phone number")
    return false
   }
   
   alert("submitted successfully")
   return true;
})



const sign=document.querySelector(".sign-up")
sign.addEventListener('click',(e)=>{
    e.preventDefault()
    const email=document.querySelector('.sign-email').value.trim()
    const password=document.querySelector('.pass').value.trim()

    if(!emailRegex.test(email)){
    alert("Enter valid email")
    return false
   }

   if(!passwordd.test(password)){
    alert("Enter valid password")
    return false
   }

   alert("logged in")
   true;
})