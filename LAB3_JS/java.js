// JavaScript DOM Manipulation

// 1. Access elements using getElementById, getElementsByTagName, and getElementsByClassName
document.getElementById('changeTextButton').addEventListener('click', function() {
    // Change text using innerHTML
    document.getElementById('header').innerHTML = 'Welcome to the Stylish Web Page!';
    
    // Change CSS properties
    document.getElementById('header').style.color = '#ffdd59';
    document.getElementById('header').style.textShadow = '2px 2px #ff4e50';
    
    // Add a text node and attach it to a parent node
    var textNode = document.createTextNode('This is a stylish and dynamically added text.');
    document.getElementById('dynamic-text-container').appendChild(textNode);
});

document.getElementById('changeImageButton').addEventListener('click', function() {
    // Change the image source after clicking the button
    document.getElementById('image').src = 'background.jpg';
});

document.getElementById('deleteNodeButton').addEventListener('click', function() {
    // Delete the last paragraph
    var paragraphs = document.getElementsByTagName('p');
    if (paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].remove();
    }
});

// jQuery DOM Manipulation

$(document).ready(function() {
    // Change button text using jQuery
    $('#changeTextButton').click(function() {
        $(this).text('Heading Changed!');
    });

    // Set background-image using jQuery CSS property
    $('#changeImageButton').click(function() {
        $('body').css('background-image', 'url(https://via.placeholder.com/800x600)');
    });

    // Access HTML form data using jQuery
    $('#sampleForm').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        alert('Hello, ' + name + '!');
    });

    // Add attribute using jQuery
    $('#sampleForm').find('input[type="text"]').attr('placeholder', 'Your Stylish Name Here');
});
