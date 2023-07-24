class FormHandler {

    constructor(formId, tableId) {
        this.table = document.getElementById(tableId);
        const tableContent = JSON.parse(localStorage.getItem("table"));
        if (tableContent) {
            this.table.innerHTML = tableContent;
        }
        this.form = document.getElementById(formId);
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        // tohle zamwzi refresh stranky
        event.preventDefault();

        // The form's input fields:
        const name = document.getElementById("name");
        const surname = document.getElementById("surname");
        const age = document.getElementById("age");
        const contact = document.getElementById("contact");

        // vytvarim novej row element
        const row = document.createElement("tr");
        // vytvarim novy  td elements
        const nameTd = document.createElement("td");
        const contactTd = document.createElement("td");
        const ageTd = document.createElement("td");

        nameTd.innerHTML = `${name.value} ${surname.value}`; // definuje co bude uvnitr
        contactTd.innerHTML = contact.value;
        ageTd.innerHTML = age.value;

        const tds = [nameTd, contactTd, ageTd]; // loop pro pridani bunek do rows
        for (let td of tds) {
            row.appendChild(td);
        }
        this.table.appendChild(row); //pridavam novy rows do  table
        localStorage.setItem("table", JSON.stringify(this.table.innerHTML))

        const inputs = [name, surname, age, contact]; // tohle vymaze data z formulare
        for (let input of inputs) {
            input.value = "";
        }

        const confirmation = document.getElementById("confirmation");
        confirmation.innerHTML = `${name.value} ${surname.value} ulozeno!`

        setTimeout(function () {
            confirmation.innerHTML = "";
        }, 2000);
    }

}


