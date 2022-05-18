import Element from "./element.js";

class Header extends Element {
  constructor() {
    super();
  }
  render() {
    this.container = this.createElement("div", ["header"]);
    const logo = this.createElement("svg", ["logo"]);
    logo.setAttribute("style", "width: 133px; height: 40px");

    const button = this.createElement(
      "button",
      ["btn", "btn-primary", "header-btn"],
      "Вход"
    );
    this.container.append(logo);
    this.container.append(button);
    return this.container;
  }
}
export default Header;
