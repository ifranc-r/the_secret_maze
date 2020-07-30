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

function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}


if (getCookie("take_key")){
  $('.revenir-pre').css("display","none");
  var story_div = document.getElementById('story-div');
  var story_no_key = document.getElementById('story2-div');
  story_div.style.display = "none";
  story_no_key.style.display = "block";
}

$("#ouvrir1").click(function() {
  $('#story2-div').css("display","none");
  $('#story3-div').css("display","block");
  setTimeout(function() {
    $('#story3-div').css("display","none");
    $('#story4-div').css("display","block");
    setTimeout(function() {
      $('#story4-div').css("display","none");
      $('#story5-div').css("display","block");
    }, 3000);
  }, 3000);
});



$("#non").click(function() {
  $('#story5-div').css("display","none");
  $('#story6-div').css("display","block");
});

$("#restart").click(function() {
  document.location.href = '/';
  eraseCookie("take_key");
});

$("#oui").click(function() {
  $('#story5-div').css("display","none");
  $('#story7-div').css("display","block");
});

$("#open").click(function() {
  $('#story7-div').css("display","none");
  $('#story8-div').css("display","block");
});

$("#enter").click(function() {
  $('#story8-div').css("display","none");
  $('#story9-div').css("display","block");
  setTimeout(function() {
    $('#story9-div').css("display","none");
    $('#story10-div').css("display","block");
  }, 3000);
});

$("#tv").click(function() {
  $('#story10-div').css("display","none");
  $('#story11-div').css("display","block");
  setTimeout(function() {
    $('#story11-div').css("display","none");
    $('#story12-div').css("display","block");
    setTimeout(function() {
      $('#story12-div').css("display","none");
      $('#story13-div').css("display","block");
      setTimeout(function() {
        $('#story13-div').css("display","none");
        $('#story14-div').css("display","block");
        setTimeout(function() {
          $('#story14-div').css("display","none");
          $('#story15-div').css("display","block");
          setTimeout(function() {
            $('#story15-div').css("display","none");
            $('#story16-div').css("display","block");
            setTimeout(function() {
              $('#story16-div').css("display","none");
              $('#story17-div').css("display","block");
              $('#video').show();
              $('#video').trigger('play');
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});

$("#info").click(function() {
  $('#story17-div').css("display","none");
  $('#info-div').css("display","block");
  $('.revenir-pre').css("display","block");
  eraseCookie("take_key");
});

$("#submit").click(function () {

        var user = {
          name: $("#name").val(),
          number:$("#number").val()
      };
      $.post('/submit_add_custumer', {user:user});
      $("#form").css('display','none');
      $("#merci").css('display', 'block');
});

$('#video').trigger('pause');

// $('#story-div').css("display","none");
// $('#story17-div').css("display","block");
// $('#video').show();
// $('#video').trigger('play');

  $('#video').on('ended', function(){
    $('#video').hide()
    $('#info').css("display","block");
  });
