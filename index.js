const formHandler = new FormHandler("add-form", "ppl-table");
const display = new Display("form-div", "table-div") // tohle je default - chci videt form-div

const year = new Date().getFullYear();

const aktualizace = document.getElementById("aktualizace");
aktualizace.innerHTML += year;

const footer = document.getElementById("footer");
footer.innerHTML += year;
