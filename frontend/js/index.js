(function filmhubFunctions() {
  //    window.addEventListener('load',()=>{
  // 	const loader = document.querySelector('.loader');
  // 	loader.classList.add('after-load')
  // })

  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const Cancel = document.querySelector(".cancel-nav");
  const body = document.querySelector("body");

  //to toggle the nav for mobile
  burger.addEventListener("click", () => {
    body.classList.toggle("bodymove");
    nav.classList.add("nav-active");
  });

  Cancel.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });
})();
