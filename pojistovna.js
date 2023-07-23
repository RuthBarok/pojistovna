const table = document.getElementById("ppl-table");
const tableContent = JSON.parse(localStorage.getItem("table"));
if (tableContent) {
    table.innerHTML = tableContent;
}

const form = document.getElementById("add-form");
form.addEventListener("submit", (e) => {
    // tohle zamwzi refresh stranky
    e.preventDefault();

    // table kterej vytvori rows

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
    table.appendChild(row); //pridavam novy rows do  table
    localStorage.setItem("table", JSON.stringify(table.innerHTML))



    const confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = `${name.value} ${surname.value} ulozeno!`


    const inputs = [name, surname, age, contact]; // tohle vymaze data z formulare
    for (let input of inputs) {
        input.value = "";
    }

    setTimeout(function () {
        confirmation.innerHTML = "";
    }, 2000);
});

function setDisplay(divToShow) {
    const div = document.getElementById(divToShow);
    div.style.display = "block"; // tady definuju co chci aby se mi ukazalo

    if (divToShow == "table-div") {
        const form = document.getElementById("form-div");
        form.style.display = "none";
    } else {
        const table = document.getElementById("table-div");
        table.style.display = "none";
    }

}

setDisplay("form-div"); // tohle je default - chci videt form-div

const year = new Date().getFullYear();

const aktualizace = document.getElementById("aktualizace");
aktualizace.innerHTML += year;

const footer = document.getElementById("footer");
footer.innerHTML += year;
