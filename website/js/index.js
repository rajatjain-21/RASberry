var link = $('.com__nav-link');
var linkParent = link.parent('li');
var section = $('.com__section');
var sectionContent = section.find('*');

var switchTab = function() {
	var p = $(this).parent('li');
	var i  = p.index();
	var s = section.eq(i);
	var c = s.find('*');

	section.removeClass('active');
	sectionContent.removeAttr('style');
	s.addClass('active');

	c.css({
		transform: 'none',
		opacity: 1
	});

	linkParent.removeClass('active');
	p.addClass('active');

	return false;
};

link.on('click', switchTab);

function activeFirst() {
	section.first().addClass('active');
	section.first().find('*').css({
		transform: 'none',
		opacity: 1
	});
	linkParent.first().addClass('active');
}


activeFirst();


let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

