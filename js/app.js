//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

// Example of how to set a variable in jQuery:
// var $body = $('body');


$(document).ready(function() {
    
// Capture click event on image
// Prevent new page from opening on click
    
    var $overlay = $('<div id="overlay"></div>');
    var $img = $('<img>');
    
    $('body').append($overlay);
    $($overlay).append($img);
    
    // Shows overlay when user clicks on image
    $('#imageGallery a').on('click', function(event) {
      event.preventDefault();
        console.log('event prevented');
        
        var location = $(this).attr('href');
        $img.attr('src', location);
        
        $($overlay).show();
    })
    
    // Hides overlay when user clicks on it
    
    $($overlay).on('click', function(){
      $(this).hide();
    })
    


});







