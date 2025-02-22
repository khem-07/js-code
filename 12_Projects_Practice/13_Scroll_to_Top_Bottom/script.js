const userList = document.querySelector(".user-list");
const loader = document.querySelector(".loader");
const scrollToTopButton = document.querySelector(".scroll-to-top-button");
const scrollToBottomButton = document.querySelector(".scroll-to-bottom-button");

function ShowLoader() {
  loader.classList.add("show-loader");
  userList.classList.add("hide-users-list");
}

function remvoeLoader() {
  loader.classList.remove("remove-loader");
  userList.classList.remove("hide-users-list");
}

async function fetchUsersList() {
  ShowLoader();

  const response = await fetch("https://dummyjson.com/users?limit=100", {
    method: "GET",
  });

  const result = await response.json();

  if (result && result.users) displayUsersList(result.users);

  remvoeLoader();
}

function displayUsersList(getUser) {
  userList.innerHTML = getUser
    .map(
      (userItem) => `
    <li>
    <p>${userItem.firstName} ${userItem.lastName}</p>
    </li>`
    )
    .join("");
}

fetchUsersList();

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

scrollToBottomButton.addEventListener('click',()=>{
    
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
})