import Element from "./element.js";
import Header from "./header.js";
import EntryModal from "./entrymodal.js";

import Visit from "../Visit/_visit.js";
import VisitCardiologist from "../Visit/_visitcardiologist.js";
import VisitDentist from "../Visit/_visitdentist.js";
import VisitTherapist from "../Visit/_visittherapist.js";


const header = new Header();
const modal = new EntryModal();
const ApiCards = "https://ajax.test-danit.com/api/v2/cards";
const ApiLogin = "https://ajax.test-danit.com/api/v2/cards/login";
class Authorization extends Element {
  constructor() {
    super();
  }
  checkToken() {
    const headerEl = document.body.querySelector(".header");
    window.addEventListener("load", () => {
      if (localStorage.getItem("token") === null || localStorage.getItem("token") === "Incorrect username or password" || localStorage.getItem("token").length > 50) {
        headerEl.append(header.renderHeaderEntryButton());
      } else if (
        localStorage.getItem("token") !== "Incorrect username or password" &&
        localStorage.getItem("token") !== null &&
        localStorage.getItem("token").length < 50
      ) {
        headerEl.append(header.renderHeaderVisitButton());
        this.getCards();
      }
    });
  }
  openModal() {
    const headerBtn = document.body.querySelector(".header-btn");
    const modalEl = document.body.querySelector(".smodal");
    const exitBtn = modalEl.querySelector(".btn-danger");

    if (headerBtn) {
      headerBtn.addEventListener("click", () => {
        modal.open();
      });
    }
    if (exitBtn) {
      exitBtn.addEventListener("click", () => {
        modal.close();
      });
    }
  }
  logIn() {
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const submitBtn = document.querySelector(".entry-btn");
    submitBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      fetch(ApiLogin, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordInput.value,
        }),
      })
        .then((response) => response.text())
        .then((token) => {
          localStorage.setItem("token", token);
          return token;
        })
        .then((token) => {
          if (token !== "Incorrect username or password" && token !== null) {
            console.log(token);
            document.querySelector(".header-btn").remove();
            modal.close();
            const headerEl = document.body.querySelector(".header");
            headerEl.append(header.renderHeaderVisitButton());
            this.getCards();
          }
        });
    });
  }



  getCards(filters = null) {
    fetch(ApiCards, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        if (filters) {
          cards = this.filteredCards(cards, filters);
        }

        const table = document.querySelector(".table");
        let newVisit = new Visit();

        if (!table) {
          document.body.append(newVisit.createTable());
        }

        cards.forEach(createCard => {

          switch (createCard.selectDoctors) {
            case "Стоматолог":
              newVisit = new VisitDentist(createCard);
              break;
            case "Терапевт":
              newVisit = new VisitTherapist(createCard);
              break;
            case "Кардиолог":
              newVisit = new VisitCardiologist(createCard);
              break;

            default:
              console.log(createCard);
              throw new Error('Нет такого врача');
              break;
          }

          newVisit.createCards(); // появляется
          newVisit.createCard();
          newVisit.removeCard();
          newVisit.showInform();
          newVisit.showInformBlock();
          newVisit.updateCard();
        });

      });
  }

  filteredCards(cards, filters) {


    if (filters.statusVisitOptions == "-- Статус визита --" || filters.statusVisitOptions == "Все") {
      cards = cards;
    } else {
      cards = cards.filter(card => card.selectStatusVisit.toLowerCase() == filters.statusVisitOptions.toLowerCase());
    };

    if (filters.selectDoctorsOptions) {
      cards = cards.filter(card => card.name.toLowerCase().trim() == filters.selectDoctorsOptions.toLowerCase().trim() || card.selectDoctors.toLowerCase() == filters.selectDoctorsOptions.toLowerCase().trim());
    };

    if (filters.selectVisitOptions == "-- Срочность --" || filters.selectVisitOptions == "Все") {
      cards = cards;
    } else {

      cards = cards.filter(card => card.selectVisit.toLowerCase() == filters.selectVisitOptions.toLowerCase());

    };

    return cards;
  }

}

export default Authorization;
