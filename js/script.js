// Function to make an API request using XMLHttpRequest
function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        callback(response);
      }
    };
    xhr.send();
  }
  
  // Function to update the content on the page
  function updateContent() {
    // Fetch channel information
    var channelId = "UCkXmLjEr95LVtGuIm3l2dPg";
    var apiKey = "AIzaSyBny4AjGIngFenIgAYY22JpCQSKrPx1fbg";
  
    var channelUrl =
      "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=" +
      channelId +
      "&key=" +
      apiKey;
  
    getJSON(channelUrl, function (channelData) {
      var youtubeProfilePic =
        channelData.items[0].snippet.thumbnails.medium.url;
      var channelName = channelData.items[0].snippet.title;
      var subscriber = channelData.items[0].statistics.subscriberCount;
  
      // Update content on the page with fetched data
      document.getElementById("profile-pic").src = youtubeProfilePic;
      document.getElementById("channel-name").textContent = channelName;
      document.getElementById("subscriber-count").textContent = subscriber + ' subscribers';
    });
  
    // Fetch latest video information
    var latestVideoUrl =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      apiKey +
      "&channelId=" +
      channelId +
      "&maxResults=1&order=date&part=snippet";
  
    getJSON(latestVideoUrl, function (latestVideoData) {
      var latestVideoId = latestVideoData.items[0].id.videoId;
  
      // Update content on the page with fetched data
      var iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube.com/embed/" + latestVideoId + "?rel=0";
      iframe.allowfullscreen = true;
      document.getElementById("latest-video").appendChild(iframe);
    });
  }
  
  // Call the function to update content when the page loads
  window.onload = function () {
    updateContent();
  };

  let instagramAppSecretKey = "f00974b4799a2487c33eaba9b75400be";
  let instagramToken = "IGQWRPNGdvNTM5cmxRMzRCbjc2TUVCbFhzUUp3THEzVlNrY3JmUlVuQnpfemFiYm42WFI1Mk02WVVrZA3NtR043dVoxN21oSk9NdUVxMHk5RTNnRjM3amYzelNqTFBCSTBEQVJITmh1bU53dnVYVkxNTUhJTU9mRW8ZD";
  