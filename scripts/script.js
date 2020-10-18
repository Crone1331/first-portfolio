let body = document.querySelector('.body');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() 
{
 
    console.log('click');
    body.classList.toggle('white-theme');
};
