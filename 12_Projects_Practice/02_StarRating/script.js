const stars = document.querySelectorAll('.fa-star-o');
const selectedRatingvalueText = document.querySelector('.selected-rating-value')

let currentTotalSelectedStars = -1;

stars.forEach((starItem, index)=>{
    starItem.dataset.rating = index + 1;
    starItem.addEventListener('mouseover',handleMouseOver);
    starItem.addEventListener('click', handleOnClick);
    starItem.addEventListener('mouseleave', handleMouseLeave);
})

function handleMouseOver(event) {
    const currentRatingvalue = event.target.dataset.rating;
    if (!currentRatingvalue) return
    else handleUpdateRatingState(currentRatingvalue);

}
function handleUpdateRatingState(getCurrentRatingValue){
    for (let i = 0; i < 5; i++) {
       if( i < getCurrentRatingValue){
        stars[i].classList.replace('fa-star-o','fa-star');
       }
       else{
        stars[i].classList.replace('fa-star','fa-star-o');
       }
    }
}

function handleOnClick(event){
    const currentRatingvalue = event.target.dataset.rating;
     currentTotalSelectedStars = currentRatingvalue;
     handleUpdateRatingState(currentTotalSelectedStars)
     selectedRatingvalueText.textContent = currentTotalSelectedStars
}

function handleMouseLeave(event){
    handleUpdateRatingState(currentTotalSelectedStars)
}