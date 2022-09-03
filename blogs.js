const loadCatagories = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    displayCatagories(data.data.news_category);
}
const displayCatagories = category => {
  console.log(category[0].category_name)
  const catagoryContainer = document.getElementById('catagory');

  catagoryContainer.innerHTML = `
    <div>
    <button class="btn btn-outline-primary ms-5">${category[0].category_name}</button>
    <button class="btn btn-outline-primary ms-3">${category[1].category_name}</button>
    <button class="btn btn-outline-primary ms-3">${category[2].category_name}</button>
    <button class="btn btn-outline-primary ms-3">${category[3].category_name}</button>
    <button class="btn btn-outline-primary ms-3">${category[4].category_name}</button>
    <button class="btn btn-outline-primary ms-3">${category[5].category_name}</button>
    <button class="btn btn-outline-primary ms-3">${category[6].category_name}</button>
    <button class="btn btn-outline-primary ms-3">${category[7].category_name}</button>
    </div>
  
  `;

}



  loadCatagories();

