
/* activate localStorage */
var localStore = window.localStorage;


/* surveyQuestion Model (This time, written in "JSON" format to interface more cleanly with Mustache) */
/* This is used to input the questions you would like to ask in your experience sampling questionnaire*/
var dailyQuestions = [
/*number each question in this variable starting from 0, so it is easy to reference question items when setting up question logic*/


               /*0*/
               {
               variableName: "mood",
               questionPrompt: "How good (bad) were you this morning?",
               minResponse: 1,
               maxResponse: 7,
               
               labels: [
                        {label: "7 Very good"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very bad"}
                        ]
               },
               
               /*1*/
               {
               variableName: "stress",
               questionPrompt: "How stressed were you this morning?",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very much"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*2*/
               {
               variableName: "vitality",
               questionPrompt: "How energetic were you this morning?",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very much"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not at all"}
                        ]
               },

               /*3*/
               {
               variableName: "self_control",
               questionPrompt: "I felt sharp and focused this morning.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very true"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not true"}
                        ]
               },

               /*4*/
               {
               variableName: "busy_lunchtime",
               questionPrompt: "How busy were you in the last two hours?",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very busy"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not busy at all"}
                        ]
               },

               /*5*/
               {
               variableName: "busy_general",
               questionPrompt: "How busy are you in general today?",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very busy"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Not busy at all"}
                        ]
               },

               /*6*/
               {
               variableName: "behavior",
               questionPrompt: "Did you go for a walk after lunch today?",
               minResponse: 0,
               maxResponse: 1,
               labels: [
                        {label: "Yes"},
                        {label: "No"}
                        ]
               },

               /*7*/
               {
               variableName: "submit",
               questionPrompt: "Thanks! This is the end of the session. Please click 'Submit' to submit your answers. If you want to modify your answers, click 'Back'.",
               },   
               ];

var x = dailyQuestions.length;

var weeklyQuestions = [
               /*8*/
               {
               variableName: "belief_longterm1",
               questionPrompt: "Lunch walk will greatly benefit my long-term health.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },
               
               /*9*/
               {
               variableName: "belief_longterm2",
               questionPrompt: "Lunch walk will slightly benefit my long-term health.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

                /*10*/
               {
               variableName: "belief_shortterm1",
               questionPrompt: "Lunch walk will greatly improve my current health.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

                /*11*/
               {
               variableName: "belief_shortterm2",
               questionPrompt: "Lunch walk will slightly improve my current health.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

               /*12*/
               {
               variableName: "affect1",
               questionPrompt: "Lunch walk as an activity can give me great pleasure.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

               /*13*/
               {
               variableName: "affect2",
               questionPrompt: "Lunch walk as an activity can give me slight pleasure.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

               /*14*/
               {
               variableName: "habit_strength1",
               questionPrompt: "Lunch walk is something I do without having to consciously remember?",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Completely agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Completely disagree"}
                        ]
               },

               /*15*/
               {
               variableName: "habit_strength2",
               questionPrompt: "Lunch walk is something I do automatically.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Completely agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Completely disagree"}
                        ]
               },

               /*16*/
               {
               variableName: "habit_strength3",
               questionPrompt: "Lunch walk is something I do without thinking.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Completely agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Completely disagree"}
                        ]
               },

               /*17*/
               {
               variableName: "habit_strength4",
               questionPrompt: "Lunch walk is something I start doing before I realize I'm doing it.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Completely agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Completely disagree"}
                        ]
               },

                /*18*/
               {
               variableName: "submit",
               questionPrompt: "Thanks! This is the end of the session. Please click 'Submit' to submit your answers. If you want to modify your answers, click 'Back'.",
               }, 
               ];

var y = weeklyQuestions.length;

/*(Reminding and motivational message) + sleep diary + reminder to wear the device */
var sleepQuestions = [
               
               /*19*/
               {
               variableName: "sleep",
               questionPrompt: "How was your sleep last night?",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Very good"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Very poor"}
                        ]
               },

               /*20*/
               {
               variableName: "submit",
               questionPrompt: "Thanks! This is the end of the session. Please click 'Submit' to submit your answers. If you want to modify your answers, click 'Back'.",
               },
               ];

var s = sleepQuestions.length;

var messagePage = [
               
               /*21*/
               {
               variableName: "suggestion",
               questionPrompt: "The weather is good today! Please go for a walk after lunch!",
               },

               /*22*/
               {
               variableName: "reminder",
               questionPrompt: "Hi, we hope that you enjoy lunch walk so far. Forming a new habit takes time, so please keep it going!",
               },
               ];

/*Questions to set up participant notifications so that notifications are customized to participant's schedule*/                
var participantSetup = [
              /*-19*/
              {
              variableName: "participant_id",
              questionPrompt: "Please enter your participant ID:"
              },

              /*-18*/
              {variableName: "phone",
              questionPrompt: "Model of your smartphone (e.g., iPhone 6s, Samsung Note 5):"
              },

              /*-17*/
              {variableName: "OS",
              questionPrompt: "Operation system of your smartphone (e.g, iOS 9.1, Android 6.0):"
              },

              /*-16*/
              {variableName: "latitude",
              questionPrompt: "Latitude of your workplace:"
              },

              /*-15*/
              {variableName: "longitude",
              questionPrompt: "Longitude of your workplace:"
              },

              /*-14*/
              {variableName: "wakeup",
              questionPrompt: "When do you usually wake up in the morning (e.g., 8:30, 9:00):"
              },

              /*-13*/
              {variableName: "lunchtime",
              questionPrompt: "when do you usually finish eating your lunch (e.g., 12:30, 13:00):"
              },

               /*-12*/
               {
               variableName: "belief_longterm1",
               questionPrompt: "Lunch walk will greatly benefit my long-term health.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },
               
               /*-11*/
               {
               variableName: "belief_longterm2",
               questionPrompt: "Lunch walk will slightly benefit my long-term health.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

                /*-10*/
               {
               variableName: "belief_shortterm1",
               questionPrompt: "Lunch walk will greatly improve my current health.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

                /*-9*/
               {
               variableName: "belief_shortterm2",
               questionPrompt: "Lunch walk will slightly improve my current health.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

               /*-8*/
               {
               variableName: "affect1",
               questionPrompt: "Lunch walk as an activity can give me great pleasure.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

               /*-7*/
               {
               variableName: "affect2",
               questionPrompt: "Lunch walk as an activity can give me slight pleasure.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Almost certain"},
                        {label: "6 Very likely"},
                        {label: "5 Somewhat likely"},
                        {label: "4 Maybe"},
                        {label: "3 Somewhat unlikely"},
                        {label: "2 Very unlikely"},
                        {label: "1 Almost impossible"}
                        ]
               },

               /*-6*/
               {
               variableName: "habit_strength1",
               questionPrompt: "Lunch walk is something I do without having to consciously remember?",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Completely agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Completely disagree"}
                        ]
               },

               /*-5*/
               {
               variableName: "habit_strength2",
               questionPrompt: "Lunch walk is something I do automatically.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Completely agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Completely disagree"}
                        ]
               },

               /*-4*/
               {
               variableName: "habit_strength3",
               questionPrompt: "Lunch walk is something I do without thinking.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Completely agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Completely disagree"}
                        ]
               },

               /*-3*/
               {
               variableName: "habit_strength4",
               questionPrompt: "Lunch walk is something I start doing before I realize I'm doing it.",
               minResponse: 1,
               maxResponse: 7,
               labels: [
                        {label: "7 Completely agree"},
                        {label: "6"},
                        {label: "5"},
                        {label: "4"},
                        {label: "3"},
                        {label: "2"},
                        {label: "1 Completely disagree"}
                        ]
               },

              /*-2*/
              {
              variableName: "submit",
              questionPrompt: "Thanks! Now we have all the information we need. Please click 'Submit' to submit your answers and see the instruction of forming a lunch walk habit. If you want to modify your answers, click 'Back'.",
              }, 

              /*-1*/
              {
              variableName: "instruction",
              questionPrompt: "Lunch walk is a very beneficial behavior for your health. It helps you to digest your meal and also to be more physically active. From tomorrow on, during your work days, please try to go for a walk for at least 10 minutes after your lunch. Your behavior will be measured by the activity tracker.",
              },
              ];

