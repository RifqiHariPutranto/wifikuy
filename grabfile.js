const FTPClient = require('ftp');
const cron = require('node-cron');
let ftp_client = new FTPClient();
const fs = require("fs");
let ftpConfig = {
    host: "10.1.64.130",
    port: 21,
    user: 'apeh',
    password: '1jutaw1f1',
}
//create a connection to ftp server
const task = cron.schedule('*/15 * * * *', function() {
  getCSV().then(console.log('success download csv per 15 minute'));
});
async function getCSV()
{
  ftp_client.connect(ftpConfig);
  ftp_client.on('ready', function() {
   ftp_client.get('apdetail.csv', function(err, stream) {
     if (err) throw err;
     stream.once('close', function() { ftp_client.end(); });
     stream.pipe(fs.createWriteStream('apdetail.csv'));
   });
 });
}

task.start();