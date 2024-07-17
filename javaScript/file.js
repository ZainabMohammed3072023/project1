
// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
let counter = setInterval(() => {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".days").innerHTML = days + "d  ";
  document.querySelector(".hours").innerHTML = hours + "h  ";
  document.querySelector(".mints").innerHTML = minutes + "m  ";
  document.querySelector(".seconds").innerHTML = seconds + "s";
  /*document.getElementById("time").innerHTML = days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";*/

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(counter);
    document.getElementById("days").innerHTML = "EXPIRED";
  }
}, 1000);

/*********testimonial moving */
// get the div element
var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');
var d3 = document.getElementById('d3');

function click1() {
  d1.style.opacity = "100%";
  d2.style.opacity = "30%";
  d3.style.opacity = "30%";
  d2.parentNode.insertBefore(d2, d2.parentNode.firstChild);
}

function click2() {
  d2.style.opacity = "100%";
  d1.style.opacity = "30%";
  d3.style.opacity = "30%";
  d1.parentNode.insertBefore(d1, d1.parentNode.firstChild);
}

function click3() {
  d3.style.opacity = "100%";
  d2.style.opacity = "30%";
  d1.style.opacity = "30%";
  d2.parentNode.insertBefore(d2, d2.parentNode.lastChild);
}
/***********end testimonial */

/******tab event************ */
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


/********** carousel js************* */
var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }
  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  };
  currentMargin = - currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + '%';
  if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive');
  }
}
setParams();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
    currentMargin += (100 / slidesPerPage);
    currentPosition--;
  };
  if (currentPosition === 0) {
    buttons[0].classList.add('inactive');
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
  }
};

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
    currentMargin -= (100 / slidesPerPage);
    currentPosition++;
  };
  if (currentPosition == slidesCount) {
    buttons[1].classList.add('inactive');
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
  }
};


/*********form validation*****/

var item;
var emailRogex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validationForm() {
  let error = [];
  item = document.getElementById('fname');
  error.push(noNull());
  error.push(textLen(10));
  /******for email****/
  item = document.getElementById('email');
  error.push(noNull());
  error.push(checkEmail(item.value));
}



/*******funcations for form */

function noNull() {
  if (item.value == "") {
    alert(': Please insert data for ' + item.id);
  }
  return '';
}
/****text length */
function textLen(length) {
  if (item.value.length < length) {
    alert(item.id + ': Min characters allowed is ' + length);
  }
  return '';
}

/********check email */
function checkEmail(email) {
  if (emailRogex.test(email)) {
    return '';
  } else {

    alert("Please enter a valid email address.");
  }
}