var z = participantSetup.length;

/*These are the messages that are displayed at the end of the questionnaire*/
var lastPage = [
        /*input your last-page message*/
                /*message for normal homepage*/
                {
                message: "Now you don't need to do anything with the app. Please wait for your next survey."
                },
                /*message after daily and weekly question*/
                {
                message: "Thanks for answering the questions. See you at next survey!"
                },
                /*message when the study is over*/
                {
                message: "The study is over. Thanks for all your inputs. We hope that you can keep the lunch walk habit!"
                },
                /*message after sleep survey*/
                {
                message: "Thanks for answering the questions. See you at next survey! And don't forget to wear your activity tracker!"
                },
                ];

var m = lastPage.length;

/*Populate the view with data from surveyQuestion model*/
// Making mustache templates
var questionTmpl = "<p>{{questionPrompt}}</p><ul>{{{buttons}}}</ul><br><button type='submit' class='next' value='Enter'>Next</button><br><button class='back' value='Back'>Back</button>";
var questionFirstTmpl = "<p>{{questionPrompt}}</p><ul>{{{buttons}}}</ul><br><button type='submit' class='first' value='Enter'>Next</button>";
var questionLastTmpl = "<p>{{questionPrompt}}</p><br><button type='submit' class='submit' value='Enter'>Submit</button><br><button class='back' value='Back'>Back</button>";
var questionInstructionTmpl = "<p>{{questionPrompt}}</p><br><button type='submit' class='start' value='Enter'>Start</button>";
var questionMessageTmpl = "<p>{{questionPrompt}}</p><br><button type='submit' class='start' value='Enter'>Got it!</button>";
var buttonTmpl = "<li><button id='{{id}}' class='options' value='{{value}}'>{{label}}</button></li>";
var textTmpl = "<li><textarea cols=50 rows=1 id='{{id}}'></textarea></li>";
var lastPageTmpl = "<h3>{{message}}</h3>";

var uniqueRecord;
//the next three variables are added for allowing users to go back and forth through questions
var newCount;
var lastCount;
var response;

//This uniqueKey is for iOS version
//the uniqueKey tags the set of responses from one questionnaire so that the compliance script can determine whether not a participant
//has completed a sufficient number of questionnaires for the day.
//The unique key also helps organize the data when preparing for data analysis
//uncomment next line if developing for iOS
//var uniqueKey;  


var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
bindEvents: function() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
    document.addEventListener("resume", this.onResume, false);
    document.addEventListener("pause", this.onPause, false);
    //document.addEventListener("deviceready", this.onTriggeredLocalNotification, false);

},

//these functions tell the app what to do at different stages of running
onDeviceReady: function() {
    // Enable background mode
    cordova.plugins.backgroundMode.setDefaults({ text:''});
    cordova.plugins.backgroundMode.enable();

    backgroundGeolocation.configure(app.locationSuccess, app.locationError, {
            desiredAccuracy: 10,
            stationaryRadius: 5,
            distanceFilter: 5,
            interval: 1000, // <!-- poll for position every minute 
            //fastestInterval: 120000,
            //debug: true, // <-- enable this hear sounds for background-geolocation life-cycle. 
            stopOnTerminate: false, // <-- enable this to clear background location settings when the app terminates 
    });

    if (localStore.setup == 1) {

            var geofence1 = {
                    id:             "enter workplace", //A unique identifier of geofence
                    latitude:       parseFloat(localStore.latitude), //Geo latitude of geofence
                    longitude:      parseFloat(localStore.longitude), //Geo longitude of geofence
                    radius:         100, //Radius of geofence in meters
                    transitionType: 1, //Type of transition 1 - Enter, 2 - Exit, 3 - Both
            };

            var geofence2 = {
                    id:             "leave workplace", //A unique identifier of geofence
                    latitude:       parseFloat(localStore.latitude), //Geo latitude of geofence
                    longitude:      parseFloat(localStore.longitude), //Geo longitude of geofence
                    radius:         1000, //Radius of geofence in meters
                    transitionType: 2, //Type of transition 1 - Enter, 2 - Exit, 3 - Both
              };

            window.geofence.initialize().then(function () {
                console.log("Successful initialization");
                //alert("Successful initialization");
            }, function (error) {
                console.log("Error", error);
                //alert("Error initialization");
            });

            window.geofence.addOrUpdate([geofence1, geofence2]).then(function () {
                //alert("Geofence successfully added");
                console.log('Geofence successfully added');
            }, function (reason) {
                //alert("Adding geofence failed");
                console.log('Adding geofence failed', reason);
            });
    }

    app.init();
},

onResume: function() {
    app.sampleParticipant();
},

onPause: function() {app.pauseEvents();},


/*onTriggeredLocalNotification: function() {
    cordova.plugins.notification.local.on("trigger", function (notification) {
        alert("triggered" + notification.id);
        //if (notification.id != 10)
            //return;
        setTimeout(function () {
                var notificationID = notification.id;
                cordova.plugins.notification.local.clear(notificationID);

        }, 30000);
        setTimeout(function () {
                backgroundGeolocation.start();
                //setTimeout(function () {backgroundGeolocation.stop();}, 240000);
                //var watchID = navigator.accelerometer.watchAcceleration(app.accelerometerSuccess, app.accelerometerError, accelerometerOptions);
                }, 60000);
    });
},*/


