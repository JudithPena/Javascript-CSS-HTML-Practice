import Authorization from '../Header/Auth.js'

class FilterEngine {

    readingUserRequest() {
        this.filterBtn = document.querySelector(".filter-btn");
        this.filterBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const statusVisitfilter = document.querySelector(".form-select-sm").options;
            const statusVisitOptions = statusVisitfilter[statusVisitfilter.selectedIndex].value;

            const selectVisitfilter = document.querySelector(".form-select-lg").options;
            const selectVisitOptions = selectVisitfilter[selectVisitfilter.selectedIndex].value;

            const selectDoctorsOptions = document.querySelector(".form-control-filter").value;

            const auth = new Authorization();
            auth.getCards({
                'statusVisitOptions': statusVisitOptions,
                'selectVisitOptions': selectVisitOptions,
                'selectDoctorsOptions': selectDoctorsOptions
            })
            const table = document.querySelector(".table");
            table.remove();
        })


    }


}




export default FilterEngine;