const functions = require('firebase-functions');
const accountSid = 'AC8443dcb57d96ae88f15b4c318abf57c5';
const authToken = 'eb2882c58d1661c39e60ab5324f00040';
const client = require('twilio')(accountSid, authToken);


// sample req format:
// {'host': 'Elisabeth Campbell', 'address': 'W1F 8JB', 'link': 'https://depaul-hackathon.firebaseapp.com/', 'receiver': '+447746731969'}

exports.sendText = functions.https.onCall((req) => {

    client.messages
        .create({from: '+441757322044', body: '\r\n \r\nDEPAUL CHARITY UK - Your host is ' +  req.host + ". \r\n \r\nThe address is: " + req.address + ".\r\n \r\nPlease find more details here: " + req.link, to: req.receiver})
        .then(message => console.log(message.sid));
    // console.log(req);
    // return res.status(200).send();
});

