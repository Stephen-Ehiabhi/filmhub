window.addEventListener('load',()=>{
	// const loader = document.querySelector('.loader');
  //   loader.classList.add('after-load')
    getSingleMovie();
})


   
const getSingleMovie = async () => {

    const id = window.location.search.match(/id=(.*)/)[1]
    
    let movieImage = document.querySelector('.movieimg');
    let title = document.querySelector('.title');
    let length = document.querySelector('.length');
    let genre = document.querySelector('.genre1');
    let frame = document.querySelector('.frame');
    let description = document.querySelector('.description');
    let director = document.querySelector('.directors');
    let writer = document.querySelector('.writers');
    let downloadbtn = document.querySelector('.downloadbtn')
    

      const singleMovie = await fetch(`/api/${id}`);
      const singleMovieData = await singleMovie.json();
      
      console.log(singleMovieData.success.movie);

      movieImage.src = singleMovieData.success.image;
      title.textContent = singleMovieData.success.title ;
      length.textContent = singleMovieData.success.length + ' (' + singleMovieData.success.year + ')';
      genre.textContent = singleMovieData.success.genre;
      description.textContent = singleMovieData.success.summary;
      director.textContent = singleMovieData.success.writers;
      // writer.textContent = singleMovieData.success.actors;
      downloadbtn.href = singleMovieData.success.movie;
      frame.src = singleMovieData.success.thriller;
         
}
