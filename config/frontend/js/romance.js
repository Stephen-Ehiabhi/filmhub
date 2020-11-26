window.addEventListener('load',()=>{
	const loader = document.querySelector('.loader');
   loader.classList.add('after-load')
    romanceMovieData()
})


//main container
const moviecontainer = document.querySelector('.movie-desc');
const main = document.querySelector('.recently-added-img');



//fetch the movie data stored in the databse
const romanceMovieData =  async () => {
 const resp = await fetch('/creator/upload-movie/romance')
 const data = await resp.json()

 data.forEach(movie => {

     //create elements
     const image = document.createElement('img');
     const imagediv = document.createElement('div');
     const h6 = document.createElement('h6');
     const a = document.createElement('a');
   
     //append
     imagediv.appendChild(image);
     imagediv.appendChild(h6);

     main.classList.add('recently-added-img')
     image.classList.add('movie-img')
     
     h6.appendChild(a);
     main.appendChild(imagediv);
   
     //include from the api
     image.src = movie.image;
     a.href = `/movie?id=${movie._id}`
     a.textContent = movie.title + ' (' + movie.year + ')';
   })  
}

  
