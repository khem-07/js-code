const postsListContainer = document.querySelector('.posts-list-container');

// function fetchUsingXHR() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', "https://dummyjson.com/quotes");
//     xhr.responseType = 'json';
//     xhr.send();

//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             displayResults(xhr.response.quotes); // Pass the correct data array
//         } else {
//             console.log(`Some error occurred.`);
//         }
//     };
// }

// function displayResults(posts) {
//     postsListContainer.innerHTML = posts
//         .map((postItem) =>
//             `<div class="post-item">
//                 <h3>${postItem.quote}</h3> <!-- Changed title to quote -->
//                 <p>${postItem.author}</p> <!-- Corrected closing tag and used author -->
//             </div>`
//         ).join("");
// }

// // Call the function to fetch data
// fetchUsingXHR();










// const postsListContainer = document.querySelector('.posts-list-container')

// function xhrMethod(){
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET','https://dummyjson.com/recipes')
//       xhr.responseType = 'json'
//       xhr.send();


//       xhr.onload = ()=> {
//          if (xhr.status === 200) {
//             displayResults(xhr.response.recipes)
//          }else{
//             console.log("Error occured");
            
//          }
//       }
// }

//  function displayResults(posts){
//     postsListContainer.innerHTML = posts
//     .map((postItem) =>
//         `<div class = "postItem">
//         <h3>${postItem.id}   ${postItem.name}</h3>
//         <p>${postItem.ingredients}</p>
//         </div>`
//     ).join("");
//  }

// xhrMethod();




//  async function fetchUsingAyncAwaitMethod(){
// const response = await fetch('https://dummyjson.com/todos',
//     {
//         method: 'GET',
//     });
// const result = await response.json();
// displayResults(result.todos)
//  }
// function displayResults(posts){
//     postsListContainer.innerHTML = posts
//     .map((postItem) => 
//     `<div class = "postItem">
//       <h1>${postItem.todo}</h1>
//       <p>${postItem.completed}</p>
//     </div>`).join("");
// }

// fetchUsingAyncAwaitMethod()




function fetchUsingFetchMethod(){

const fetchRequest = fetch('https://dummyjson.com/products',
    {
        method: 'GET',
    }
)

fetchRequest
.then((response) => response.json())
.then((result) => displayResults(result.products))
.catch((e) => console.log(e))

}


function displayResults(posts){
  postsListContainer.innerHTML = posts
  .map((postItem)=>
    `<div class ="postItem">
    <h3>${postItem.title}</h3>
    <p>${postItem.description}</p>
    </div>`).join("");
}
fetchUsingFetchMethod();
