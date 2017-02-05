var readlineSync = require('readline-sync');
var playlistParser = require('./lib/get_name');

console.log("Enter The Youtube Playlist URL");
var playlistUrl = readlineSync.question('Enter The URL : ');

playlistParser(playlistUrl);
