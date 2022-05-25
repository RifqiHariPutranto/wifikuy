const FTPClient = require('ftp');
let ftp_client = new FTPClient();
const fs = require("fs");
let ftpConfig = {
    host: "10.1.64.130",
    port: 21,
    user: 'apeh',
    password: '1jutaw1f1',
}
//create a connection to ftp server
ftp_client.connect(ftpConfig);
ftp_client.on('ready', function() {
   ftp_client.get('apdetail.csv', function(err, stream) {
     if (err) throw err;
     stream.once('close', function() { ftp_client.end(); });
     stream.pipe(fs.createWriteStream('copyapdetail.csv'));
   });
 });