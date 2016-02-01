# floripa-timetables

This app was implemented using HTML5, angular js and bootstrap.

In order to run it, just download the code and start a webserver. If you don't have one, you can use http-server from node js:

* Install node js

Then on a terminal or node shell (windows) type:
* cd [path_to_app]/app
* npm install http-server -g
* http-server

Just run the app on a browser, using "ip_address:8080/". You can see the ip address shown in the console when http-server started. In order to run in a mobile phone the wifi should be the same network as the webserver.


Improvements:
 * add properties json on server-side (for urls for example)
 * i18n
 * add a angular js directive for timetables (avoid repeated code)
 * encapsulate REST calls on local servervices (avoid exposing user/pass)
 * use cordova to make it a real app
 