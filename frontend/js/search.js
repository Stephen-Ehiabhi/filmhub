const cancel = document.querySelector(".cancel");
const list = document.querySelector(".search-list");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("after-load");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (search.value == "") {
    console.log("Fill in the fields");
  } else {
    const title = search.value;
    searchMovie(title);
  }
});

const searchMovie = async (title) => {
  const searchedData = await fetch(`/search/${title}`);
  const searchedMovie = await searchedData.json();
  console.log(searchedMovie);

  searchedMovie.forEach((movie) => {
    const img = document.createElement(img);
    const li = document.createElement(li);
    const year = document.createElement(h6);
    const title = document.createElement(a);

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(year);
    list.appendChild(li);

    img.src = movie.image;
    title.textContext = movie.title;
    title.href = `/movie?id=${movie._id}`;
    year.textContext = movie.year;
  });
};

cancel.addEventListener("click", () => {
  location.assign("/");
});
