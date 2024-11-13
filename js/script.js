const state = {
    current: window.location.pathname
}

async function displayPopularMovies() {
    const {results} = await fetchAPIData('movie/popular')
    console.log(results);
    
    results.forEach(movie =>{
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = ` 
          <a href="movie-details.html?id=${movie.id}">
           ${movie.poster_path
            ? ` <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />` : ` <img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
           }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
              <p> Rating: ${(movie.vote_average)}</p>

            </p>
          </div>`;

        document.querySelector('#popular-movies').appendChild(div)

    })
}

async function fetchAPIData(endpoint) {
    const API_KEY = '26dbb75b0378c33f9ad2a755116887a5'
    const API_URL = 'https://api.themoviedb.org/3/'

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)

    const data = await response.json()

    return data
    
}
//hihglight active link
function HighlightActiveLink(){
    const links = document.querySelectorAll('.nav-link')
    links.forEach(link => {
        if (link.getAttribute('href') === state.current){
            link.classList.add('active')
        }
        
    });
}
function init(){
    switch (state.current) {
        case '/':
        case '/index.html':
            displayPopularMovies()
            console.log("Home");
            break;
        case '/movie-details.html':
            console.log("Movie details");
            break
        case '/shows.html':
            console.log("Shows details");
            break
        case '/tv-details.html':
            console.log("ShowsTV details");
            break
        case '/search.html':
            console.log("search info");
            break
        }
    HighlightActiveLink()
}
init()



{/* <div class="card">
<a href="movie-details.html?id=1">
  <img
    src="images/no-image.jpg"
    class="card-img-top"
    alt="Movie Title"
  />
</a>
<div class="card-body">
  <h5 class="card-title">Movie Title</h5>
  <p class="card-text">
    <small class="text-muted">Release: XX/XX/XXXX</small>
  </p>
</div>
</div> */}