
(function filmhubFunctions(){
	
   window.addEventListener('load',()=>{
	const loader = document.querySelector('.loader');
	loader.classList.add('after-load')
})

	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navlinks');
  const Cancel = document.querySelector(".Cancel");
	const body = document.querySelector("body");

	const logo = document.querySelector('.logo');
	const movie = document.querySelector('.movies');
	const movieNav = document.querySelector('.movie-nav');
	

//to toggle the nav for mobile
burger.addEventListener('click',()=>{
	 body.classList.toggle('bodymove');
    nav.classList.toggle('nav-active')
})


movie.addEventListener('click', ()=>{
  movieNav.style.display = "block";
  Cancel.style.display = "block"
})	

Cancel.addEventListener('click', ()=>{
   movieNav.style.display = "none";
   Cancel.style.display = "none"
})



})();

