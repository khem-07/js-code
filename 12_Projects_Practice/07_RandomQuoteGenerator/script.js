const quoteWrapper = document.querySelector('.quote-wrapper');
const refreshBtn = document.querySelector('.refresh-button');
const loaderText = document.querySelector('.loader');

function showLoader(){
    loaderText.classList.add('show')
    quoteWrapper.classList.add('hide')
}

function removeLoader(){
    loaderText.classList.remove('show')
    quoteWrapper.classList.remove('hide')
}


function fetchRandomQuote() {
    showLoader()
    fetch('https://dummyjson.com/quotes')
    .then((response )=> response.json())
    // .then((result)=> displayQuote(result.quotes))
    .then((result) => {
        if (result) {
                removeLoader()
                const randomIndex = Math.floor(Math.random() * 30); // Generates random index from 0 to 29
                displayQuote(result.quotes[randomIndex]);
        }
    })
    .catch( (e) => console.log(e));
}
function displayQuote(getQuote){
console.log(getQuote);
quoteWrapper.innerHTML = `
<div class="quote-item">
<p>${getQuote.quote}</p>
<p>${getQuote.author}</p>
</div>
`
}


fetchRandomQuote();

refreshBtn.addEventListener('click',()=>{
    fetchRandomQuote();
})

