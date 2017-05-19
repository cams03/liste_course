(function() {
  var liste_courses = "http://courses.com/ajouter";

  $("#valider").on("click", function(){

    $.getJSON( liste_courses, {
      format: "json"
    })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "li" ).appendTo( "#list" );
        if ( i === 3 ) {
          return false;
        }
      });
    });
  })
})();
