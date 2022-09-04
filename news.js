const loadNews = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a");
  const data = await response.json();
  displayNews (data.data);
    // displayCatagories(data.data.news_category);
}
const displayNews = newses => {
 console.log(newses);
  const newsContainer = document.getElementById('news_container');
    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `<div class="card">
          <img src="${image_url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>`;
        newsContainer.appendChild(newsDiv);
        // console.log(catagories.category_name);
    });
  
}

  loadNews();
