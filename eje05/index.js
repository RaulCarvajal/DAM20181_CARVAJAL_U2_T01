var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Ra\u00FAl " + i,
            email: "i" + i + "@gmail.com",
            salary: (i + 10000),
            active: i % 2 === 0 ? true : false //If primitivo
        };
        people.push(newPerson);
    }
    people.push({
        name: "Ra\u00FAl",
        email: "novalido@gmailcom",
        salary: 2500,
        active: true
    });
}
function showPeople() {
    createPeople();
    people.forEach(function (e) {
        if (e.active == true && validateEmail(e.email)) {
            console.log(e);
        }
    });
}
function validateEmail(email) {
    var v = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return v.test(String(email).toLowerCase());
}
showPeople();
