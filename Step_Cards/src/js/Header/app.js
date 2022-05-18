import EntryModal from "./entrymodal.js";
import Header from "./header.js";
import SelectModal from "./filter.js";
import Authorization from "./Auth.js";
import FilterEngine from "../ModalForm/_filterEngine.js";

const ApiCards = "https://ajax.test-danit.com/api/v2/cards";
const ApiLogin = "https://ajax.test-danit.com/api/v2/cards/login";
const token = "797da406-3e9c-4cc1-920e-791af8ae29f4";

const filter = new SelectModal();
document.body.insertAdjacentElement("afterbegin", filter.render());
const header = new Header();
document.body.insertAdjacentElement("afterbegin", header.render());
const modal = new EntryModal();
document.body.insertAdjacentElement("afterbegin", modal.render());
const authorization = new Authorization();
authorization.checkToken()
setTimeout(() => { authorization.openModal() }, 200)
authorization.logIn()

let newFilterEngine;
newFilterEngine = new FilterEngine();
newFilterEngine.readingUserRequest();

