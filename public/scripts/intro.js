function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$('#text1').hide();

if (getCookie("take_key")){
  $('#text').hide();
  $('#text').css("grid-area", "");
  $('#text1').show();
  $('#text1').css("grid-area", "text");
  $('#text1').css("justify-items", "center");
}