locationSuccess: function(location) {
        console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);
        //alert([location.latitude, location.longitude]);
        var datestamp = new Date();
        var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hours=datestamp.getHours(), minutes=datestamp.getMinutes(), seconds=datestamp.getSeconds(), miniseconds=datestamp.getMilliseconds();
        var uniqueRecord = "location_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds + "_" + miniseconds;
        localStore[uniqueRecord] = [location.latitude, location.longitude];
        backgroundGeolocation.finish();
},

locationError: function(error) {
        //s("hi");
        console.log('BackgroundGeolocation error');
},


getWeather: function(latitude, longitude) {
        // Get a free key at http://openweathermap.org/. Replace the "Your_Key_Here" string with that key.
        var OpenWeatherAppKey = "d319e02db9b0954b91aaceb5436802f0";

        var queryString =
            'http://api.openweathermap.org/data/2.5/forecast?lat='
              + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=celsius';

        $.getJSON(queryString, function (results) {

            if (results.list.length) {
                     var datestamp = new Date();
                     var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hour=datestamp.getHours(), minute=datestamp.getMinutes(), second=datestamp.getSeconds();
                     var uniqueRecord = "weather_" + year + "_" + month + "_" + day;
                     //localStore.removeItem(uniqueRecord);
                     localStore[uniqueRecord] = results.list[1].weather[0].id;
                     // Schedule the in-situ suggestion based on pulled weather data
                     var now = datestamp.getTime();
                     var positionLunch = localStore.lunchtime.search(":");
                     var lunchHour = Number(localStore.lunchtime.slice(0, positionLunch));
                     var lunchMinute = Number(localStore.lunchtime.slice(positionLunch + 1));
                     if (lunchMinute >= 30) {
                              lunchMinute = lunchMinute - 30;
                     }
                     else {
                              lunchMinute = 60 - (30 - lunchMinute);
                              lunchHour = lunchHour - 1;
                     }
                     var time_interval = (lunchHour - hour) * 3600 * 1000 + (lunchMinute - minute) * 60 * 1000 - second * 1000;
                     if (time_interval >= 0) {
                              var date_suggestion = new Date(now + time_interval);
                              if (localStore[uniqueRecord] >= 800 && localStore[uniqueRecord] <= 804) {
                                      cordova.plugins.notification.local.schedule({id: 999, title: "Suggestion to you", text: 'The weather is good today! Please go for a walk after lunch!', at: date_suggestion, icon: 'ic_launcher'});
                                      localStore["suggestion_" + year + "_" + month + "_" + day] = localStore.participant_id + "_999_" + date_suggestion;
                              }
                     }                    
            }

        }).fail(function () {
            console.log("error getting location");
        });
},


//this function loop through the keys in localStore to find the key that matches a string (a question name or a timestamp). Return the postion of the key
findKey: function(name, key, underline) {
    var q = NaN;
    //find the occurrence
    for (var p = 0; p < localStore.length; p++) {
            if (localStore.key(p).indexOf(key + underline + name) != -1){
                    q = p;
                    break;
            }
    }   
    return q;
},

//this function check if inputs for open questions are valid
checkValid: function(value, index) {
        if (index == -z) {
                if (isNaN(Number(value)) == false && value.length == 3) {return true;}
        }
        else if (index == -(z - 3)) {
                if (isNaN(parseFloat(value)) == false && parseFloat(value) >= -90 && parseFloat(value) <= 90) {return true;}
        }
        else if (index == -(z - 4)) {
                if (isNaN(parseFloat(value)) == false && parseFloat(value) >= -180 && parseFloat(value) <= 180) {return true;}
        }
        else if (index == -(z - 5)) {
                if (value.search(":") != -1) {
                        var position = value.search(":");
                        var hour = Number(value.slice(0, position));
                        var minute = Number(value.slice(position + 1));
                        if (hour >= 5 && hour <= 10 && minute >=0 && minute <= 59) {
                                 return true;
                        }
                }
        }
        else if (index == -(z - 6)) {
                if (value.search(":") != -1) {
                        var position = value.search(":");
                        var hour = Number(value.slice(0, position));
                        var minute = Number(value.slice(position + 1));
                        if (hour >= 11 && hour <= 14 && minute >=0 && minute <= 59) {
                                 return true;
                        }
                }
        }
        else if (index == -(z - 1) || index == -(z -2)) {return true;}
        return false;
},

