
// ========= VARIABLES =============

const date = document.querySelector(".date");

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");



// Update date
 //------------------------------------------------------------

const currentYear = new Date();
date.innerHTML = currentYear.getFullYear();


// Toggle menu depends on the number of links
 //------------------------------------------------------------


navToggle.addEventListener("click", () => {
    
    const containerHeight= linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
        //console.log(navbar.getBoundingClientRect().height);
    } else{
        linksContainer.style.height = 0;
    }
    
})


//Fixed nav when is longer that the scrollY and show button
 //------------------------------------------------------------


const navbar = document.getElementById("nav");
const btn = document.querySelector(".top-link");


window.addEventListener("scroll", ()=>{

    const scrollY = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
   

//Fixed nav when is longer that the scrollY
 //------------------------------------------------------------

    if(scrollY > navHeight){
        navbar.classList.add("fixed-nav");
    } else{
        navbar.classList.remove("fixed-nav");
    }

 //Show button when scrollY is longer than 500
 //------------------------------------------------------------
 
    if(scrollY > 500){
        btn.classList.add("show-link")
    } else{
        btn.classList.remove("show-link");
    }

})


 // Smooth scroll
 //------------------------------------------------------------

 const linksA = [...document.querySelectorAll(".scroll-link")];
 const titles = [...document.querySelectorAll(".title")];


linksA.forEach(link =>{
    link.addEventListener("click", e=>{
        e.preventDefault();

        //navigate to specific spot
        
        const idLink = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(idLink);

        //calculate he heights
        
        const navHeight = navbar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");


        // console.log(navHeight);
        // console.log(linksContainerHeight);

        let position = element.offsetTop -navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }

        if(navHeight > 82){
            position = position + linksContainerHeight;

        }

        window.scrollTo({
            left:0,
            top: position
        })
        
      
        linksContainer.style.height = 0;

    })
})

