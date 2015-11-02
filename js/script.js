$(document).ready(function ($) {
	$('#myCarousel').carousel({
	    interval: 4000
	});

	$('[id^=carousel-selector-]').click( function(){
	  var id_selector = $(this).attr("id");
	  var id = id_selector.substr(id_selector.length -1);
	  id = parseInt(id);
	  $('#myCarousel').carousel(id);
	  $('[id^=carousel-selector-]').removeClass('selected');
	  $(this).addClass('selected');
	});

	$('#myCarousel').on('slid', function (e) {
	  var id = $('.item.active').data('slide-number');
	  id = parseInt(id);
	  $('[id^=carousel-selector-]').removeClass('selected');
	  $('[id=carousel-selector-'+id+']').addClass('selected');
	});

	$(".responsive-calendar").responsiveCalendar({
          time: '2015-10',
          events: {
            "2015-10-30": {"url": "http://w3widgets.com/responsive-slider", "title": "test"},
            "2015-10-26": {"url": "http://w3widgets.com", "title": "test"}, 
            "2015-11-03":{"title": "test"}, 
            "2015-11-12": {"title": "test"}
        	}
        });
	

	$("#carousel-example-generic").carousel();
	$("#myCarousel").carousel();
	$("#carousel-media").carousel();
	$("#carousel-gallery").carousel();


});