//Beginning our app functions
/* The first function is used to specify how the app should display the various questions. You should note which questions 
should be displayed using which formats before customizing this function*/
renderQuestion: function(question_index) {
    //First load the correct question from the JSON database
    var question;
    var uniqueKey = localStore.uniqueKey;
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var day = new Date().getDate();

    //The if-else statement transfers question index (-21 to 18) to the index in the right question set
    if (question_index <= -1) {question = participantSetup[question_index + z];}
    else if (question_index >= x && question_index < x + y) {question = weeklyQuestions[question_index - x];}
    else if (question_index >= x + y && question_index < x + y + s) {question = sleepQuestions[question_index - x - y];}
    else if (question_index >= x + y + s) {question = messagePage[question_index - x - y - s];}
    else {question = dailyQuestions[question_index];}

    //Now populate the view for this question, depending on whether it uses buttons or textarea
    /*This next statement is a conditional statement saying that questions that are not equal to this number should be displayed as 
    *rating scales (i.e., small numbers at the top of the screen and larger numbers at the bottom of the screen). */
    
    if (question_index > -(z - 6) && question_index != (x - 1) && question_index != (x + y -1) && question_index != -2 && question_index != -1 && question_index != (x + y + 1) && question_index != (x + y + s) && question_index != (x + y + s + 1)) {
            question.buttons = "";
            var label_count = 0;
            for (var i = question.minResponse; i <= question.maxResponse; i++) {
                var label = question.labels[label_count++].label;
                question.buttons += Mustache.render(buttonTmpl, {
                                                    id: question.variableName+i,
                                                    value: i,
                                                    label: label
                                                    }
                                                    );
            };
            //Render a question with different template depending on whether it is the first question
            if (question_index == 0 || question_index == (x + y)) {
                    $("#question").html(Mustache.render(questionFirstTmpl, question));
            }
            else {
                    $("#question").html(Mustache.render(questionTmpl, question));
            }

            //The following if structure defines what happens when the user click "Next", "Back", and option buttons
            $("#question button").click(function(){
                //When the user click on "Next" 
                if (this.innerHTML=="Next") {
                        //A variable element is created and used to get the option that is selected (i.e., with blue background-color)
                        var element = "";
                        for (var j = question.minResponse; j <= question.maxResponse; j++) {
                                var tempColor = $("#question button[value="+j+"]").css("color");
                                if (tempColor == "rgb(255, 255, 255)") {
                                        element = $("#question button[value="+j+"]");
                                        break;
                                }
                        }
                        //When one option is selected
                        if (element != ""){
                                app.recordResponse(element, question_index);
                                //The following part solves the problem of the situation when a user clicks "Back" and then "Next", the system needs to know which option was selected and change the color
                                //When sleep diary is added, which question should be shown next
                                if (question_index <= -1) {
                                        var nextQuestion = participantSetup[newCount + z];
                                        var k = app.findKey(nextQuestion.variableName, "", "");
                                        if (isNaN(k) == false) {
                                                 $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", "#4169E1");
                                                 $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                        }
                                }
                                else if (question_index >= x || question_index == (x - 2)) {
                                        var nextQuestion = weeklyQuestions[newCount - x];
                                        var k = app.findKey(nextQuestion.variableName, uniqueKey, "_");
                                        if (isNaN(k) == false) {
                                                 $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", "#4169E1");
                                                 $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                        }
                                }
                                else {
                                        var nextQuestion = dailyQuestions[newCount];
                                        var k = app.findKey(nextQuestion.variableName, uniqueKey, "_");
                                        if (isNaN(k) == false) {
                                                 $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", "#4169E1");
                                                 $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                        }
                                }
                                //Find out which option of the next question was selected and render it (change the color or value in the text area)
                        }
                        //When no option is selected, app gives an alert message
                        else {
                                navigator.notification.alert("Oops! Please choose one option.", function(){}, "", "");
                        }
                }
                //When the user click on "Back"
                else if (this.innerHTML=="Back"){
                        if (question_index == x) {
                                 var backQuestion = dailyQuestions[question_index - 2];
                                 app.renderQuestion(question_index - 2);
                        }
                        else {
                                 if (question_index >= 1 && question_index <= (x - 1)) {
                                         var backQuestion = dailyQuestions[question_index - 1];
                                 }
                                 else if (question_index <= -1) {
                                         var backQuestion = participantSetup[question_index - 1 + z];
                                 }
                                 else if (question_index == x) {
                                         var backQuestion = dailyQuestions[question_index - 2];
                                 }
                                 else {
                                         var backQuestion = weeklyQuestions[question_index - 1 - x];
                                 }
                                 app.renderQuestion(question_index - 1);                             
                        }
                        
                        //Find out which option of the next question was selected and render it (change the color or value in the text area)
                        if (question_index <= -1) {
                                var k = app.findKey(backQuestion.variableName, "", "");
                        }
                        else {
                                var k = app.findKey(backQuestion.variableName, uniqueKey, "_");  
                        }
                        if (isNaN(k) == false){
                                if (question_index == -(z - 7)) {
                                        $("textarea").val(localStore[localStore.key(k)].toString());
                                }
                                else {
                                        $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", "#4169E1");
                                        $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                }
                        }                 
                }
                //When the user click on one of the options
                else {
                        $("#question button.options").css("background-color", "#FFFFFF");
                        $(this).css("background-color", "#4169E1");
                        $("#question button.options").css("color", "#4169E1");
                        $(this).css("color", "#FFFFFF");
                }
            });
    }
    //Render the last confirmation question separately
    else if (question_index == (x - 1) || question_index == (x + y - 1) || question_index == -2 || question_index == (x + y + 1)) {
            $("#question").html(Mustache.render(questionLastTmpl, question));
            $("#question button").click(function(){
                    //When the user click on "Submit"
                    if (this.innerHTML == "Submit") {
                            if (question_index == (x - 1)) {
                                       var uniqueRecord = "dailySurvey_"+ year + "_" + month + "_" + day;
                                       localStore[uniqueRecord] = 1;
                                       app.renderLastPage(lastPage[1]);
                            }
                            else if (question_index == (x + y - 1)) {
                                       var uniqueRecord = "dailySurvey_"+ year + "_" + month + "_" + day;
                                       localStore[uniqueRecord] = 1;
                                       app.renderLastPage(lastPage[1]);
                            }
                            else if (question_index == (x + y + 1)) {
                                       var uniqueRecord = "sleepSurvey_"+ year + "_" + month + "_" + day;
                                       localStore[uniqueRecord] = 1;
                                       app.renderLastPage(lastPage[3]);
                            }
                            else {
                                    var uniqueRecord = "setup"
                                    localStore[uniqueRecord] = 1;
                                    app.renderQuestion(-1);
                            }
                            
                    }
                    //When the user click on "Back"
                    else {
                            app.renderQuestion(lastCount);
                            if (question_index == (x - 1)) {
                                    var lastQuestion = dailyQuestions[lastCount];
                                    var k = app.findKey(lastQuestion.variableName, uniqueKey, "_")
                            }
                            else if (question_index == (x + y - 1)) {
                                    var lastQuestion = weeklyQuestions[lastCount - x];
                                    var k = app.findKey(lastQuestion.variableName, uniqueKey, "_")
                            }
                            else {
                                    var lastQuestion = participantSetup[lastCount + z];
                                    var k = app.findKey(lastQuestion.variableName, "", "")
                            }
                            if (isNaN(k) == false){
                                    $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", "#4169E1");
                                    $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                            }
                    }
            });
    }

    //Render the instruction page separately
    else if (question_index == -1) {
            $("#question").html(Mustache.render(questionInstructionTmpl, question));
            $("#question button").click(function(){
                    //When the user click on "Start"
                    if (this.innerHTML == "Start") {
                            app.schedulingQuestionnaires();
                            app.renderLastPage(lastPage[0]);
                    }
            });               
    }

    //Render the message page separately
    else if (question_index == (x + y + s) || question_index == (x + y + s + 1)) {
            $("#question").html(Mustache.render(questionMessageTmpl, question));
            $("#question button").click(function(){
                    //When the user click on "Got it!"
                    if (this.innerHTML == "Got it!") {
                            app.renderLastPage(lastPage[0]);
                            if (question_index == (x + y + s)) {
                                    var uniqueRecord = "suggestionReceived_"+ year + "_" + month + "_" + day;
                                    localStore[uniqueRecord] = 1;
                            }
                            else if (question_index == (x + y + s + 1)) {
                                    var uniqueRecord = "reminderReceived_"+ year + "_" + month + "_" + day;
                                    localStore[uniqueRecord] = 1;
                            }
                    }
            });               
    }

    //Render open-ended questions
    else {
            question.buttons = Mustache.render(textTmpl, {id: question.variableName +"1"});
            if (question_index == -z) {
                    $("#question").html(Mustache.render(questionFirstTmpl, question));
            }
            else {
                    $("#question").html(Mustache.render(questionTmpl, question));
            }
            $("#question button").click(function() {
                    //When the user click on "Next" 
                    if (this.innerHTML == "Next") {
                            if ($("textarea").val() != "") {
                                    if (app.checkValid($("textarea").val(), question_index)) {
                                            app.recordResponse($("textarea"), question_index);
                                            if (question_index == -(z - 6)) {
                                                    var nextQuestion = participantSetup[newCount + z];
                                                    var k = app.findKey(nextQuestion.variableName, "", "");
                                                    if (isNaN(k) == false) {
                                                            $("#question button[value="+localStore[localStore.key(k)]+"]").css("background-color", "#4169E1");
                                                            $("#question button[value="+localStore[localStore.key(k)]+"]").css("color", "#FFFFFF");
                                                    }
                                            }
                                            else {
                                                    var nextQuestion = participantSetup[newCount + z];
                                                    var k = app.findKey(nextQuestion.variableName, "", "");
                                                    if (isNaN(k) == false){
                                                            $("textarea").val(localStore[localStore.key(k)].toString());
                                                    }
                                            }
                                    }
                                    else {
                                            if (question_index == -z) {
                                                    navigator.notification.alert("Sorry, there seems to be an error in your answer. You should fill in your 3-digit participant ID.", function(){}, "", "")
                                            }
                                            else if (question_index == -(z - 3)) {
                                                    navigator.notification.alert("Sorry, there seems to be an error in the latitude you filled in.", function(){}, "", "")
                                            }
                                            else if (question_index == -(z - 4)) {
                                                    navigator.notification.alert("Sorry, there seems to be an error in the longitude you filled in.", function(){}, "", "")
                                            }
                                            else if (question_index == -(z - 5) || question_index == -(z - 6)) {
                                                    navigator.notification.alert("Sorry, there seems to be an error in the time you filled in (hour and minute shoud be separated by colon).", function(){}, "", "")
                                            }
                                    }
                            }
                            else {
                                    if (question_index == -z) {
                                                navigator.notification.alert("Sorry, there seems to be an error in your answer. You should fill in your 3-digit participant ID.", function(){}, "", "")
                                            }
                                    else if (question_index == -(z - 3)) {
                                                navigator.notification.alert("Oops! Please fill in the latitude of your workplace location.", function(){}, "", "")
                                            }
                                    else if (question_index == -(z - 4)) {
                                                navigator.notification.alert("Oops! Please fill in the longitude of your workplace location.", function(){}, "", "")
                                            }
                                    else {
                                                navigator.notification.alert("Oops! Please fill in an answer.", function(){}, "", "")
                                    }
                            }
                    }
                    //When the user click on "Back"
                    else if (this.innerHTML == "Back") {
                            app.renderQuestion(question_index - 1);
                            var backQuestion = participantSetup[question_index - 1 + z];
                            var k = app.findKey(backQuestion.variableName, "", "");
                            if (isNaN(k) == false){
                                    $("textarea").val(localStore[localStore.key(k)].toString());
                            }
                    }
                    //When the user click on "Submit"
            });
    }
},
    
