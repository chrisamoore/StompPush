$(document).ready(function() {
      if(window.WebSocket) {
        var client, destination;
        $('#connect_form').submit(function() {
          var url = $("#connect_url").val();
          var login = $("#connect_login").val();
          var passcode = $("#connect_passcode").val();
          destination = $("#destination").val();

          client = Stomp.client(url);

          // this allows to display debug logs directly on the web page
          client.debug = function(str) {
            $("#debug").append(str + "\n");
          };

          // the client is notified when it is connected to the server.
          client.connect(login, passcode, function(frame) {
            client.debug("connected to Stomp");
            $('#connect').fadeOut({ duration: 'fast' });
            $('#connected').fadeIn();
            client.subscribe(destination, function(message) {
              $("#messages").append("<p>" + message.body + "</p>\n");
            });
          });
          return false;
        });

        $('#disconnect').click(function() {
          client.disconnect(function() {
            $('#connected').fadeOut({ duration: 'fast' });
            $('#connect').fadeIn();
            $("#messages").html("")
          });
          return false;
        });

        $('#send_form').submit(function() {
          var text = $('#send_form_input').val();
          if (text) {
            client.send(destination, {}, text);
            $('#send_form_input').val("");
          }
          return false;
        });
      } else {
        $("#connect").html("\
            <h1>Get a new Web Browser!</h1>\
            <p>\
            Your browser does not support WebSockets. This example will not work properly.<br>\
            Please use a Web Browser with WebSockets support (WebKit or Google Chrome).\
            </p>\
        ");
      }
    });
