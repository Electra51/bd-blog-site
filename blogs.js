const loadCatagory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCatagory(data.data)
}
const displayCatagory = catagories => {
    const catagoryContainer = document.getElementById('catagory-container');
    catagories.forEach(Element => {
        const catagoryUl = document.createElement('ul');
        catagoryUl.classList.add('nav');
        catagoryUl.innerHTML = `
        <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>`
            catagoryContainer.appendChild(catagoryUl)
    });
}
loadCatagory();