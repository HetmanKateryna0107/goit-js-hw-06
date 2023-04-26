const form = document.querySelector(".login-form");


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const {email,password}=event.target.elements
 

    if (email.value ==="" || password.value ==="") {
       alert('Всі поля повинні бути заповнені')
      } else {
      const userInfo= { email:email, password: password }
         console.log(userInfo);
         form.reset()
      }
     
  
    })







  
  



















