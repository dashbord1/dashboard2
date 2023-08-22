const  sideMenu = document.querySelector("aside");
const  menuBtn   = document.querySelector("#menu-btn");  
const closeBtn  = document.querySelector("#close-btn");
const  themeToggle = document.querySelector(".theme-toggle");

//show slider
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display= 'block';
})
 
//close slider
closeBtn.addEventListener('click', () => {
    sideMenu.style.display ='none';
})

//change theme
themeToggle.addEventListener('click' , ()=> {
    document.body.classList.toggle('dark-theme-variaables');

    themeToggle.querySelector('ion-icon:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('ion-icon:nth-child(2)').classList.toggle('active');

})


