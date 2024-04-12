const postsListContainer = document.querySelector(".posts-list-container");
//fetch using XHR
function fetchUsingXHR() {
    const xhr = new XMLHttpRequest();
    //pass the data
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.responseType = "json";//return type
    xhr.send();

    xhr.onload = () => {
        if (xhr.status == 200) {
            displayResults(xhr.response);
        } else {
            console.log("Some Error occured");
        }
    };
}

function fetchUsingFetchMethod(){
    
    const fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts',
    method : 'GET',
})
}



function displayResults(posts) {

postsListContainer.innerHTML = posts.map(postItem => `
<div class="post-item">
<h3>${postItem.title}</h2>
<p>${postItem.body}</p>
</div>
`
).join(" ")
}

fetchUsingFetchMethod();