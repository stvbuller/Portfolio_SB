$(document).ready(function(){
  $.ajax({
    type: "GET",
    //url: "https://api.github.com/users/jquery/repos",
    url: "https://api.github.com/users/stvbuller/repos",
    success: function(repos){
      for (var i = 0; i < repos.length; i++) {
        var newListItem = createListGroup(repos[i]);
        $(".list-group").append(newListItem);
      }
    },    
      error: function(jqXHR, textStatus, errorThrown) {
        alert("There is a problem");
        }
  });

  function createListGroup(repoData){
    var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repoData.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";

    var newLink = $("<a>")
     .attr("href", commitsApiUrl)
     .addClass("list-group-item")
     .append(repoData.full_name);

    return newLink;
  }






});