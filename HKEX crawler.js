function extract(request, response) {
  $ = response.body;

  var url = request.url;
  var id = url.replace(/[.:/&?=%]/g, '_');

  var scbUrl = $('meta[property="og:url"]').attr("content") || url;

  var scbImageUrl = "";

  // var scbUrl = location.href;
  var scbUrlArray = scbUrl.split("/");

  if (scbUrlArray[3] != null) {

    scbType = scbUrlArray[3].toLowerCase();
    if (scbType == "products") {
      scbType = "Products";
      scbImageUrl = "https://cdn.corporatefinanceinstitute.com/assets/hong-kong-dollar-hkd.jpeg";
    }

    else if (scbType == "join-our-market") {
      scbType = "Join Our Market";
      scbImageUrl = "https://www.hkex.com.hk/Market/home/media_20240426145320/ETFSpotlight6Tile.jpg";
    }

    else if (scbType == "services") {
      scbType = "Services";
      scbImageUrl = "https://www.hkex.com.hk/Market/home/media_20240426145320/home_LME_700x385.jpg";
    }

    else if (scbType == "global") {
      scbType = "Global";
      scbImageUrl = "https://www.hkex.com.hk/Market/home/media_20240426145320/1ppl_300x200.jpg";
    }

    else if (scbType == "news") {
      scbType = "News";
      scbImageUrl = "https://www.hkex.com.hk/Market/home/media_20240426145320/2ppl_300x200.jpg";
    }

    else if (scbType == "market-data") {
      scbType = "Market Data";
      scbImageUrl = "https://www.hkex.com.hk/Market/home/media_20240426145320/mega_menu_highlight_listing_newsletter_issue2_300x200.jpg";
    }


    else if (scbType == "listing") {
      scbType = "Listing";
      scbImageUrl = "https://www.hkex.com.hk/Market/home/media_20240426145320/HKEX%20IWD%202024%20Tile%20Image.jpg";
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