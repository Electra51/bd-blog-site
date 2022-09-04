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
    <button onclick="loadCategory1()" class="btn btn-outline-primary ms-5 my-2">${category[0].category_name}</button>
    <button onclick="loadCategory2()" class="btn btn-outline-primary ms-3 my-2">${category[1].category_name}</button>
    <button onclick="loadCategory3()" class="btn btn-outline-primary ms-3 my-2">${category[2].category_name}</button>
    <button class="btn btn-outline-primary ms-3 my-2">${category[3].category_name}</button>
    <button class="btn btn-outline-primary ms-3 my-2">${category[4].category_name}</button>
    <button class="btn btn-outline-primary ms-3 my-2">${category[5].category_name}</button>
    <button class="btn btn-outline-primary ms-3 my-2">${category[6].category_name}</button>
    <button class="btn btn-outline-primary ms-3 my-2">${category[7].category_name}</button>
    </div>
  
  `;

}

  loadCatagories();

  const loadCategory1 = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/category/01");
    const data = await response.json();
    displayCategory1 (data.data);
}
const displayCategory1 = datas => {
  
    const divContainer = document.getElementById('news-card');
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
          <div class="modal fade" id="newsdetailmodal" tabindex="-1" aria-labelledby="newsdetailmodalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="newsdetailmodalLabel">${_id.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="${_id.thumbnail_url}" class="card-img-top" alt="...">
      <p class="card-text">${_id.details}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
  
          </div>
        </div>
      </div>`;
        divContainer.appendChild(div);
    }
}
 
const loadCategory2 = async() => {
  const response = await fetch("https://openapi.programming-hero.com/api/news/category/02");
  const data = await response.json();
  displayCategory2 (data.data);
}
const displayCategory2 = datas => {

  const divContainer = document.getElementById('news-card');
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
        <div class="modal fade" id="newsdetailmodal" tabindex="-1" aria-labelledby="newsdetailmodalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="newsdetailmodalLabel">${_id.title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <img src="${_id.thumbnail_url}" class="card-img-top" alt="...">
    <p class="card-text">${_id.details}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
    </div>
  </div>
</div>
</div>

        </div>
      </div>
    </div>`;
      divContainer.appendChild(div);
  }
}

const loadCategory3 = async() => {
  const response = await fetch("https://openapi.programming-hero.com/api/news/category/03");
  const data = await response.json();
  displayCategory3 (data.data);
}
const displayCategory3 = datas => {

  const divContainer = document.getElementById('news-card');
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
        <div class="modal fade" id="newsdetailmodal" tabindex="-1" aria-labelledby="newsdetailmodalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="newsdetailmodalLabel">${_id.title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <img src="${_id.thumbnail_url}" class="card-img-top" alt="...">
    <p class="card-text">${_id.details}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
    </div>
  </div>
</div>
</div>

        </div>
      </div>
    </div>`;
      divContainer.appendChild(div);
  }
}