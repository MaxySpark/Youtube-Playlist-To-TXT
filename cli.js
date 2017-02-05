var readlineSync = require('readline-sync');
var playlistParser = require('./lib/get_name');
var entities = require("entities");
var fs = require('fs');
console.log("Enter The Youtube Playlist URL");
var playlistUrl = readlineSync.question('Enter The URL : ');

playlistParser(playlistUrl,exportTxt);

function exportTxt(List) {
    var file = List.name+'.txt';
    fs.writeFile(file, List.name+"\n"+"Songs - \n\n", function(err) {
    if(err) {
        return console.log(err);
    }
    List.songs.forEach(function(element) {
        fs.appendFile(file, entities.decodeHTML(element)+'\n', (err) => {
            if (err) throw err;
            // console.log('The "data to append" was appended to file!');
        });
    });
    console.log("\nThe playlist is saved as "+List.name+".txt !");
}); 
}
