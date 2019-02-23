const functions  = require('firebase-functions');

exports.getHome = functions.https.onRequest((req, res) => {
    matchedID = '42';
    res.send(matchedID);
});

exports.approvalChange = functions.https.onRequest((uid) => {
    uid.isActive = false
    // send text
});