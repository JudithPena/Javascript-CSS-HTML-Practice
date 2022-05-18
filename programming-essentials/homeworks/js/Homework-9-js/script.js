const tabsBtn = document.querySelectorAll(".tabs-title");
const tabsItems = document.querySelectorAll(".tabs-item")


tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)
        tabsBtn.forEach( (item) => {
                item.classList.remove("active")
        })
        tabsItems.forEach( (item) => {
                item.classList.remove("active")
        })
        currentBtn.classList.add("active")
        currentTab.classList.add("active")
    })
})