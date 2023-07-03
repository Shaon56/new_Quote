document.addEventListener('DOMContentLoaded', () => {
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const twitter = document.getElementById("twitter");
    const newQuoteButton = document.getElementById("new-quote");
    const api_url = "https://api.quotable.io/random";

    async function getquote(url){
        const response = await fetch(url);
        var data = await response.json();
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    }

    getquote(api_url);

    newQuoteButton.addEventListener("click", () =>{
        getquote(api_url);
    });

    function tweet(){
        window.open("https://twitter.com/intent/tweet?text=" +  quote.innerHTML + "----- by  " + author.innerHTML , "Tweet window", "width=600, height=300");
    }

    twitter.addEventListener("click", () =>{
        tweet();
    })
});