renderLastPage: function(pageData) {
    $("#question").html(Mustache.render(lastPageTmpl, pageData));
    //snooze function logic
    //this conditional statement executes the snooze function when the snooze message is shown
    //Uncomment the function below when testing the snooze function (Stage 4 of Customization)
    app.saveDataLastPage();
},

/* Initialize the whole thing */
init: function() {
    //uncomment line below if developing for Android*/
    var sessionTime = new Date();
    var year = sessionTime.getFullYear();
    var month = sessionTime.getMonth();
    var day = sessionTime.getDate();
    var hour = sessionTime.getHours();
    var minute = sessionTime.getMinutes();
    localStore.uniqueKey = sessionTime.getTime();
  //change X to the number of questions in the participant setup
  //for example, if there are 9 questions in the participant setup, then X = 9
  //Make sure the value is negative (i.e., do not delete the negative sign)
  //This value is negative because they precede the first question of the questionnaire, which is question number 0
    if (!localStore.setup || localStore.setup == "undefined") {app.renderQuestion(-z);} //to setup page
    else {
            app.saveData();
            var positionWakeup = localStore.wakeup.search(":");
            var wakeupHour = Number(localStore.wakeup.slice(0, positionWakeup));
            var wakeupMinute = Number(localStore.wakeup.slice(positionWakeup + 1));
            var positionLunch = localStore.lunchtime.search(":");
            var lunchHour = Number(localStore.lunchtime.slice(0, positionLunch));
            var lunchMinute = Number(localStore.lunchtime.slice(positionLunch + 1));
            if (lunchMinute >= 30) {
                     lunchMinute = lunchMinute - 30;
            }
            else {
                     lunchMinute = 60 - (30 - lunchMinute);
                     lunchHour = lunchHour - 1;
            }
            var firstYear = localStore["firstYear"];
            var firstMonth = localStore["firstMonth"];
            var firstDay = localStore["firstDay"];
            var lastYear = localStore["lastYear"];
            var lastMonth = localStore["lastMonth"];
            var lastDay = localStore["lastDay"];

            if (year < firstYear || (year == firstYear && month < firstMonth) || (year == firstYear && month == firstMonth && day < firstDay)) {
                     app.renderLastPage(lastPage[0]);
            }
            else if (year > lastYear || (year == lastYear && month > lastMonth) || (year == lastYear && month == lastMonth && day > lastDay)) {
                     app.renderLastPage(lastPage[2]);
            }
            else {
                     window.geofence.onTransitionReceived = function (geofences) {
                         geofences.forEach(function (geo) {
                                 console.log('Geofence transition detected', geo);
                                 if (geo.id == "enter workplace") {
                                         //alert("enter workplace");
                                         backgroundGeolocation.start();
                                         var uniqueRecord = "weather_" + year + "_" + month + "_" + day;
                                         if (!localStore[uniqueRecord] || localStore[uniqueRecord] == "undefined") {
                                                 //alert("no weather data yet");
                                                 app.getWeather(Number(localStore.latitude), Number(localStore.longitude));

                                         }
                                 }
                                 else if (geo.id == "leave workplace") {
                                         //alert("leave workplace");
                                         backgroundGeolocation.stop();
                                 }
                         }); 
                     };

                     // Show different pages depending on the date and time            
                     if (sessionTime.getDay() == 0 || sessionTime.getDay() == 6) {
                              app.renderLastPage(lastPage[0]);
                     }
                     else {
                              if (hour >= 14 && hour < 21) {
                                       if (!localStore["dailySurvey_" + year + "_" + month + "_" + day] || localStore["dailySurvey_" + year + "_" + month + "_" + day] == "undefined") {
                                                app.renderQuestion(0);
                                       }
                                       else {app.renderLastPage(lastPage[0]);}
                              }
                              else if (hour >=21) {
                                       if (sessionTime.getDay() == 1 || sessionTime.getDay() == 4) {
                                                if (!localStore["reminderReceived_" + year + "_" + month + "_" + day] || localStore["reminderReceived_" + year + "_" + month + "_" + day] == "undefined") {
                                                      app.renderQuestion(x + y + s + 1);
                                                }
                                                else {app.renderLastPage(lastPage[0]);}
                                       }
                                       else {
                                                app.renderLastPage(lastPage[0]);
                                       }
                              }
                              else {
                                       if (hour > lunchHour || (hour == lunchHour && minute >= lunchMinute)) {
                                                if (!localStore["suggestion_" + year + "_" + month + "_" + day] || localStore["suggestion_" + year + "_" + month + "_" + day] == "undefined") {
                                                     app.renderLastPage(lastPage[0]); 
                                                }
                                                else {
                                                      if (!localStore["suggestionReceived_" + year + "_" + month + "_" + day] || localStore["suggestionReceived_" + year + "_" + month + "_" + day] == "undefined") {
                                                           app.renderQuestion(x + y + s); 
                                                      }
                                                      else {app.renderLastPage(lastPage[0]);}
                                                }
                                       }
                                       else {
                                                if (hour > wakeupHour || (hour == wakeupHour && minute >= wakeupMinute)) {
                                                         if (!localStore["sleepSurvey_" + year + "_" + month + "_" + day] || localStore["sleepSurvey_" + year + "_" + month + "_" + day] == "undefined") {
                                                                  app.renderQuestion(x + y);
                                                         }
                                                         else {
                                                                  app.renderLastPage(lastPage[0]);
                                                         }
                                                }
                                                else {app.renderLastPage(lastPage[0])}
                                       }
                              }
                     }
            }
      }           
},
  
