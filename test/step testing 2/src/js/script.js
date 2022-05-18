'use strict';

import Modals from "./ModalForm/_modals.js";
import api from "./API/_api.js";

const userNewModalt = new Modals(document.body);
userNewModalt.createFirstModal();
userNewModalt.selectDoctors();
// console.log(getAllCards);
api.getAllCards();

userNewModalt.createVisit();

