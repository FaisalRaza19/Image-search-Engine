const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const resultImage = document.getElementById('data');
// const key = "ghfy31wnR6wyZe2VMxbr02SMvvCRSs32oEjs-KT0IHI";
const key = "qhHL0kxYe5jDcWyh0uRzl-I6bpEB1y4qvbeXiFzGxoY";
let keyword = '';
let page = 1;


async function fetchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=16`;
    const data = await fetch(url);
    const response = await data.json();
    if (page === 1) {
        resultImage.innerHTML = '';
    }

    response.results.forEach((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;

        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);

        resultImage.appendChild(imageLink);
    });
   loadMoreBtn.style.display = 'block'
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    page = 1;
    fetchImages();
});

// Pagination: Load more images on button click
const loadMoreBtn = document.getElementById('show-more');
loadMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    page++;
    fetchImages();
});
