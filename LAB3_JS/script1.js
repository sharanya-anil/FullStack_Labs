// Accessing and manipulating DOM elements
document.getElementById("myParagraph").innerHTML = "Text changed using getElementById!";

var paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.color = "blue";

var listItems = document.getElementsByClassName("list-item");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].style.position = "relative";
  listItems[i].style.left = "20px";
}

function changeImage() {
  document.getElementById("myImage").src = "image2.jpg";
}

var newTextNode = document.createTextNode(" - This text was added dynamically.");
document.getElementById("myDiv").appendChild(newTextNode);

var myList = document.getElementById("myList");
var listItemToDelete = myList.getElementsByTagName("li")[0]; 
myList.removeChild(listItemToDelete);


// jQuery operations

$("#submitButton").text("Send");
$("#myDiv").css("background-image", "url('background.jpg')");

$("#submitButton").click(function() {
  var name = $("#name").val();
  alert("Name entered: " + name);
});

$("#myImage").attr("title", "This is a cool image!");