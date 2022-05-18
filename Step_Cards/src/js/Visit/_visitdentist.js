// { "selectDoctors": "Стоматолог", "purposeVisit": "Посещение доктора", "descriptionVisit": "визит-5", "selectVisit": "обычная", "selectStatusVisit": "Запланирован", "name": "Larisa", "pressure": "", "bodyMassIndex": "", "heartDisease": "", "age": "", "dateLastVisit": "12.112.12", "additionalСomments": "", "id": 28189 }

import Visit from "./_visit.js";
import api from "../API/_api.js";


class VisitDentist extends Visit {
    constructor(response) {
        super();
        this.response = response;
        this.api = api;
    };

    showInform() {
        this.cardWithId = document.querySelector(`#card_${this.response.id}`);
        this.dateLastVisit = this.cardWithId.querySelector(".visit-date-last-visit");
        this.dateLastVisit.style.display = "block";
    }
}

export default VisitDentist;
