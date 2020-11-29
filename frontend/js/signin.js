const errMessage = document.querySelector('.errors')
const form = document.getElementById('form')
const email = document.querySelector('.email')
const password = document.querySelector('.password')

form.addEventListener('submit', async (e) => {

     const messages = [];
     if(email.value === "" || email.value === null ){
         messages.push('Email is required')
     }

     if(messages.length > 0){
         e.preventDefault()
         errMessage.innerText = messages.join(', ')
     }
    // const res = await fetch('/user/login',{method = POST});
    //  const data = await res.json();
    // console.log(data)
   
  
})