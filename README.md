# floripa-timetables

This app was implemented using HTML5, AngularJS, bootstrap and cordova (a.k.a. phonegap).

There are two ways to run it: (1) using a browser and (2) as an app.

### Method 1 - browser
In order to run it in a browser, just download the code and start a webserver. If you don't have one, you can use http-server from node js:

* Install node js

Then on a terminal or node shell (windows) type:
* cd [path_to_app]/www
* npm install http-server -g
* http-server

Just run the app on a browser, using "ip_address:8080/". You can see the ip address shown in the console when http-server started. In order to run in a mobile phone the wifi should be the same network as the webserver.

### Method 2 - Android app
To run it as an app, do the following:

* Install the Android SDK
* Install Android target 6.0 (API 23)
* Install node js
* Install cordova with: npm install -g cordova
* In a shell:
    * cd [path_to_app]
    * cordova platform add android
    * cordova run android

> If you have a phone, use cordova run --device instead.


### Improvements:
 * add properties json on server-side (for urls for example)
 * i18n
 * add an angular js directive for timetables (avoid repeated code)
 * encapsulate REST calls on local servervices (avoid exposing user/pass)
 * create an icon for the app
