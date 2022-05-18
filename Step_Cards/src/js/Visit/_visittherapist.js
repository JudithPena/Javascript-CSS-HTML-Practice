import Visit from "./_visit.js";
import api from "../API/_api.js";

class VisitTherapist extends Visit {
    constructor(response) {
        super();
        this.response = response;
        this.api = api;
    };

    showInform() {
        this.cardWithId = document.querySelector(`#card_${this.response.id}`);
        this.ageVisit = this.cardWithId.querySelector(".visit-age");
        this.ageVisit.style.display = "block";
    }
}

export default VisitTherapist;