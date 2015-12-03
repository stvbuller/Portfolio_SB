$(document).ready(function(){
  $.ajax({
    type: "Get",
    urls: "https://api.github.com/user/jquery/repos",
    success: function(repos){
      for (var i = 0; i < repos.length; i++) {
        var newListItem = buildListGroup(repos[i]);
        $(".list-group").appened(newListItem);
        }
    },    
      error: function(jqXHR, textStatus, errorThrown) {
        alert("There is a problem");
        }
  });

  function buildListGroup(repoData){
    var commitsApiUrl = "https://api.github.com";
    commitsApiUrl += repo.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";

    var newLink = $("<a>")
     .attr("href", commitsApiUrl)
     .addClass("list-group-item")
     .append(repoData.full_name)

    return newLink;
  }






});