(function() {
  var liste_courses = "http://courses/ajouter";
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
})();
