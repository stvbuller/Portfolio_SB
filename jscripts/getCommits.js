$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits) {
        $("tbody").empty();
        for(var i = 0; i < commits.length; i++) {
          $("tbody").append(createTableRow(commits[i]));
          //$("tbody").addClass('hidden');
        }
      },
    })
  });


  function createTableRow(commitData) {
    var shaTd = $("<td>").append(commitData.sha);
    var authorTd = $("<td>").append(commitData.author);
    var messsageTd = $("<td>").append(commitData.commit.message);
    var dateTd = $("<td>").append(commitData.commit.author.date);

    //the idea here is to create a link that displays commitData.sha
    //and links to the page for the commit on GitHub, this link is then
    //appended to the table row
    //variable commitLink is created with the a tag
    var commitLink = $("<a>")
    //the url of the commit should be added to href attribute of the a tag
        .attr("href", commitData.url)
        .append(commitData.url);

    return $("<tr>").append(commitLink)
      .append(shaTd)
      .append(authorTd)
      .append(messsageTd)
      .append(dateTd);
  }
});





