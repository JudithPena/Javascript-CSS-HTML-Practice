import Element from "./element.js";

class Filter extends Element {
  constructor() {
    super();
  }
  render() {
    this.container = this.createElement("form", ["filter-form"]);
    const titleSearchContainer = this.createElement("div", [
      "input-group",
      "mb-3",
    ]);
    const titleSearch = this.createElement("input", ["form-control"]);
    titleSearch.setAttribute("placeholder", "Поиск по заголовку");
    const urgencySelect = this.createElement("select", [
      "form-select",
      "form-select-lg",
      "mb-3",
    ]);
    const urgencyOpt1 = this.createElement("option");
    urgencyOpt1.innerText = "-- Срочность --";
    const urgencyOpt2 = this.createElement("option");
    urgencyOpt2.innerText = "Все";
    const urgencyOpt3 = this.createElement("option");
    urgencyOpt3.innerText = "Обычная";
    const urgencyOpt4 = this.createElement("option");
    urgencyOpt4.innerText = "Приоритетная";
    const urgencyOpt5 = this.createElement("option");
    urgencyOpt5.innerText = "Неотложная";

    const statusSelect = this.createElement("select", [
      "form-select",
      "form-select-sm",
    ]);
    const statusOpt1 = this.createElement("option");
    statusOpt1.innerText = "-- Статус визита --";
    const statusOpt2 = this.createElement("option");
    statusOpt2.innerText = "Все";
    const statusOpt3 = this.createElement("option");
    statusOpt3.innerText = "Прошёл";
    const statusOpt4 = this.createElement("option");
    statusOpt4.innerText = "Запланирован";
    const filterBtn = this.createElement("button", [
      "btn",
      "btn-secondary",
      "filter-btn",
    ]);
    filterBtn.setAttribute("type", "button");
    filterBtn.innerText = "Поиск";

    this.container.append(titleSearchContainer);
    titleSearchContainer.append(titleSearch);
    this.container.append(urgencySelect);
    urgencySelect.append(
      urgencyOpt1,
      urgencyOpt2,
      urgencyOpt3,
      urgencyOpt4,
      urgencyOpt5
    );
    this.container.append(statusSelect);
    statusSelect.append(statusOpt1, statusOpt2, statusOpt3, statusOpt4);
    this.container.append(filterBtn);
    return this.container;
  }
}

export default Filter;
