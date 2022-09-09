
// Here I'm calling the variables in html that I need to reference in JS
const letsPlay = document.querySelector('#lets-play');
const modal = document.querySelector('.modal');
const saveTheUniverse = document.querySelector('#Save-the-Universe');





// Here are the functions to effect the abovementioned variables
letsPlay.addEventListener('click', function(evt){
       modal.classList.toggle('disappear')
       saveTheUniverse.classList.toggle('disappear')
    })


