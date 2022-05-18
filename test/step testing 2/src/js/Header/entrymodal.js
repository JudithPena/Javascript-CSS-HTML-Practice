import Element from "./element.js";
class EntryModal extends Element {
  constructor() {
    super();
  }
  render() {
    this.modal = this.createElement("div", ["smodal"]);
    const overlay = this.createElement("div", ["modal-overlay"]);
    const window = this.createElement("div", ["modal-window"]);
    const header = this.createElement("div", ["modal-header"]);
    const title = this.createElement("span", ["modal-title"], "Вход");

    const crest = this.createElement("span", ["btn-close"]);
    const content = this.createElement("div", ["modal-content"]);
    const form = this.createElement("form", ["modal-form"]);
    const email = this.createElement("label", [], "E-mail:");
    const inputEmail = this.createElement("input", [
      "modal-Email",
      "form-control",
    ]);
    inputEmail.id = "email";
    email.setAttribute("for", "email");
    const password = this.createElement("label", [], "Password:");
    const inputPassword = this.createElement("input", [
      "modal-password",
      "form-control",
    ]);
    inputPassword.id = "password";
    password.setAttribute("for", "password");
    const footer = this.createElement("div", ["modal-footer"]);
    const entryBtn = this.createElement(
      "button",
      ["btn", "btn-primary", "entry-btn"],
      "Войти"
    );
    const exitBtn = this.createElement(
      "button",
      ["btn", "btn-danger"],
      "Отмена"
    );
    inputEmail.setAttribute("type", "email", "placeholder", "name@example.com");
    inputEmail.setAttribute("placeholder", "name@example.com");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("placeholder", "Password");
    this.modal.append(overlay);
    overlay.append(window);
    window.append(header, content, footer);
    header.append(title, crest);
    content.append(form);
    form.append(email, inputEmail, password, inputPassword);
    footer.append(entryBtn, exitBtn);

    return this.modal;
  }
  open() {
    const modal = document.body.querySelector(".smodal");
    modal.classList.add("open");
  }
  close() {
    const ANIMATION_SPEED = 200;
    const modal = document.body.querySelector(".smodal");

    modal.classList.remove("open");
    modal.classList.add("hide");
    setTimeout(() => {
      modal.classList.remove("hide");
    }, ANIMATION_SPEED);
  }
}
export default EntryModal;
