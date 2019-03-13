'use strict';
/*$.ajax({    
    type: "GET",
    //url: 'Library-FR.xml',
    url: "00005203.xmll",
    dataType: 'xml',
    success: function(){
        $('.library').text('all ok');
    },
    error: function(){
        $('.library').text('failed to get the feed');
    }
});
*/
let getXMLFile = function(path, callback){
    let request = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type", "text/xml");
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            callback(request.responseXML);
        }
    };
    request.send();
};
getXMLFile("Library-FR.xml", function(xml){
    console.log(xml);
})