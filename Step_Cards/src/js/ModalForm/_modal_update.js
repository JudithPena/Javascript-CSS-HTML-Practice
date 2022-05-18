'use strict';

import Modals from "./_modals.js";

class ModalUpdate extends Modals {
    constructor(body, response, api) {
        super();
        this.response = response;
        this.api = api;
        this.cardWithId = document.querySelector(`#card_${this.response.id}`);
        this.body = body;

    }

    prepareForm() {
        this.blockTop = this.cardWithId.querySelector(`.block__top`);
        this.blockTop.style.display = 'none';

        this.jsPopup = this.cardWithId.querySelector(`.js-popup`);
        this.jsPopup.style.margin = '0px';

        this.popupContainer = this.cardWithId.querySelector(`.popup-container`);
        this.popupContainer.style.maxWidth = "100%";
    }

    removeModal() {
        this.wrapperModal = this.cardWithId.querySelector(".js-popup");
        this.wrapperModal.remove();
    }


    createFirstModal() {
        this.wrapperModal.className = "js-popup";
        this.wrapperModal.id = "enroll-popup";

        this.wrapperModal.innerHTML = `
        
        <div id="enroll-block" class="popup-container">


            <svg class="popup-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1" id="Layer_1" x="0px" y="0px" width="50px" height="20px" viewbox="0 0 500 190"
                enable-background="new 0 0 500 190" xml:space="preserve">
                <g>
                    <path fill="#1DB7ED"
                        d="M246.266,7.466H199.07c-1.464,0-2.713,0.517-3.748,1.565c-1.047,1.014-1.558,2.276-1.558,3.747v66.94   c0,2.505,2.136,5.319,5.426,5.319c3.331,0,5.426-2.814,5.426-5.319V50.701h36.693c2.068,0,5.05-1.639,5.05-5.057   c0-3.338-2.901-5.037-5.05-5.037h-36.693V17.661h41.649c2.297,0,5.09-1.847,5.09-5.097C251.356,9.186,248.509,7.466,246.266,7.466z   " />
                    <path fill="#1DB7ED"
                        d="M317.839,80.88c5.695-3.492,10.141-8.28,13.364-14.344c3.224-6.064,4.809-12.826,4.809-20.274   c0-7.468-1.585-14.23-4.809-20.301c-3.224-6.051-7.669-10.826-13.364-14.344c-5.694-3.512-12.114-5.245-19.286-5.245   c-7.173,0-13.605,1.733-19.261,5.245c-5.722,3.519-10.167,8.293-13.377,14.344c-3.21,6.071-4.809,12.833-4.809,20.301   c0,7.448,1.599,14.21,4.809,20.274c3.21,6.064,7.655,10.853,13.377,14.344c5.655,3.526,12.088,5.272,19.261,5.272   C305.725,86.152,312.145,84.406,317.839,80.88z M275.841,61.264c-2.217-4.466-3.331-9.462-3.331-15.002   c0-5.627,1.114-10.657,3.331-15.13c2.216-4.479,5.292-7.971,9.254-10.483c3.948-2.505,8.448-3.754,13.458-3.754   c5.022,0,9.522,1.262,13.484,3.814c3.922,2.545,7.024,6.064,9.24,10.523c2.217,4.466,3.317,9.482,3.317,15.029   c0,5.541-1.101,10.537-3.317,15.002c-2.216,4.493-5.318,7.985-9.24,10.537c-3.962,2.539-8.462,3.814-13.484,3.814   c-5.01,0-9.51-1.276-13.458-3.814C281.133,69.249,278.057,65.757,275.841,61.264z" />
                    <path fill="#1DB7ED"
                        d="M494.551,26.693c-2.512-5.863-6.245-10.543-11.188-14.008c-4.942-3.472-10.879-5.218-17.836-5.218h-28.675   c-1.491,0-2.714,0.517-3.774,1.565c-1.034,1.014-1.545,2.276-1.545,3.747v66.94c0,1.471,0.511,2.747,1.545,3.768   c1.061,1.047,2.283,1.551,3.774,1.551h28.675c6.957,0,12.894-1.706,17.836-5.144c4.943-3.432,8.677-8.092,11.188-13.982   c2.498-5.856,3.773-12.417,3.773-19.649C498.324,39.103,497.049,32.562,494.551,26.693z M481.375,66.818   c-3.774,5.352-9.442,8.032-16.95,8.032h-21.946V17.661h21.946c7.454,0,13.082,2.686,16.896,8.092   c3.787,5.393,5.681,12.229,5.681,20.509C487.002,54.596,485.136,61.452,481.375,66.818z" />
                    <path fill="#6BD333"
                        d="M228.967,109.77c-4.942-3.479-10.906-5.225-17.836-5.225h-28.675c-1.478,0-2.74,0.537-3.774,1.572   c-1.034,1.021-1.544,2.27-1.544,3.76v66.954c0,1.45,0.51,2.713,1.544,3.747c1.035,1.048,2.297,1.545,3.774,1.545h28.675   c6.93,0,12.894-1.692,17.836-5.158c4.956-3.411,8.663-8.072,11.202-13.941c2.498-5.883,3.774-12.437,3.774-19.662   c0-7.186-1.276-13.699-3.774-19.556C237.63,117.923,233.923,113.248,228.967,109.77z M226.979,163.91   c-3.747,5.346-9.415,8.031-16.95,8.031h-21.933v-57.175h21.933c7.468,0,13.095,2.7,16.896,8.085   c3.774,5.387,5.695,12.236,5.695,20.51C232.62,151.701,230.753,158.551,226.979,163.91z" />
                    <path fill="#6BD333"
                        d="M155.002,114.928c2.66,0,5.077-2.176,5.077-4.982c0-3.332-2.646-5.212-5.077-5.212h-46.041   c-1.451,0-2.687,0.538-3.748,1.558c-1.021,1.049-1.558,2.311-1.558,3.788v66.913c0,1.504,0.538,2.74,1.558,3.773   c1.061,1.035,2.297,1.559,3.748,1.559h46.041c3.479,0,5.077-3.076,5.077-4.982c0-2.593-2.001-5.198-5.077-5.198h-40.387v-24.512   h35.471c2.552,0,5.023-2.015,5.023-4.982c0-2.78-2.189-5.091-5.023-5.091h-35.471v-22.631H155.002z" />
                    <path fill="#1DB7ED"
                        d="M364.069,79.718V54.784l11.766-0.027l28.353,28.339c1.478,1.484,4.97,2.552,7.603-0.074   c2.363-2.371,1.84-5.822,0.067-7.615l-20.697-20.69c22.416-0.679,23.907-20.577,23.907-24.653   c0-14.176-11.215-22.598-21.946-22.598h-34.692c-1.478,0-2.727,0.517-3.761,1.565c-1.034,1.014-1.545,2.276-1.545,3.747v66.94   c0,2.505,2.122,5.319,5.467,5.319S364.069,82.223,364.069,79.718z M364.069,17.661h27.077c9.496,0,12.599,7.447,12.599,12.403   c0,10.61-6.648,15.432-15.124,15.432h-24.552V17.661z" />
                    <path fill="#6BD333"
                        d="M488.05,172.023h-33.832v-61.944c0-1.478-0.524-2.739-1.612-3.788c-1.074-1.02-2.351-1.558-3.814-1.558   c-1.639,0-2.954,0.538-3.976,1.558c-1.034,1.049-1.558,2.311-1.558,3.788v66.913c0,1.504,0.47,2.74,1.49,3.773   c0.994,1.035,2.271,1.559,3.828,1.559h39.474c1.571,0,2.834-0.497,3.842-1.438c1.007-0.967,1.49-2.176,1.49-3.652   c0-1.559-0.483-2.82-1.49-3.788C490.884,172.506,489.621,172.023,488.05,172.023z" />
                    <path fill="#6BD333"
                        d="M267.487,104.733c-1.651,0-2.955,0.538-3.989,1.558c-1.034,1.049-1.571,2.311-1.571,3.788v66.913   c0,1.478,0.537,2.74,1.625,3.787c1.062,1.021,2.324,1.545,3.814,1.545c1.639,0,2.929-0.523,3.963-1.545   c1.047-1.047,1.571-2.31,1.571-3.787v-66.913c0-1.478-0.524-2.739-1.612-3.788C270.24,105.271,268.95,104.733,267.487,104.733z" />
                    <path fill="#1DB7ED"
                        d="M144.66,46.262l29.172-29.179c1.477-1.484,2.538-4.976-0.094-7.595c-2.337-2.371-5.789-1.854-7.588-0.081   l-29.159,29.166L107.833,9.407c-1.504-1.484-4.996-2.552-7.615,0.074c-2.364,2.377-1.854,5.829-0.094,7.602l29.186,29.179   l-29.186,29.146c-1.464,1.498-2.525,4.989,0.094,7.615c2.377,2.364,5.829,1.854,7.615,0.074l29.159-29.166l29.159,29.166   c1.491,1.484,4.996,2.552,7.588-0.074c2.377-2.371,1.867-5.822,0.094-7.615L144.66,46.262z" />
                    <path fill="#6BD333"
                        d="M79.789,105.123c-0.121-0.041-0.228-0.08-0.349-0.121c-0.202-0.054-0.403-0.121-0.604-0.161   c-0.242-0.026-0.483-0.054-0.712-0.067c-0.107-0.014-0.201-0.04-0.309-0.04c-0.041,0-0.054,0.014-0.094,0.014   c-0.255,0.013-0.51,0.04-0.752,0.094c-0.282,0.04-0.524,0.107-0.766,0.188c-0.202,0.053-0.39,0.107-0.578,0.201   c-0.107,0.041-0.188,0.094-0.282,0.148c-0.242,0.134-0.47,0.268-0.685,0.416c-0.054,0.04-0.107,0.08-0.161,0.121   c-0.135,0.12-0.269,0.215-0.417,0.349l-27.52,27.521l-27.507-27.521c-0.121-0.107-0.255-0.215-0.403-0.322   c-0.054-0.054-0.107-0.107-0.188-0.161c-0.107-0.067-0.215-0.135-0.336-0.201c-0.792-0.498-1.719-0.847-2.793-0.847   c-3.371,0-5.493,2.848-5.493,5.399v66.806c0,2.552,2.176,5.386,5.493,5.386c3.371,0,5.493-2.834,5.493-5.386v-29.307v-24.229   l18.575,18.575c3.532,3.733,5.225,4.526,7.159,4.526c1.867,0,3.25-0.51,7.172-4.526l18.602-18.603v24.257v29.307   c0,2.552,2.095,5.386,5.48,5.386c3.317,0,5.493-2.834,5.493-5.386v-66.806C83.308,108.131,81.978,105.969,79.789,105.123z" />
                    <path fill="#6BD333"
                        d="M315.395,117.762c4.244-2.432,9.146-3.653,14.693-3.653c5.319,0,10.275,1.343,14.855,3.922   c0.953,0.511,1.732,0.792,2.78,0.792c1.92,0,5.291-1.598,5.291-5.305c0-1.988-1.007-3.653-2.78-4.607   c-6.271-3.559-12.987-5.332-20.146-5.332c-7.467,0-14.21,1.72-20.227,5.158c-6.018,3.438-10.731,8.166-14.184,14.183   c-3.425,6.017-5.144,12.76-5.144,20.228c0,8.111,1.786,15.203,5.372,21.261s8.395,10.678,14.398,13.848   c6.03,3.183,12.611,4.755,19.783,4.755c3.466,0,6.998-0.484,10.57-1.438c3.586-0.953,6.81-2.243,9.697-3.868   c0.806-0.443,2.659-1.854,2.659-4.58c0-3.841-3.546-5.292-5.171-5.292c-1.504,0-2.041,0.35-2.928,0.793   c-4.419,2.646-9.375,3.988-14.828,3.988c-5.332,0-10.113-1.168-14.397-3.492c-4.298-2.336-7.656-5.721-10.073-10.14   c-2.458-4.433-3.667-9.711-3.667-15.835c0-5.695,1.169-10.732,3.532-15.123C307.861,123.617,311.151,120.206,315.395,117.762z" />
                    <path fill="#6BD333"
                        d="M401.971,107.555c-0.698-1.666-2.82-3.318-5.587-3.318c-2.754,0-4.889,1.652-5.588,3.318l-29.387,67.584   c-1.021,2.337-0.215,5.803,2.888,7.146c3.438,1.478,6.34-0.819,7.186-2.767l6.998-16.117h35.793v-0.014l7.011,16.131   c0.847,1.947,3.748,4.244,7.186,2.767c3.116-1.343,3.909-4.809,2.901-7.146L401.971,107.555z M382.791,153.515l13.593-31.308   l13.605,31.308H382.791z" />
                    <path fill="#1DB7ED"
                        d="M51.879,4.391c-1.598-1.504-3.492-2.189-5.292-2.189c-1.867,0-3.761,0.685-5.386,2.283L5.314,40.379   c-0.121,0.114-2.78,2.27-2.78,5.883c0,3.317,2.108,5.191,2.283,5.359l35.874,35.888c0.121,0.114,2.229,2.8,5.856,2.8   c3.143,0,5.238-2.102,5.413-2.283c0,0,36.385-36.331,36.532-36.532c1.451-1.551,2.163-3.432,2.163-5.231   c0-2.686-1.276-4.204-2.404-5.5C88.116,40.574,51.879,4.391,51.879,4.391z M46.588,77.589L15.266,46.262l31.321-31.348   l31.348,31.348L46.588,77.589z" />
                </g>
            </svg>
            <a href="#" class="close-popup-js">x</a>
            <div class="block__top">
                <span>Записаться <span>на прием</span></span>
                <p class="ap_message">Заполните все поля, и мы свяжемся с вами в самое ближайшее время</p>
            </div>



            <form id="appointment-fixed-block" class="appointment-form block__form" 
                method="post">


                <div class="popup-doctors-choice">
                    <select class="select-css select-doctors" name="select-doctors">
                        <option>Выбирете доктора</option>
                        <option class="active-result" ${this.response ? this.response.selectDoctors == 'Кардиолог' ? "selected" : "" : ""} data-doctor="0">Кардиолог</option>
                        <option class="active-result" ${this.response ? this.response.selectDoctors == 'Стоматолог' ? "selected" : "" : ""} data-doctor="1">Стоматолог</option>
                        <option class="active-result" ${this.response ? this.response.selectDoctors == 'Терапевт' ? "selected" : "" : ""} data-doctor="2">Терапевт</option>
                    </select>
                </div>


                <div class="inputs-cardiologist">

                    <div class="input-wrap">
                        <input class="input-form input-pressure" type="text" name="pressure" value="${this.response ? this.response.pressure : ""}"
                            placeholder="Ваше обычное давление" minlength="5" maxlength="10">
                        <label class ="validation-pressure" for="input-pressure"></label>
                    </div>
                   
                    <div class="input-wrap">
                        <input class="input-form input-body-mass-index" type="text" name="body-mass-index" value="${this.response ? this.response.bodyMassIndex : ""}"
                            placeholder="Индекс массы тела" minlength="1" maxlength="10">
                        <label class ="validation-body-mass-index" for="input-body-mass-index"></label>
                    </div>

                    <div class="input-wrap">
                        <input class="input-form input-heart-disease" type="text" name="heart-disease" value="${this.response ? this.response.heartDisease : ""}"
                            placeholder="Перенесенные заболевания сердца" minlength="0" maxlength="100">
                        <label class ="validation-heart-disease" for="input-heart-disease"></label>
                    </div>
                </div>

                <div class="inputs-therapist"> 
                    <div class="input-wrap">
                        <input class="input-form input-age" type="text" name="age" value="${this.response ? this.response.age : ""}" placeholder="Возраст" minlength="1" maxlength="3">
                        <label class ="validation-age" for="input-age"></label>
                    </div>
                </div>


                <div class="inputs-dentist">
                    <div class="input-wrap">
                        <input class="input-form input-date-last-visit" type="text" name="date-last-visit" value="${this.response ? this.response.dateLastVisit : ""}"
                            placeholder="Дата последнего посещения" minlength="4" maxlength="40">
                        <label class ="validation-date-last-visit" for="input-date-last-visit"></label>
                    </div>
                </div>

                <div class="inputs-all">

                    <div class="input-wrap">
                        <input class="input-form input-purpose-visit" type="text" name="purpose-visit" value="${this.response ? this.response.purposeVisit : ""}"
                            placeholder="Цель визита" required minlength="4" maxlength="100">
                        <label class ="validation-purpose-visit" for="input-purpose-visit"></label>
                    </div>

                    <div class="popup-urgency-visit">
                        <select class="select-css select-visit" required name="select-visit">
                            <option value="">Срочность визита</option>
                            <option class="active-result" data-option-array-index="0" ${this.response ? this.response.selectVisit == 'Обычная' ? "selected" : "" : ""} value="Обычная">Обычная</option>
                            <option class="active-result" data-option-array-index="1" ${this.response ? this.response.selectVisit == 'Приоритетная' ? "selected" : "" : ""} value="Приоритетная">Приоритетная</option>
                            <option class="active-result" data-option-array-index="2" ${this.response ? this.response.selectVisit == 'Неотложная' ? "selected" : "" : ""} value="Неотложная">Неотложная</option>
                        </select>
                    </div>

                    <div class="popup-status-visit">
                        <select class="select-css select-status-visit" required name="select-status-visit">
                            <option value="">Статус визита</option>
                            <option class="active-result" data-option-array-index="0" ${this.response ? this.response.selectStatusVisit == 'Прошёл' ? "selected" : "" : ""} value="Прошёл">Прошёл</option>
                            <option class="active-result" data-option-array-index="1" ${this.response ? this.response.selectStatusVisit == 'Запланирован' ? "selected" : "" : ""} value="Запланирован">Запланирован</option>
                        </select>
                    </div>

                    <div class="input-wrap">
                        <input class="input-form input-name" type="text" name="name" value="${this.response ? this.response.descriptionVisit : ""}" placeholder="ФИО"  required minlength="6" maxlength="100">
                        <label class ="validation-name" for="input-name"></label>
                    </div>

                    <div class="input-wrap">
                        <input class="input-form input-description-visit" type="text" name="description-visit" value="${this.response ? this.response.name : ""}"
                            placeholder="Краткое описание визита"  required minlength="4" maxlength="100">
                        <label class ="validation-description-visit" for="input-description-visit"></label>
                    </div>

                    <div class="input-wrap">
                        <textarea class="modal-area input-form additional-comments" placeholder="Дополнительные комментарии" name="additional-comments" value="${this.response ? this.response.additionalСomments : ""}" id="description" minlength="0" maxlength="100">${this.response ? this.response.additionalСomments : ""}</textarea>
                    </div>

                </div>


                <div class="g-recaptcha"
                    style="transform:scale(0.95);-webkit-transform:scale(0.95);transform-origin:0 0;-webkit-transform-origin:0 0;"
                    data-sitekey="6LfsniQUAAAAABwRy_APpuBX6H3ODvu8WSRdUK8b">
                </div>
                <div class="submit-wrap">
                    <input class="appointment-submit" type="submit" name="appointment-send" value="Сохранить">
                </div>
            </form>
        </div>
        `;

        this.filterForm = this.cardWithId.querySelector(".filter-form");
        this.body.append(this.wrapperModal);
        this.body.addEventListener('click', (e) => {
            const popupContainer = this.cardWithId.querySelector('.popup-container');

            if (popupContainer !== null && e.target.id !== "visit-btn-id" && !popupContainer.contains(e.target) || e.target.className === "close-popup-js") {
                this.removeModal();
                this.visitCreate = this.cardWithId.querySelector(`.visit-create-${this.response.id}`);
                this.visitCreate.style.display = "block";
            }
        });

        return this.wrapperModal;
    }

}


export default ModalUpdate;