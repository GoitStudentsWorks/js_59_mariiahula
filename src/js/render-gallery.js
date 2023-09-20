
import { event, nodeName } from 'jquery';
import iconSvg from '../images/icon.svg';
import localStorage from '../js/localStorage';
export function markupGalleryCard(arr) {

  if (!Array.isArray(arr)) {

    return '';
  }
  const markup = arr.map(cardEl => {
    return `
       <li class="gallery-item" data-category="${cardEl.category}" >
          <label class="label" >
           <input type="checkbox" name="favorite" class="checkbox-favorite" data-id-name="${cardEl._id}">
          <svg class='gallery-icon-checkbox  '>
            <use href="${iconSvg}#icon-heart" class="icon-svg-heart"> </use>
          </svg>
        </label>
          <img
              class="gallery-image"
              style="
                background:
                  linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%),
                  url(${cardEl.thumb});
                background-position: -36.5px 0px;
                background-size: 129.2% 112.544%;
                background-repeat: no-repeat;
              "
           />
        <div class="gallery-wrap-descr-reciept-card">
          <h2 class="gallery-card-title">${cardEl.title}</h2>
          <h3 class="gallery-card-subtitle">${cardEl.description}</h3>
          <form class="gallery-form-rating">
            <div class="gallery-card-stars-rating">
              <label class="gallery-average-rating">${cardEl.rating}
              <input type="radio" name="rating" value="5" class="gallery-star-ckeckbox" />
              <span class='galerry-checkbox-icon' ></span>
              <input type="radio" name="rating" value="4" class="gallery-star-ckeckbox" />
              <input type="radio" name="rating" value="3" class="gallery-star-ckeckbox" />
              <input type="radio" name="rating" value="2" class="gallery-star-ckeckbox" />
              <input type="radio" name="rating" value="1" class="gallery-star-ckeckbox" />
              </label>
            </div>
            

            <button type="button" class="gallery-btn" data-id="${cardEl._id}">See recipe</button>
          </form>
        </div>
      </li>
    `;

  }).join('');
  return markup;

}
