
const state = {
    current: window.location.pathname
}

//hihglight active link
function HighlightActiveLink(){
    if (state.current === '/') {
        document.querySelectorAll('.nav-link').classList.add('active')
        }
    
}
function init(){
    switch (state.current) {
        case '/':
        case '/index.html':
            
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

console.log(state.current);
init()

