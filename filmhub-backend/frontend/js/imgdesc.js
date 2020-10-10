window.addEventListener('load',()=>{
	const loader = document.querySelector('.loader');
    loader.classList.add('after-load')
    getSingleMovie();
})


   
const getSingleMovie = async () => {

    const id = window.location.search.match(/id=(.*)/)[1]
    
    const movieImage = document.querySelector('.movieimg');
    const title = document.querySelector('.title');
    const length = document.querySelector('.length');
    const genre = document.querySelector('.genre1');
    const description = document.querySelector('.description');
    const director = document.querySelector('.directors');
    const writer = document.querySelector('.writers');
    const downloadbtn = document.querySelector('.downloadbtn')
    

      const singleMovie = await fetch(`/api/${id}`);
      const singleMovieData = await singleMovie.json();
    //   console.log(singleMovieData);
      
      movieImage.src = singleMovieData.image;
      title.textContent = singleMovieData.title ;
      length.textContent = singleMovieData.length + ' (' + singleMovieData.year + ')';
      genre.textContent = singleMovieData.genre;
      description.textContent = singleMovieData.summary;
      director.textContent = singleMovieData.writers;
      writer.textContent = singleMovieData.actors;
      downloadbtn.href = singleMovieData.movie;
           
}
