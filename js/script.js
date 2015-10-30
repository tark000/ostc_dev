$(document).ready(function ($) {
        var nsOptions =
			{
			    sliderId: "ninja-slider",
			    transitionType: "slide", //"fade", "slide", "zoom", "kenburns 1.2" or "none"
			    autoAdvance: true,
			    delay: "default",
			    transitionSpeed: "default",
			    aspectRatio: "9:6",
			    initSliderByCallingInitFunc: false,
			    shuffle: false,
			    startSlideIndex: 0, //0-based
			    navigateByTap: true,
			    pauseOnHover: false,
			    keyboardNav: true,
			    before: null,
			    license: "mylicense"
			};

		// var nslider = new NinjaSlider(nsOptions);

		$(".responsive-calendar").responsiveCalendar({
	          time: '2015-10',
	          events: {
	            "2015-10-30": {"url": "http://w3widgets.com/responsive-slider", "title": "test"},
	            "2015-10-26": {"url": "http://w3widgets.com", "title": "test"}, 
	            "2015-11-03":{"title": "test"}, 
	            "2015-11-12": {"title": "test"}
	        	}
	        });


    });

// var calendar = $("#calendar").calendar(
//     {	
//         tmpl_path: "tmpls/",
//         events_source: function () { return [
//         		{
// 		            "id": 293,
// 		            "title": 'Title: "The name of training."',
// 		            "url": "http://example.com",
// 		            "class": "event-important",
// 		            "start": 1446157104493, // Milliseconds
// 		            "end": 1446157109493 // Milliseconds
// 		        }

//         	]; }
//     });         
