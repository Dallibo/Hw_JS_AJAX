async function getMovieData(e){
    e.preventDefault();
    let main = document.getElementById("main");
    let form = document.forms[0];
    let movieName = form.elements["title"].value;
    let movieType = form.elements["movietype"].value;
    let resp = await fetch(`http://www.omdbapi.com/?apikey=ecabbb5a&s=${movieName}&type=${movieType}`);
    if(resp.ok === true){
        main.innerText = "";
        let movies = await resp.json();
        console.log(movies.Search);
        Array.from(movies.Search).forEach(movie=>{
            let col = document.createElement("div");
            col.classList.add("col");
            let card = document.createElement("div");
            card.classList.add("card");
            col.appendChild(card);
            let poster = document.createElement("img");
            poster.src = movie.Poster;
            poster.alt = movie.Title;
            poster.classList.add("card-img-top");
            card.appendChild(poster);
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            card.appendChild(cardBody);
            let h5 = document.createElement("h5");
            h5.classList.add("card-title");
            h5.innerText = movie.Title;
            cardBody.appendChild(h5);
            let p = document.createElement("p");
            p.innerText = movie.Year;
            p.classList.add("card-text");
            cardBody.appendChild(p);
            main.appendChild(col);
        });

    }
}