/* Record User Responses */  
recordResponse: function(button, count) {
    //uncomment up to "localStore[uniqueRecord] = response;" to test whether app is recording and sending data correctly (Stage 2 of Customization)
//     //Record date (create new date object)
    var datestamp = new Date();
    //this line for uniqueKey was lacking in the original document
    var uniqueKey = localStore.uniqueKey;
    var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hours=datestamp.getHours(), minutes=datestamp.getMinutes(), seconds=datestamp.getSeconds();
//     //Record value of text field
    var currentQuestion;
    lastCount = count;
    //Specify which questions are open-ended, so that the app will record the response as a string by replacing these numbers
    // add more conditions if necessary
    if (count <= -(z - 6)) {
         response = button.val();
         currentQuestion = button.attr('id').slice(0,-1);
    }
    //Record value of clicked button
    else {
        response = button.val();
//         //Create a unique identifier for this response
        //currentQuestion = button.id.slice(0,-1);
        currentQuestion = button.attr('id').slice(0,-1);
    }

    //Delete previous answers to the same question
    var previousKey = "";
    var target;
    if (count <= -1) {
            target = currentQuestion;
    }
    else {target = uniqueKey + "_" + currentQuestion;}
    for (var i = 0; i < localStore.length; i++) {
            if (localStore.key(i).indexOf(target) != -1){
                    previousKey = localStore.key(i);
                    break
            }
    }
    localStore.removeItem(previousKey);

    if (count <= -1) {uniqueRecord = currentQuestion;}
    else {uniqueRecord = uniqueKey + "_" + currentQuestion + "_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds}
//     //Save this to local storage
    localStore[uniqueRecord] = response;

    //if (count == -1){app.schedulingQuestionnaires(); app.renderLastPage(lastPage[0], count); app.scheduledNotifs(); newCount = count}
    if (count == (x - 2)) {
            if (datestamp.getDay() == 5) {
                     app.renderQuestion(x);
                     newCount = count + 2;
            }
            else {app.renderQuestion(count + 1); newCount = count + 1}
    }
    else {app.renderQuestion(count + 1); newCount = count + 1}
},
    
/* Prepare for Resume and Store Data */
/* Time stamps the current moment to determine how to resume */
pauseEvents: function() {
    localStore.pause_time = new Date().getTime();
},
      
sampleParticipant: function() {
      var current_moment = new Date();
      var current_time = current_moment.getTime();
      var positionWakeup = localStore.wakeup.search(":");
      var wakeupHour = Number(localStore.wakeup.slice(0, positionWakeup));
      var wakeupMinute = Number(localStore.wakeup.slice(positionWakeup + 1));
      var positionLunch = localStore.lunchtime.search(":");
      var lunchHour = Number(localStore.lunchtime.slice(0, positionLunch));
      var lunchMinute = Number(localStore.lunchtime.slice(positionLunch + 1));
      if (lunchMinute >= 30) {
               lunchMinute = lunchMinute - 30;
      }
      else {
               lunchMinute = 60 - (30 - lunchMinute);
               lunchHour = lunchHour - 1;
      }
      var pause_time = localStore.pause_time;
      var date = new Date(Number(pause_time));
      var pauseHour = date.getHours();
      var pauseMinute = date.getMinutes();
      var pauseSecond = date.getSeconds();
      var critical_duration;
      if (pauseHour >= 0 && (pauseHour < wakeupHour || (pauseHour == wakeupHour && pauseMinute < wakeupMinute))) {
            critical_duration = ((wakeupHour - pauseHour) * 3600 + (wakeupMinute - pauseMinute) * 60 - pauseSecond) * 1000;
            if (critical_duration > 30 * 60 * 1000) {
                  critical_duration = 30  * 60 * 1000;
            }
      }
      else if (pauseHour < lunchHour || (pauseHour == lunchHour && pauseMinute < lunchMinute)) {
            critical_duration = ((lunchHour - pauseHour) * 3600 + (lunchMinute - pauseMinute) * 60 - pauseSecond) * 1000;
      }
      else if (pauseHour < 14) {
            critical_duration = ((14 - pauseHour) * 3600 - pauseMinute * 60 - pauseSecond) * 1000;
            if (critical_duration > 30 * 60 * 1000) {
                  critical_duration = 30 * 60 * 1000;
            }
      }
      else if (pauseHour < 21) {
            critical_duration = ((21 - pauseHour) * 3600 - pauseMinute * 60 - pauseSecond) * 1000;
      }
      else {
            critical_duration = ((24 - pauseHour) * 3600 - pauseMinute * 60 - pauseSecond + wakeupHour * 3600 + wakeupMinute * 60) * 1000;
            if (critical_duration > 30 * 60 * 1000) {
                  critical_duration = 30 * 60 * 1000;
            }
      }

    //change X to the amount of time the participant is locked out of the app for in milliseconds;
    //e.g., if you want to lock the participant out of the app for 10 minutes, replace X with 600000
      if ((current_time - pause_time) > critical_duration) {
            app.init();
      }
    //uncomment following else statement if developing for Android
      else {uniqueKey = localStore.uniqueKey;}
    //app.triggeredNotifs();
    /*Because saving data will remove those data in the localstorage, participants cannot go back to see their previous answers, so I commented the next line to 
    disable data saving when the app is resumed */
    //app.saveData();
},

//uncomment this function to test data saving function (Stage 2 of Customization)
saveDataLastPage:function() {
    var datestamp = new Date();
    var year = datestamp.getFullYear();
    var month = datestamp.getMonth();
    var day = datestamp.getDate();
    //if (localStore[year + "_" + month + "_" + day + "_habit_strength"] == "undefined") {
    //       localStore.removeItem(year + "_" + month + "_" + day + "_habit_strength");
    //}
    //if (localStore[year + "_" + month + "_" + day + "_urgent"] == "undefined") {
    //       localStore.removeItem(year + "_" + month + "_" + day + "_urgent");
    //}
    $.ajax({
           type: 'post',
           url: 'http://reflection.nfshost.com/data_collector.cgi',
           data: localStore,
           crossDomain: true,
           success: function (result) {
          //Define all the variables that need to be retained after sending the data
           var pid = localStore.participant_id, latitude = localStore["latitude"], longitude = localStore["longitude"], wakeup = localStore["wakeup"], lunchtime = localStore["lunchtime"], weather = localStore["weather_" + year + "_" + month + "_" + day], daily = localStore["dailySurvey_" + year + "_" + month + "_" + day], sleep = localStore["sleepSurvey_" + year + "_" + month + "_" + day]; 
           var firstYear = localStore["firstYear"], firstMonth = localStore["firstMonth"], firstDay = localStore["firstDay"], lastYear = localStore["lastYear"], lastMonth = localStore["lastMonth"], lastDay = localStore["lastDay"], suggestion = localStore["suggestion_" + year + "_" + month + "_" + day], setup = localStore.setup, suggestionReceived = localStore["suggestionReceived_" + year + "_" + month + "_" + day], reminderReceived = localStore["reminderReceived_" + year + "_" + month + "_" + day];
//        //uncomment next line if developing for Android*/
           var uniqueKey = localStore.uniqueKey;
           localStore.clear();
           localStore.participant_id = pid;
           localStore.latitude = latitude;
           localStore.longitude = longitude;
           localStore.wakeup = wakeup;
           localStore.lunchtime = lunchtime;
           localStore["weather_" + year + "_" + month + "_" + day] = weather;
           localStore["dailySurvey_" + year + "_" + month + "_" + day] = daily;
           localStore["sleepSurvey_" + year + "_" + month + "_" + day] = sleep;
           localStore["firstYear"] = firstYear;
           localStore["firstMonth"] = firstMonth;
           localStore["firstDay"] = firstDay;
           localStore["lastYear"] = lastYear;
           localStore["lastMonth"] = lastMonth;
           localStore["lastDay"] = lastDay;
           localStore["suggestion_" + year + "_" + month + "_" + day] = suggestion;
           localStore.setup = setup;
           localStore["suggestionReceived_" + year + "_" + month + "_" + day] = suggestionReceived;
           localStore["reminderReceived_" + year + "_" + month + "_" + day] = reminderReceived;   
//        //uncomment next line if developing for Android*/
           localStore.uniqueKey = uniqueKey;
           navigator.notification.alert("Data Sent Successfully", function(){}, "", "");
           },
           error: function (request, error) {console.log(error);navigator.notification.alert("Data are locally stored but cannot be sent now. Please try to have Internet Connection next time!",function(){}, "", "");}
           });
},

//uncomment this function to test data saving function (Stage 2 of Customization)
saveData:function() {
     var datestamp = new Date();
     var year = datestamp.getFullYear();
     var month = datestamp.getMonth();
     var day = datestamp.getDate();
     //if (localStore[year + "_" + month + "_" + day + "_habit_strength"] == "undefined") {
     //     localStore.removeItem(year + "_" + month + "_" + day + "_habit_strength");
     //}
     //if (localStore[year + "_" + month + "_" + day + "_urgent"] == "undefined") {
     //      localStore.removeItem(year + "_" + month + "_" + day + "_urgent");
     //}
     $.ajax({
           type: 'post',
           url: 'http://reflection.nfshost.com/data_collector.cgi',
           data: localStore,
           crossDomain: true,
           success: function (result) {
          //Define all the variables that need to be retained after sending the data
           var pid = localStore.participant_id, latitude = localStore["latitude"], longitude = localStore["longitude"], wakeup = localStore["wakeup"], lunchtime = localStore["lunchtime"], weather = localStore["weather_" + year + "_" + month + "_" + day], daily = localStore["dailySurvey_" + year + "_" + month + "_" + day], sleep = localStore["sleepSurvey_" + year + "_" + month + "_" + day]; 
           var firstYear = localStore["firstYear"], firstMonth = localStore["firstMonth"], firstDay = localStore["firstDay"], lastYear = localStore["lastYear"], lastMonth = localStore["lastMonth"], lastDay = localStore["lastDay"], suggestion = localStore["suggestion_" + year + "_" + month + "_" + day], setup = localStore.setup, suggestionReceived = localStore["suggestionReceived_" + year + "_" + month + "_" + day], reminderReceived = localStore["reminderReceived_" + year + "_" + month + "_" + day];
//        //uncomment next line if developing for Android
           var uniqueKey = localStore.uniqueKey;
           localStore.clear();
           localStore.participant_id = pid;
           localStore.latitude = latitude;
           localStore.longitude = longitude;
           localStore.wakeup = wakeup;
           localStore.lunchtime = lunchtime;
           localStore["weather_" + year + "_" + month + "_" + day] = weather;
           localStore["dailySurvey_" + year + "_" + month + "_" + day] = daily;
           localStore["sleepSurvey_" + year + "_" + month + "_" + day] = sleep;
           localStore["firstYear"] = firstYear;
           localStore["firstMonth"] = firstMonth;
           localStore["firstDay"] = firstDay;
           localStore["lastYear"] = lastYear;
           localStore["lastMonth"] = lastMonth;
           localStore["lastDay"] = lastDay;  
           localStore["suggestion_" + year + "_" + month + "_" + day] = suggestion;    
           localStore.setup = setup; 
           localStore["suggestionReceived_" + year + "_" + month + "_" + day] = suggestionReceived;
           localStore["reminderReceived_" + year + "_" + month + "_" + day] = reminderReceived;    
//        //uncomment next line if developing for Android
           localStore.uniqueKey = uniqueKey;
           },
           error: function (request, error) {console.log(error);}
           });
},
    
// Local Notifications Javascript
// Stage 5 of Customization
// This code is for signal-contingent designs
schedulingQuestionnaires:function() {
//    //The line below keeps the app running in the background so that the app will fire notifications at the appropriate time
     //window.plugin.backgroundMode.enable();

     var interval_daily, interval_reminder;
     var id_daily, id_reminder;
     var date_daily, date_reminder;
     var dateObject = new Date();
     var now = dateObject.getTime();
     var currentHour = dateObject.getHours(), currentMinute = dateObject.getMinutes(), currentSecond = dateObject.getSeconds(), currentDay = dateObject.getDay();
     if (currentDay == 0) {
         currentDay = 7;
     }
     var gap = 7 - currentDay;
     var nightLag = ((24 - currentHour) * 60 * 60 - currentMinute * 60 - currentSecond) * 1000 + gap * 24 * 60 * 60 * 1000;

     //Schedule daily surveys
     for (i = 0; i < 5; i++) {
               interval_daily = parseInt(nightLag) + parseInt(14 * 60 * 60 * 1000) + parseInt(86400) * parseInt(i) * 1000;
               id_daily = 101 + parseInt(i);
               date_daily = new Date(now + interval_daily);
               window.plugin.notification.local.add({icon: 'ic_launcher', id: id_daily, date: date_daily, message: 'Time for your daily Survey!', title: "Hello, I'm back", autoCancel: true});
               localStore['notification1_'+ i] = localStore.participant_id + "_" + id_daily + "_" + date_daily;
               if (i == 0) {
                        localStore["firstYear"] = date_daily.getFullYear();
                        localStore["firstMonth"] = date_daily.getMonth();
                        localStore["firstDay"] = date_daily.getDate();
                } 
      }
      var secondLag = nightLag + 7 * 24 * 60  * 60 * 1000;
      for (i = 0; i < 5; i++) {
               interval_daily = parseInt(secondLag) + parseInt(14 * 60 * 60 * 1000) + parseInt(86400) * parseInt(i) * 1000;
               id_daily = 101 + parseInt(i + 5);
               date_daily = new Date(now + interval_daily);
               window.plugin.notification.local.add({icon: 'ic_launcher', id: id_daily, date: date_daily, message: 'Time for your daily Survey!', title: "Hello, I'm back", autoCancel: true});
               localStore['notification1_'+ (i + 5)] = localStore.participant_id + "_" + id_daily + "_" + date_daily; 
      }
      var thirdLag = secondLag + 7 * 24 * 60  * 60 * 1000;
      for (i = 0; i < 5; i++) {
               interval_daily = parseInt(thirdLag) + parseInt(14 * 60 * 60 * 1000) + parseInt(86400) * parseInt(i) * 1000;
               id_daily = 101 + parseInt(i + 10);
               date_daily = new Date(now + interval_daily);
               window.plugin.notification.local.add({icon: 'ic_launcher', id: id_daily, date: date_daily, message: 'Time for your daily Survey!', title: "Hello, I'm back", autoCancel: true});
               localStore['notification1_'+ (i + 10)] = localStore.participant_id + "_" + id_daily + "_" + date_daily; 
               if (i == 4) {
                        localStore["lastYear"] = date_daily.getFullYear();
                        localStore["lastMonth"] = date_daily.getMonth();
                        localStore["lastDay"] = date_daily.getDate();
                }
      }  


      //Schedule wake-up reminders
     var positionWakeup = localStore.wakeup.search(":");
     var wakeupHour = Number(localStore.wakeup.slice(0, positionWakeup));
     var wakeupMinute = Number(localStore.wakeup.slice(positionWakeup + 1));
     for (i = 0; i < 5; i++) {
               interval_wakeup = parseInt(nightLag) + parseInt(wakeupHour * 60 * 60 * 1000) + parseInt(wakeupMinute * 60 * 1000) + parseInt(86400) * parseInt(i) * 1000;
               id_wakeup = 201 + parseInt(i);
               date_wakeup = new Date(now + interval_wakeup);
               window.plugin.notification.local.add({icon: 'ic_launcher', id: id_wakeup, date: date_wakeup, message: 'Time for your sleep Survey!', title: "Hello, I'm back", autoCancel: true});
               localStore['notification2_'+ i] = localStore.participant_id + "_" + id_wakeup + "_" + date_wakeup;
      }
      var secondLag = nightLag + 7 * 24 * 60  * 60 * 1000;
      for (i = 0; i < 5; i++) {
               interval_wakeup = parseInt(secondLag) + parseInt(wakeupHour * 60 * 60 * 1000) + parseInt(wakeupMinute * 60 * 1000) + parseInt(86400) * parseInt(i) * 1000;
               id_wakeup = 201 + parseInt(i + 5);
               date_wakeup = new Date(now + interval_wakeup);
               window.plugin.notification.local.add({icon: 'ic_launcher', id: id_wakeup, date: date_wakeup, message: 'Time for your sleep Survey!', title: "Hello, I'm back", autoCancel: true});
               localStore['notification2_'+ (i + 5)] = localStore.participant_id + "_" + id_wakeup + "_" + date_wakeup;
      }
      var thirdLag = secondLag + 7 * 24 * 60  * 60 * 1000;
      for (i = 0; i < 5; i++) {
               interval_wakeup = parseInt(thirdLag) + parseInt(wakeupHour * 60 * 60 * 1000) + parseInt(wakeupMinute * 60 * 1000) + parseInt(86400) * parseInt(i) * 1000;
               id_wakeup = 201 + parseInt(i + 10);
               date_wakeup = new Date(now + interval_wakeup);
               window.plugin.notification.local.add({icon: 'ic_launcher', id: id_wakeup, date: date_wakeup, message: 'Time for your sleep Survey!', title: "Hello, I'm back", autoCancel: true});
               localStore['notification2_'+ (i + 10)] = localStore.participant_id + "_" + id_wakeup + "_" + date_wakeup;
      }                   

      //Schedule reminders every 3 days for 5 times
      for (i = 0; i < 3; i++) {
               interval_reminder = parseInt(nightLag) + parseInt(21 * 60 * 60 * 1000) + parseInt(86400) * parseInt(i * 7) * 1000;
               id_reminder = 301 + parseInt(2 * i);
               date_reminder = new Date(now + interval_reminder);
               window.plugin.notification.local.add({icon: 'ic_launcher', id: id_reminder, date: date_reminder, message: 'You are in the process of forming a lunch walk habit. Please keep going!', title: "Reminder of lunch walk", autoCancel: true});
               localStore['notification3_'+ 2 * i] = localStore.participant_id + "_" + id_reminder + "_" + date_reminder;
      }
      var evenLag = nightLag + 3 * 24 * 60 * 60 * 1000;
      for (i = 0; i < 3; i++) {
               interval_reminder = parseInt(evenLag) + parseInt(21 * 60 * 60 * 1000) + parseInt(86400) * parseInt(i * 7) * 1000;
               id_reminder = 301 + parseInt(2 * i + 1);
               date_reminder = new Date(now + interval_reminder);
               window.plugin.notification.local.add({icon: 'ic_launcher', id: id_reminder, date: date_reminder, message: 'You are in the process of forming a lunch walk habit. Please keep going!', title: "Reminder of lunch walk", autoCancel: true});
               localStore['notification3_'+ (2 * i + 1)] = localStore.participant_id + "_" + id_reminder + "_" + date_reminder;
      }
},

};
