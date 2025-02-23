const postListContainer = document.querySelector(".posts-container");
const progressaBar = document.querySelector(".progress-bar");
function fetchListofPosts() {
  fetch("https://dummyjson.com/posts", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => displayPostsList(result.posts));
}
function displayPostsList(getPosts) {
  getPosts.forEach((postItem) => {
    const postItemWrapper = document.createElement("div");
    postItemWrapper.classList.add("post-item-wrapper");

    const postTitle = document.createElement("label");
    postTitle.textContent = postItem.title;

    const postBody = document.createElement("p");
    postBody.textContent = postItem.body;

    const postTags = document.createElement("div");
    postTags.textContent = postItem.tags.map((tagItem) => tagItem).join(",");

    postTags.classList.add("post-tags");

    postItemWrapper.appendChild(postTitle);
    postItemWrapper.appendChild(postBody);
    postItemWrapper.appendChild(postTags);

    postListContainer.appendChild(postItemWrapper);
  });
}

fetchListofPosts();

window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  const getScrollFromTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const howMuchPercentAlreadyScrolled = (getScrollFromTop / height) * 100;
  progressaBar.style.width = `${howMuchPercentAlreadyScrolled}%`;
}
