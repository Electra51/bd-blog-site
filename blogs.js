
try {
  alert("Welcome Everybody");
}
catch {
  alert("inside catch block");
}



const loadCatagories = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
  displayCatagories(data.data.news_category)
  
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

const loadCategory1 = async (catagory) => {

  toggleSpinner(true);
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/0${catagory}`);
    const data = await response.json();
    displayCategory1 (data.data);
}
const displayCategory1 = datas => {
  
  const display = document.getElementById('search')
display.innerHTML = `

  <input type="text" class="form-control mt-1" placeholder="${datas.length} Information Show" aria-label="Username" aria-describedby="basic-addon1">
  
`
const noPhone = document.getElementById('no-found-message');
if(datas.length === 0){
    noPhone.classList.remove('d-none');
}
else{
    noPhone.classList.add('d-none');
}

  const divContainer = document.getElementById('news-card');
  divContainer.innerHTML = ``;

  datas.sort((a, b) => {
    return b.total_view - a.total_view;
  });
  console.log(datas)
  for (const _id of datas) {

    

  
         console.log(_id);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card ">
        <img src="${_id.thumbnail_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${_id.title}</h5>
          <p class="card-text" >${_id.details }</p>
          
          <div class="d-flex">
          <img src="${_id.author.img}"alt="" width="30" height="29" class="d-inline-block align-text-top">
          <p class="ps-2">${_id.author.name}</p>
          <i class="fa fa-solid fa-eye mt-1 ps-5">${_id.total_view}</i>
          <button class="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#newsdetailmodal">See more</button>
          
</div>
<div class="modal fade" id="newsdetailmodal" tabindex="-1" aria-labelledby="newsdetailmodalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="newsdetailmodalLabel">${_id.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="${_id.thumbnail_url}" class="" alt="...">
      <p class="">${_id.details}</p>
      <p><strong>Author Name:</strong> ${_id.author.name}</p>
      <p><strong>Published_date:</strong> ${_id.author.published_date}</p>
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
  toggleSpinner(false);
}
 

const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if(isLoading){
      loaderSection.classList.remove('d-none')
  }
  else{
      loaderSection.classList.add('d-none');
  }
}