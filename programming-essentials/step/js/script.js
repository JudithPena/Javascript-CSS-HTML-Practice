// ----------ФИЛЬТР---------------
const tabsBtn = document.querySelectorAll(".services-list-item");
const tabsItems = document.querySelectorAll(".img-caption-item");

tabsBtn.forEach((item) => {
    item.addEventListener("click", () =>{
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        tabsBtn.forEach((item) => {
            item.classList.remove("active")
        })
        tabsItems.forEach((item) => {
            item.classList.remove("active")
        })
        currentBtn.classList.add("active")
        currentTab.classList.add("active")
    })
})


// ----------ЛОАДМОР---------------

$(function(){
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".invisible").removeClass("invisible")
        $("#loadMore").addClass("visible-btn")
    })
})

const amazingBtns = document.querySelectorAll(".amazing-services-list-item");
amazingBtns.forEach((item) => {
    item.addEventListener("click", () =>{
        let currentBtn = item;
        amazingBtns.forEach((item) => {
            item.classList.remove("reactive")
        })
        currentBtn.classList.add("reactive")
    })
})
// ----------ФИЛЬТР---------------
const filterBox = document.querySelectorAll(".amazing-work-item");
document.querySelector(".amazing-services-list").addEventListener("click", (event)=>{
    if(event.target.tagName !== "LI") return false;
    let filterClass = event.target.dataset["f"];
    filterBox.forEach( elem => {
        elem.classList.remove("hide");
       
        if (!elem.classList.contains(filterClass) && filterClass !== "all" && document.getElementById("loadMore").classList.contains("visible-btn")){
            elem.classList.add("hide")
            elem.classList.remove("visible")
        } else if (!elem.classList.contains(filterClass) && filterClass !== "all" && !document.getElementById("loadMore").classList.contains("visible-btn")){
            elem.classList.add("hide")
            elem.classList.remove("visible")
    }
})});


// ----------КАРУСЕЛЬ---------------
$('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.single-slider'
  });
  $('.single-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.carousel',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });