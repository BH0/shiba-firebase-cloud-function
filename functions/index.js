const functions = require("firebase-functions");
const fetch = require("node-fetch"); 

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// https://console.firebase.google.com/project/my-project-1510520008446/settings/general 
// http://localhost:4000/logs?q=metadata.emulator.name%3D%22functions%22 
// http://localhost:5001/my-project-1510520008446/us-central1/randomShiba 
// https://firebase.google.com/docs/functions/get-started 
// requires Blaze (pay-as-you-go) plan to deploy 
exports.randomShiba = functions.https.onRequest((request, response) => {
    const count = 10; 
    fetch('http://shibe.online/api/shibes?count='+count+'&urls=true&httpsUrls=true')
    .then(res => res.json())
    .then(json => {
        const shiba =  json[Math.floor(Math.random() * count)];
        // response.send(shiba);
        response.json({shiba: shiba});  
    }).catch(err => console.log(err)); 
}); 

 