import VisitCardiologist from "../Visit/_visitcardiologist.js";
import VisitDentist from "../Visit/_visitdentist.js";
import VisitTherapist from "../Visit/_visittherapist.js";

const token = localStorage.getItem("token");

const addCard = (card, div) => {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(card),
  })
    .then((response) => {
      return response;
    })
    .then(response => {
      if (response.status !== 404) {
        return response.json();
      } else {
        throw new Error(`Ошибка сервера! Статус код: ${response.status}`);
      }
    })
    .then(createCard => {
      div.remove();
      let newVisit;

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
          throw new Error('Нет такого врача');
          break;
      }
      newVisit.createCards(); // появляется
      newVisit.createCard();
      newVisit.removeCard();
      newVisit.showInform();
      newVisit.showInformBlock();
      newVisit.updateCard();
    })

};

const getAllCards = () => {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });

};

const getCard = async (id) => {
  return await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      if (response.status !== 404) {
        return response.json();
      } else {
        throw new Error(`Ошибка сервера! Статус код: ${response.status}`);
      }
    })

};

const deleteCard = async (id) => {
  const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return response.status;

};


const putCard = (id, card, modal, cardDiv) => {
  fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(card),
  })
    .then((response) => {
      return response;
    })
    .then(response => {
      if (response.status !== 404) {
        return response.json();
      } else {
        throw new Error(`Ошибка сервера! Статус код: ${response.status}`);
      }
    })
    .then(updateCard => {
      console.log(updateCard);
      modal.remove();
      cardDiv.remove();
      let visit;
      switch (updateCard.selectDoctors) {
        case "Стоматолог":
          visit = new VisitDentist(updateCard);
          break;
        case "Терапевт":
          visit = new VisitTherapist(updateCard);
          break;
        case "Кардиолог":
          visit = new VisitCardiologist(updateCard);
          break;

        default:
          throw new Error('Нет такого врача');
          break;
      }

      visit.createCards();
      visit.createCard();
      visit.removeCard();
      visit.showInform();
      visit.showInformBlock();
      visit.updateCard();
    })
};

export default { addCard, getAllCards, getCard, deleteCard, putCard };
