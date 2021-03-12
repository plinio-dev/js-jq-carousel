/*  Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Bonus:
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Generiamo i pallini con JS   */

$(function(){

  $(".prev").click(

  );

  $(".next").click(
    function() {
      var showImage = $('.images img.active');
      showImage.removeClass("active");
      if (showImage.hasClass("last") == true ) {
        $(".images img.first").addClass("active")
      }else {
        showImage.next().addClass("active");    
      }
    }
  );

});
