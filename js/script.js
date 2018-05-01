/**
 * Choose icon
 *
 */
function ico(c){
  img.width=330;


	switch(c){
			case 1:
        img.src="img/snowman.png";
        img.height=250;
        break;
      case 2:
        img.src="img/egg.png";
        img.height=100;
        break;
      case 3:
        img.src="img/la.png";
        img.height=250;

	}
}

/**
 * Change background color of the card
 *
 */
function bac(c){
  card = document.getElementById("cardbox");

  switch(c){
    case 1:
      card.style.backgroundColor = "#005c99";
      break;
    case 2:
      card.style.backgroundColor= "#66b266";
      break;
    case 3:
      card.style.backgroundColor= "#f25e5e";
      break;
    case 4:
      card.style.backgroundColor= "#631e50";
      break;
    case 5:
      card.style.backgroundColor= "#9bd32f";
      break;
    case 6:
      card.style.backgroundColor= "#009f94";
  }
}

/**
 * Apply the custom background image
 */
function load_image(u) {
  img = document.getElementById("img");
  url = document.getElementById("urli").value;
  img.src = url;
  img.width=430;
  img.height=300;
}

/**
 * Load text entered by user
 */
function load_text() {
  message = document.getElementById("message");
  msg = document.getElementById("msg");
  msg.innerHTML = message.value;
}

/**
 * Make visible/invisible the card
 * Used by on/off button
 */
function ante() {
  preview = document.getElementById("antebox");
  btn = document.getElementById("mostra");
  if (preview.style.display == "") {
	btn.innerHTML="Mostra";
    preview.style.display = "none";
  } else {
	btn.innerHTML="Nascondi";
    preview.style.display = "";
  }
}
/**
 * Save the card
 */
$(document).ready(function () {
  $(function() { 
    $("#save").click(function() { 
        html2canvas($('#cardbox').get(0)).then( function (canvas) {
		$("#ris").append(canvas);
		$("#cardbox").hide();
		setTimeout(function(){
    alert("Per salvare la cartolina: click destro e Salva immagine con nome");
		}, 700);
		
    });
});
	$("#newbtn").click(function() {
       location.reload();
});
});

})
