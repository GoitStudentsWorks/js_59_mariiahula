import { data, event } from "jquery";
import { goitGlobalAPI } from "./axios_api";
import { markupGalleryCard } from "./render-gallery";
import Pagination from 'tui-pagination';
import '../../node_modules/tui-pagination/dist/tui-pagination.css';

const refs = {
    allCategoriesBtnEl: document.querySelector('.btn-all-categories'),
    categoryEl: document.querySelector('.categories-list'),
    btnCategoriesEl: document.querySelector('.btn-categories-item'),
    galleryListEl: document.querySelector('.gallery-list')

}

let goitGlobalApi;

if (window.innerWidth < 768) {
  goitGlobalApi = new goitGlobalAPI(6);
} else if (window.innerWidth > 768 && window.innerWidth < 1280) {
  goitGlobalApi = new goitGlobalAPI(8);
} else {
  goitGlobalApi = new goitGlobalAPI(9);
}


let recipes = [];
// const goitGlobalApi = new goitGlobalAPI();


const renderCategories = async event => {
    
        const response = await goitGlobalApi.getCategories();
        
        const markup = response.map(el => {
            return `
        <li>
        <button class="btn-categories-item" type="button" data-categories-id="${el._id}">${el.name}</button>
        </li>`
        }).join('');

        refs.categoryEl.innerHTML = markup;   
    
};
renderCategories();


export const renderAllRecipes = async event => {
    
    const response = await goitGlobalApi.getRecipes();

    refs.galleryListEl.innerHTML = markupGalleryCard(response.results);          
        // const options = {
    //   totalItems: 288,
    //   itemsPerPage: goitGlobalApi.perPages,
    //   visiblePages: 3,
    //   page: 1,
    // }

    // const pagination = new Pagination('pagination', options);

    // pagination.on('afterMove', event => { console.log(event) });
};
renderAllRecipes();


export const onAllCategoriesBtnElClick = async event => {

    let data = await dataArray();
    
    refs.galleryListEl.innerHTML = markupGalleryCard(data);
    

};

refs.allCategoriesBtnEl.addEventListener('click', onAllCategoriesBtnElClick);

const onCategoryElClick = async event => {

    // goitGlobalApi.page = 32;
    if (event.target.classList.contains('active')) {
        return;
    }
    let data = await dataArray();
    // goitGlobalApi.perPage = 9;
    const value = event.target.textContent;   

    
    const recipesCategory = data.filter(results => results.category === value);
    console.log(recipesCategory);
    refs.galleryListEl.innerHTML = markupGalleryCard(recipesCategory);
};
console.log(onCategoryElClick);
refs.categoryEl.addEventListener('click', onCategoryElClick)


const dataArray = async event => {    
    let data = [];
    if (recipes[0]) {data = [];
    } else {
        let response = await goitGlobalApi.getRecipes();
        data = response.results;        
    }
    return data;    
};


