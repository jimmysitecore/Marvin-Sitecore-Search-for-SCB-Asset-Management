function extract(request, response) {
    $ = response.body;
 
    var url = request.url;
    var id = url.replaceAll("/", "_").replaceAll(":", "_").replaceAll(".", "_");
 
    var scbUrl = $('meta[property="og:url"]').attr("content") || url;
 
    // var scbUrl = location.href;
    //var scbUrlArray = scbUrl.split("/");
 
    var scbamName = 
        $("h1").text() ||
        $('meta[property="og:title"]').attr("content") ||
        $("title").text();    
 
    var scbDescription = 
        $("p").text() ||    
        $('meta[property="og:description"]').attr("content");
 
    return [
      {
        id: id,
        description: scbDescription.replace(/\s+/g, " "),
        image_url: "https://www.hkexgroup.com/-/media/A935037144E5403C9148CBB4488E158A.ashx",
        name:  scbamName.replace(/\s+/g, " "),
        type: "YOUR TYPE",
        url: scbUrl,
      },
    ];
}