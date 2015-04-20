$(function() {

  $( ".dt1" )
    .mouseenter(function() {
      $(".dt1 a:first").prepend("<span ><br/><br/><br/>M <br/><br/>A<br/><br/>I<br/><br/>N</span>");
      $(".dt1 span:first").remove();
    })
  .mouseleave(function() {    

      $(".dt1 a span:first").remove();
    });

});