var slideIndex = 0;
var common = new String("slide");
var cmnbtn = new String("btn");
var timer;
carousel();  // start the slideshow

function carousel(){
  // the slideshow
  slideIndex++;
  if (slideIndex > 4){slideIndex = 1}  // go back to 1st aft last

  displayImage();  // display the image

  timer = setTimeout(carousel, 6000);  // set timer
}

// display the image at slideIndex
function displayImage(){
  hideImage(slideIndex);  // hide the image it was previously on

  var slideId;
  var btnId;
  slideId = common.concat(slideIndex.toString());
  btnId = cmnbtn.concat(slideIndex.toString());

  var slide = document.getElementById(slideId);
  var btn = document.getElementById(btnId);

  // display the chosen image and color its button
  slide.style.display = "flex";
  btn.style.background = "#f2f2f2";
}

// hide image at hideIndex
function hideImage(){
  var hideIndex = slideIndex - 1;   // the image prior to the slideIndex
  if (hideIndex == 0){hideIndex = 4}  // if slideIndex == 1, previous img is 4

  var hideId;
  var hidebtn;
  hideId = common.concat(hideIndex.toString());
  hidebtn = cmnbtn.concat(hideIndex.toString());

  var slide = document.getElementById(hideId);
  var btn = document.getElementById(hidebtn);

  slide.style.display = "none";
  btn.style.background = "inherit";
}

function chooseImage(btnIndex){
  // first hide the image that we were on
  slideIndex++;
  hideImage();

  slideIndex = btnIndex - 1;  // slideIndex will be incrememnted in carousel()
  clearTimeout(timer);  // reset timer
  carousel();
}
