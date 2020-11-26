// const errMessage = document.querySelector('.errors')
// const form = document.getElementById('form')
// const name = document.querySelector('.name')
// const username = document.querySelector('.username')
// const email = document.querySelector('.email')
// const password = document.querySelector('.password')

// form.addEventListener('submit', async (e) => {
//  e.preventDefault()
//   //window.history.back

//   const emails = form.email.value;
//   const passwords = form.password.value;
//   const usernames = form.username.value;
//    try {
//        const res = await fetch('/user/register',{
//            method: 'POST',
//            body: JSON.stringify({emails, passwords, usernames}),
//            headers: {'Content-Type': 'application/json'}
//        })
//        const data = await res.json();
//        console.log(data)
//    } catch (error) {
       
//    }

// })

const eye = document.querySelector('.eye')
const seePassword = document.querySelector('.password')

eye.addEventListener('click',()=>{
   seePassword.type = "text"
})