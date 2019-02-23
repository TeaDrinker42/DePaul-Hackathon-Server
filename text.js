const accountSid = 'AC8443dcb57d96ae88f15b4c318abf57c5';
const authToken = 'eb2882c58d1661c39e60ab5324f00040';
const client = require('twilio')(accountSid, authToken);

client.messages
   .create({from: '+441757322044', body: 'https://depaul-hackathon.firebaseapp.com/', to: '+447768996754'})
   .then(message => console.log(message.sid));