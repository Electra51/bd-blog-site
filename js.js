const allNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json()
    setAllCatagories(data.data.news_category)
  }
  const setAllCatagories = newses => {
    const category = document.getElementById('news-category');
    newses.forEach(news => {
      const newsDiv = document.createElement('div')
      console.log(newsDiv)
      newsDiv.classList.add('col')
      newsDiv.innerHTML = `<ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">${news.category_name}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">${news.category_name}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">${news.category_name}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
      `;
      category.appendChild(newsDiv)
      console.log(newsDiv)
      
    });
}
  

const loadCatagories = async() => {
    //     const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    //   const data = await response.json();
    //   // console.log(data.data.news_category);
    //     // displayCatagories(data.data.news_category);
    // }
    // const displayCatagories = catagories => {
    //   console.log(catagories)
    //   const catagoryContainer = document.getElementById('category-container');
    //   for (const catagory in catagories) {
    //     const catagoryDiv = document.createElement('div');
    //     catagoryDiv.classList.add('col');
    //     catagoryDiv.innerHTML = `<ul class="nav nav-pills">
                  
    //     <li class="nav-item">
    //       <a class="nav-link" aria-current="page" href="#">${category_name}</a>
    //     </li>
    
    //   </ul>`;
    //     catagoryContainer.appendChild(catagoryDiv);
    // //     console.log(catagories.category_name);
    // };
      
    //  }
    
    //   loadCatagories();