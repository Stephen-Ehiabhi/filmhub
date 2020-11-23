
function filmhubFunctions(){
	
//    window.addEventListener('load',()=>{
// 	const loader = document.querySelector('.loader');
// 	loader.classList.add('after-load')
// })

	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navlinks');
  const Cancel = document.querySelector(".cancel-nav");
	const body = document.querySelector("body");

	const logo = document.querySelector('.logo');
	const movie = document.querySelector('.movies');
	const movieNav = document.querySelector('.nav');
	const dark = document.querySelector('.dark-mode');
	

//to toggle the nav for mobile
burger.addEventListener('click',()=>{
	 body.classList.toggle('bodymove');
    nav.classList.add('nav-active')
})

	

Cancel.addEventListener('click', ()=>{
	nav.classList.remove('nav-active')
})

dark.addEventListener('click', ()=>{
	body.classList.toggle('dark-mode')
	dark.style.backgroundColor = "grey"
	nav.classList.toggle('dark-mode-ul')
})

}

filmhubFunctions();

