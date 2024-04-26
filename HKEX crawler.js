function extract(request, response) {
  $ = response.body;

  var url = request.url;
  var id = url.replace(/[.:/&?=%]/g, '_');

  var scbUrl = $('meta[property="og:url"]').attr("content") || url;

  // var scbUrl = location.href;
  var scbUrlArray = scbUrl.split("/");

  if (scbUrlArray[3] != null) {

    scbType = scbUrlArray[3].toLowerCase();
    if (scbType == "products") {
      scbType = "Products";
      scbImageUrl = "https://cdn.corporatefinanceinstitute.com/assets/hong-kong-dollar-hkd.jpeg";

    }
    else {
      scbType = "Others";
    }
  }

  //image
  if (scbImageUrl == "") {
    scbImageUrl = "https://www.egnyte.com/sites/default/files/inline-images/What%20Is%20Financial%20Data_.png";
  }

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
      image_url: scbImageUrl,
      name: scbamName.replace(/\s+/g, " "),
      type: scbType,
      url: scbUrl,
    },
  ];
}