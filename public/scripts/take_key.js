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
key1 = document.getElementById('key1');
key1.addEventListener("mouseenter", function( event ) {
  event.target.style.color = "blue";
  document.getElementById('key').style.color = "blue";
}, false);
key1.addEventListener("mouseout", event => {
  event.target.style.color = "";
  document.getElementById('key').style.color = "";
});

key = document.getElementById('key');
key.addEventListener("mouseenter", function( event ) {
  event.target.style.color = "blue";
  document.getElementById('key1').style.color = "blue";
}, false);
key.addEventListener("mouseout", event => {
  event.target.style.color = "";
  document.getElementById('key1').style.color = "";
});


if (getCookie("take_key")){
  var story_div = document.getElementById('story-div');
  var story_no_key = document.getElementById('no-key-div');
  story_div.style.display = "none";
  story_no_key.style.display = "block";
}
