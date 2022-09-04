const loadCatagories = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    displayCatagories(data.data.news_category);
}
const displayCatagories = category => {
  // console.log(category[0].category_name)
  const catagoryContainer = document.getElementById('catagory');

  catagoryContainer.innerHTML = `
    <div>
    <button onclick="loadCategory1(${category[0].category_id})" class="btn btn-outline-primary ms-5 my-2">${category[0].category_name}</button>
    <button onclick="loadCategory1(${category[1].category_id})" class="btn btn-outline-primary ms-3 my-2">${category[1].category_name}</button>
    <button onclick="loadCategory1(${category[2].category_id})" class="btn btn-outline-primary ms-3 my-2">${category[2].category_name}</button>
    <button onclick="loadCategory1(${category[3].category_id})" class="btn btn-outline-primary ms-3 my-2">${category[3].category_name}</button>
    <button onclick="loadCategory1(${category[4].category_id})" class="btn btn-outline-primary ms-3 my-2">${category[4].category_name}</button>
    <button onclick="loadCategory1(${category[5].category_id})" class="btn btn-outline-primary ms-3 my-2">${category[5].category_name}</button>
    <button onclick="loadCategory1(${category[6].category_id})" class="btn btn-outline-primary ms-3 my-2">${category[6].category_name}</button>
    <button onclick="loadCategory1(${category[7].category_id})" class="btn btn-outline-primary ms-3 my-2">${category[7].category_name}</button>
    </div>
  
  `;

}

  loadCatagories();

  const loadCategory1 = async(catagory) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/0${catagory}`);
    const data = await response.json();
    displayCategory1 (data.data);
}
const displayCategory1 = datas => {
  
  const divContainer = document.getElementById('news-card');
  divContainer.innerHTML = ``;

    for(const _id of datas){
        console.log(_id);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card">
        <img src="${_id.thumbnail_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${_id.title}</h5>
          <p class="card-text">${_id.details}</p>
          
          <div class="d-flex">
          <img src="${_id.author.img}"alt="" width="30" height="29" class="d-inline-block align-text-top">
          <p class="ps-2">${_id.author.name}</p>
          <i class="fa fa-solid fa-eye mt-1 ps-5">${_id.total_view}</i>
          <button class="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#newsdetailmodal">See more</button>
          </div>
          </div>
</div>
    </div>
        </div>
      </div>`;
        divContainer.appendChild(div);
    }
}
 
