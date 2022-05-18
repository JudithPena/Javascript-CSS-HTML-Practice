const token = "797da406-3e9c-4cc1-920e-791af8ae29f4";


const addCard = (card, div) => {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(card)
    })
        .then(response => {
            return response.status;
        })
        .then(createCard => {
            if (createCard !== 404) {
                div.remove();
            }
        })

};


const getAllCards = () => {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(response => console.log(response))

};

const getCard = (id) => {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(response => console.log(response))

};

const deleteCard = (id) => {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(response => console.log(response))

};

const putCard = (id, card) => {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(` ${card}`)

    })
        .then(response => response.json())
        .then(response => console.log(response))

};

export default { addCard, getAllCards, getCard, deleteCard, putCard };

// const API = {
//     cards: 'https://ajax.test-danit.com/api/v2/cards',
//     login: 'https://ajax.test-danit.com/api/v2/cards/login',
// };

// function header(token) {
//     return {
//         'Content-Type': 'application/json',
//         'Authorization': token
//             ? `Bearer ${token}`
//             : undefined
//     };
// }
// let token = localStorage.getItem('token');
// const authorization = (user) => {
//     return fetch(API.login, {
//         method: 'POST',
//         headers: header(token),
//         body: JSON.stringify(user)
//     })
// };

// const getCards = async () => {
//     const response = await fetch(API.cards, {
//         headers: header(token),
//     });

//     const result = response.json();
//     return result;
// };

// const getAllCards = async () => {
//     const res = await getCards();
//     return res;
// }

// const getCard = (cardId) => {
//     let certainCard = `https://ajax.test-danit.com/api/v2/cards/${cardId}`;
//     return fetch(certainCard, {
//         headers: header(token),
//     }).then(response => response.json());
// };

// const addCard = (cardObj) => {
//     return fetch(API.cards, {
//         method: "POST",
//         body: JSON.stringify(cardObj),
//         headers: header(token),
//     }).then(response => response.json());
// };

// const deleteCard = (cardObj) => {
//     let certainCard = `https://ajax.test-danit.com/api/v2/cards/${cardObj.id}`;
//     return fetch(certainCard, {
//         method: "DELETE",
//         headers: header(token),
//     })
// };

// const editCard = (cardObj) => {
//     let certainCard = `https://ajax.test-danit.com/api/v2/cards/${cardObj.id}`;
//     return fetch(certainCard, {
//         method: "PUT",
//         body: JSON.stringify(cardObj),
//         headers: header(token),
//     }).then(response => response.json());
// };

// export default {
//     authorization,
//     getAllCards,
//     getCards,
//     getCard,
//     addCard,
//     deleteCard,
//     editCard
// }





// export default { addCard, getAllCards };