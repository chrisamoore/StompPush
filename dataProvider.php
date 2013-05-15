<?php
    $user = getenv("STOMP_USER");
    if( !$user ) $user = "admin";

    $password = getenv("STOMP_PASSWORD");
    if( !$password ) $password = "password";

    $host = getenv("STOMP_HOST");
    if( !$host ) $host = "localhost";

    $port = getenv("STOMP_PORT");
    if( !$port ) $port = 61613;

    $url = 'tcp://'.$host.":".$port;
    $con = new Stomp($url, $user, $password);

    if(!$con) {
        die('Connection failed: ' . stomp_connect_error());
    }

    $i = 0;
    while (1) {
        $con->send("/topic/word", "Message $i");
        echo "Message $i";
        $i++;
        sleep(3);
    }

