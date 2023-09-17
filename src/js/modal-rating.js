const ratings = document.querySelectorAll('.modal-rating');
       


if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;

    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
       
    }

    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();

        if (rating.classList.contains('modal-rating-set')) {
            setRating(rating);
        }

    }


    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.modal-rating-active');
        ratingValue = rating.querySelector('.modal-rating-value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.modal-rating-item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function (e) {
                initRatingVars(rating);
                setRatingActiveWidth(ratingItem.value);
            });
             ratingItem.addEventListener('mouseleave', function (e) {
              
                setRatingActiveWidth();
             });
             ratingItem.addEventListener('click', function (e) {
                 initRatingVars(rating);
                 
                 if (rating.dataset.ajax) {
                     setRatingValue(ratingItem.value, rating);
                 } else {
                     ratingValue.innerHTML = index + 1 + `${'.0'}`;
                     setRatingActiveWidth();
                 }
                
            });
        }
    }

//     async function setRatingValue(value, rating) {
//         if (!rating.classList.contains('.rating-sending')) {
//             rating.classList.add('.rating-sending');

//             let response = await fetch ('rating.json')
//     }
// }


}



// CLOSE-OPEN MODAL

const closeIconRatingModal = document.querySelector('.modal-rating-close');
const openIconRatingModal = document.querySelector('.modal-give-rating');
const windowRatingModal = document.querySelector('.modal-rating-backdrop');
const recipes_container = document.querySelector(".recipes-modal-container");
const recipes_wrap = document.querySelector(".modal-recipes-wrap");

closeIconRatingModal.addEventListener('click', closeRatingModal);
openIconRatingModal.addEventListener('click', openRatingModal);

function closeRatingModal(e) {
    windowRatingModal.classList.remove('modal-rating-backdrop-active'); 
}

function openRatingModal(e) {
    windowRatingModal.classList.add('modal-rating-backdrop-active'); 
    recipes_container.classList.remove('active');
    recipes_wrap.classList.remove('active');
}

















// GALAXU BTN




// BCG MODAL

function generateRandomPercent(min = 0, max = 100) {
  const randomInteger = Math.floor(Math.random() * (max + 1));
  return `${randomInteger}%`;
}
function generateRadomDelay(interval = 3) {
  const randomInteger = Math.random() * (interval + 1);
  return `${randomInteger}s`;
}

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = generateRandomPercent();
  star.style.left = generateRandomPercent();
  star.style.animationDelay = generateRadomDelay();
  return star;
}

function renderStars(amount = 15) {
  const container = document.getElementById("modal-bcg-wrap");
  const placeholdersArray = Array(amount).fill("star_placeholder");
  const starsArray = placeholdersArray.map((starPlacholder, index) =>
    createStar()
  );
  container.append(...starsArray);
}

renderStars();
