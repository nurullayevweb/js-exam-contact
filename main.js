var elForm = document.querySelector(".js-form");
var elList = document.querySelector(".js-contact-list");
var elNameInput = document.querySelector(".js-name-input");
var elSelectInput = document.querySelector(".js-select-input");
var elTelInput = document.querySelector(".js-tel-input");
var elBtn = document.querySelector(".js-btn");
var newArray = [];

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    function formName(name) { // Name inputni tekshirish f
        if (name.length < 3) {
            alert("Nom 3ta harfdan oshiq bo'lishi shart");
            return false;
        }
    }
    if (formName(elNameInput.value) == false) return;

    function formRelation(relation) { // Relationship selekt inputni tekshirish f
        if (relation == "included") {
            alert("Relationship tanlang!");
            return false;
        }
    }
    if (formRelation(elSelectInput.value) == false) return;

    function formNumber(nbr) { // Number inputni tekshirish f
        if (nbr.length !== 12) {
            alert("Raqam to'g'ri emas!");
            return false;
        }
    }
    if (formNumber(elTelInput.value) == false) return;



    var newObj = {};

    newObj.nameInfo = elNameInput.value;
    newObj.selectInfo = elSelectInput.value;
    newObj.telInfo = elTelInput.value;


    newArray.push(newObj)

    var newItem = document.createElement("li");
    newItem.style="max-width:100%; min-width: 280px"
    newItem.classList.add("list-group-item", "p-4", "d-flex", "flex-column", "text-bg-primary","rounded");
    var newItemTitle = document.createElement("h4");
    var newItemRelation = document.createElement("p");
    newItemRelation.classList.add("fst-italic", "text-opacity-75");
    var newItemNumber = document.createElement("span");
    newItemNumber.classList.add("p-2", "text-bg-light", "rounded", "fw-medium");

    newItemTitle.textContent= newObj.nameInfo;
    newItemRelation.textContent= newObj.selectInfo;
    newItemNumber.textContent= "+" + newObj.telInfo;

    newItem.append(newItemTitle,newItemRelation,newItemNumber);
    elList.appendChild(newItem);
})