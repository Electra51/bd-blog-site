const loadNews = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/category/01");
  const data = await response.json();
  console.log(data.data);
    // displayCatagories(data.data.news_category);
}
const displayNews = newses => {
 console.log(newses)
  const newsContainer = document.getElementById('news-container');
    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `<div class="col-lg-6 col-md-12">
    <div class=" border rounded bg-light d-flex flex-md-row flex-sm-column ">
      <img src="${image_url}" alt="">
      <div class="ms-3 p-3">
          
           <h5 class="fw-bold">Digital marketing</h5>
      <p class="text-black-50 lh-sm">Join millions of learners from around the world already learning</p>
          <h6 class="text-primary">Price : 40$</h6>
          </div>
      </div>
    
  </div>`;
        newsContainer.appendChild(newsDiv);
        //     console.log(catagories.category_name);
    });
  
}

  loadNews();
