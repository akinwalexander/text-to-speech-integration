const cron = require('node-cron');
const https = require('https');

const backend_url = 'https://text-to-speech-w87o.onrender.com';

const pingBackend = () => {
  https.get(backend_url, (res) => {
    if (res.statusCode === 200) {
      console.log('Successfully pinged backend at:', new Date().toISOString());
    } else {
      console.error(`Backend responded with status: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error('Error pinging backend:', err.message);
  });
};

cron.schedule('*/14 * * * *', pingBackend);

pingBackend();

module.exports = { pingBackend };
