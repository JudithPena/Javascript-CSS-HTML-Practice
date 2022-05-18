import Element from "./element.js";

import Modals from "../ModalForm/_modals.js";
import api from "../API/_api.js";

class Header extends Element {
  constructor() {
    super();
  }
  render() {
    this.container = this.createElement("div", ["header"]);
    const logo = this.createElement("svg", ["logo"]);
    logo.setAttribute("style", "width: 133px; height: 40px");

    this.container.append(logo);
    return this.container;
  }
  renderHeaderEntryButton() {
    const HeaderBtn = this.createElement("button", [
      "btn",
      "btn-primary",
      "header-btn",
    ]);
    HeaderBtn.innerText = "Вход";
    return HeaderBtn;
  }
  renderHeaderVisitButton() {
    const HeaderVisitBtn = this.createElement("button", [
      "btn",
      "btn-primary",
      "create-visit-btn",
    ]);
    HeaderVisitBtn.id = "visit-btn-id";
    HeaderVisitBtn.innerText = "Создать Визит";
    const userNewModalt = new Modals(document.body, api);
    HeaderVisitBtn.addEventListener("click", () => {
      userNewModalt.createFirstModal();
      userNewModalt.selectDoctors();
      userNewModalt.createVisit();
    });
    return HeaderVisitBtn;
  }
}
export default Header;
