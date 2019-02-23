const functions = require('firebase-functions');


// sample data format:
// {'host': 'Elisabeth Campbell', 'address': 'W1F 8JB', 'link': 'https://depaul-hackathon.firebaseapp.com/', 'receiver': '+447768996754'}

exports.sendText = functions.https.onCall((data) => {
    const accountSid = 'AC8443dcb57d96ae88f15b4c318abf57c5';
    const authToken = 'eb2882c58d1661c39e60ab5324f00040';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({from: '+441757322044', body: 'DEPAUL CHARITY UK - Your host is ' +  data.host + ". The address is: " + data.address + ". Please find more details here: " + data.link, to: data.receiver})
        .then(message => console.log(message.sid));
});

