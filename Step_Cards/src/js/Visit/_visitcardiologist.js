import Visit from "./_visit.js";
import api from "../API/_api.js";

class VisitCardiologist extends Visit {
    constructor(response) {
        super();
        this.response = response;
        this.api = api;
    }

    showInform() {
        this.cardWithId = document.querySelector(`#card_${this.response.id}`);
        this.pressureVisit = this.cardWithId.querySelector(".visit-pressure");
        this.pressureVisit.style.display = "block";
        this.bodyMassIndex = this.cardWithId.querySelector(".visit-body-mass-index");
        this.bodyMassIndex.style.display = "block";
        this.heartDisease = this.cardWithId.querySelector(".visit-heart-disease");
        this.heartDisease.style.display = "block";
        this.ageVisit = this.cardWithId.querySelector(".visit-age");
        this.ageVisit.style.display = "block";
    }






}


export default VisitCardiologist;