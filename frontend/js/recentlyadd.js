window.addEventListener('load',()=>{
	const loader = document.querySelector('.loader');
	loader.classList.add('after-load')
})


function filmhubFunctions(){
   
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navlinks');
	const nav2 = document.querySelector('nav');
	const navLinks = document.querySelectorAll(".navlinks li");
	const cancel = document.querySelector(".cancel");
  const Cancel = document.querySelector(".Cancel");
	const body = document.querySelector("body");
	const search = document.querySelector('.search');
	const searchBtn = document.querySelector('.searchBtn');
	const logo = document.querySelector('.logo');
	const movie = document.querySelector('.movies');
	const movieNav = document.querySelector('.movie-nav');
	

//to toggle the nav for mobile
burger.addEventListener('click',()=>{
   
	 nav.classList.toggle('nav-active')
	 body.classList.toggle('bodymove');
    if(searchBtn.onclick()){
      nav.classList.remove('nav-active')
   }
})

movie.addEventListener('click', ()=>{
  movieNav.style.display = "block";
  Cancel.style.display = "block"
})	

Cancel.addEventListener('click', ()=>{
   movieNav.style.display = "none";
   Cancel.style.display = "none"
})

//to display the search input
searchBtn.addEventListener('click', ()=>{
   
	search.style.display = "block";
	logo.style.display = "none";
	burger.style.display = "none";
	search.classList.add('search-Btn');
	searchBtn.style.display = "none";
	cancel.style.marginLeft = "328px";
	cancel.style.top = "51px";
  body.classList.add('bodymove');
  nav2.style.height = "70rem";
  nav2.style.backgroundColor = "rgba(0, 0, 0, 0.50)";
  cancel.style.display = "block";
})

cancel.addEventListener("click",()=>{
   search.style.display = "none"
   logo.style.display = "block"
   burger.style.display = "block"
   search.classList.remove('search-Btn');
	searchBtn.style.display = "block"
   searchBtn.style.marginLeft = "13px";
   searchBtn.style.fontWeight = "lighter"
   searchBtn.style.width = "24px"
   searchBtn.style.top = "22px"
   body.classList.remove('bodymove');
   nav2.style.height = "80px"
   nav2.style.backgroundColor = "rgba(0, 0, 0, 0.20)"
   cancel.style.display = "none"
   
   
})

}

filmhubFunctions()