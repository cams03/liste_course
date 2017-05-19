let addItem =[]; //json pour ajouter item
let Items = {

    init: function (nom, qte) {
        this.nom = nom,
        this.qte = qte
    },

    decrire: function () {
        let description = "Nom : " + this.nom + ", Qté : " + this.qte;
        return description;
      }
  };

document.getElementById('valider').addEventListener("click", function(){

  nom = document.getElementById('nom').value;
  qte = document.getElementById('qte').value;
  let newItem = Object.create(Items);
  newItem.init(nom, qte);
  addItem.push(newItem);
  console.log("Le nouvel item a été ajouté");
    addItem.forEach(function (item) {
        console.log(item.decrire());
    });
});
console.log(addItem);

(function() {
  let liste_courses = "/";
  let liste = [{nom: "", qt:"", id:""},{nom: "", qt:"", id:""}];
  $("#valider").on("click", function(){

    $.getJSON( liste_courses, {
      format: "json"
    })
    .done(function() {
      $.each(item, function( nom, qte ) {
        $( "<li>test</li>" ).appendTo( "#list" );
      });
    });
  })

  $("form").submit(function(){
    let $form = $( this );
    let url = $form.attr( "action" );
    let posting = $.post( url, addItem, json);

    // Put the results in a div
    posting.done(function() {
      $.each(item, function( nom, qte ) {
        $( "<li>test</li>" ).appendTo( "#list" );
      });
    });
  });

})();
