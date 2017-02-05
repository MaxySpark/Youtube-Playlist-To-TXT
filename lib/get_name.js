var request = require('request');
var cheerio = require('cheerio');
var entities = require("entities");
var Titles = [];
function get_title(playlist_url,callback) {
    request({
        url : playlist_url,
        gzip : true
    }, (err, res, body) => {
        if(err) throw err;
        else {
            var $ = cheerio.load(body);
            var l = $(".pl-video-title-link").length;
            var playlist_name = $("h1.pl-header-title").html().trim();
            console.log("Playlist Name : "+playlist_name);
            console.log("Parsing Title Count : "+l+"\n\n");
            $(".pl-video-title-link").each(function(){
                var title =$(this).html().trim();
                titleDecoded = entities.decodeHTML(title);
                Titles.push(title);
                console.log(titleDecoded);
            });
            var List = {
                name : playlist_name,
                songs : Titles
            }
            callback(List);
        }
    });
}

module.exports = get_title;