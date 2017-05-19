let addItem = []; //json pour ajouter item
let Items = {

    init: function(nom, qte) {
        this.nom = nom,
        this.qte = qte
    },

    decrire: function() {
        let description = "Nom : " + this.nom + ", Qté : " + this.qte;
        return description;
    }
};

document.getElementById('valider').addEventListener("click", function() {

    nom = document.getElementById('nom').value;
    qte = document.getElementById('qte').value;
    let newItem = Object.create(Items);
    newItem.init(nom, qte);
    addItem.push(newItem);
    console.log("Le nouvel item a été ajouté");
    addItem.forEach(function(item) {
        console.log(item.decrire());
    });
});
console.log(addItem);

(function() {
    let liste_courses = "/";
    let listeGet = [];

    $("form").submit(function(e) {
        e.preventDefault();
        let $form = $(this);
        let url = "https://coursesss.herokuapp.com";
        let posting = $.post(url, addItem);

        // Put the results in a div
        posting.done(function() {
            alert("success");
            let getting = $.getJSON(url, listeGet);
            getting.done(function(data) {
                console.log("second success");
                $.each(data, function(nom, qte) {
                    listeGet.push("<li>" + nom + qte + "</li>");
                });

                $("<ul/>", {
                    "class": "my-new-list",
                    html: listeGet.join("")
                }).appendTo(".content");
            })
        });

    });
})();
