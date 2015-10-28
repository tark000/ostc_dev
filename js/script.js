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

		var nslider = new NinjaSlider(nsOptions);
    });