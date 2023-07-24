class Display {

    constructor(divToShow, secondDivId) {
        this.firstDiv = document.getElementById(divToShow);
        this.secondDiv = document.getElementById(secondDivId);
        this.setDisplay(divToShow) 
    }

    setDisplay(divToShow) {
        const div = document.getElementById(divToShow);
        div.style.display = "block"; // tady definuju co chci aby se mi ukazalo

        if (divToShow === this.secondDiv.id) {
            this.firstDiv.style.display = "none";
        } else {
            this.secondDiv.style.display = "none";
        }
    }
}