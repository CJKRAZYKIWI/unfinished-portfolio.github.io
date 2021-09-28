"use strict";

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
<a class="navbar-brand" href="index.html">All Glory To God </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="experience.html">About Me</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="projects.html">Projects</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="research.html">Mental Health</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="education.html">Fitness</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="https://hashnode.com/" target="_blank">Blogs</a></li>
   <li class="nav-item">
   <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()">
   </li>
   
     <defs>
       <linearGradient id="paint0_linear" x1="432.641" y1="56.6686" x2="44.1018" y2="338.225" gradientUnits="userSpaceOnUse">
         <stop offset="0.0001" stop-color="#490DF3" />
         <stop offset="1" stop-color="#3B49C6" stop-opacity="0.05" />
       </linearGradient>
     </defs>
   </svg>
 </div>
  </ul>
</div>
</nav>`);

// Footer

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#ffebcc;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <div class="quotes"    style="text-align:center;">
      <!--SVG code for quote-left icon-->
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5em" height="1.5em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7 21a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2L7 13a4 4 0 1 1 0 8zm10 0a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2l-2 10a4 4 0 1 1 0 8z" fill="#fff" fill-rule="evenodd"/></svg>
      </div>
      <p class="tag" >The most important thing is to try and inspire people so that they can be great in whatever they want to do.- Kobe Bryant </p>
    </div>

    
    



        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 form-container">
          <div class="form-style-6">
             <div class="form-header">
                <h6 class="display">Get in Touch</h6>
              </div>
                <form>
                  <form action="https://formcarry.com/s/S2thQbCqEvW" method="POST" accept-charset="UTF-8" >
                  <input type="text" name="field1" placeholder="Your Name" required/>
                  <input type="email" name="field2" placeholder="Email Address"  required/>
                  <textarea name="field3" placeholder="Type your Message" required></textarea>
                  <input type="submit" value="Send it with LOVE" />
                </form>
             </div>
          </div>
        </div>
    </div>


    

   
</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

//function for the "Scroll To Top" button to detect the footer
$(document).ready(function () {
  $(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 838
      ) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  });
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

//consistent dark mode for page change
if (localStorage.getItem("lightMode") == "dark") {
  var app = document.getElementsByTagName("HTML")[0];
  app.setAttribute("light-mode", "dark");

  //to add dark theme to nav bar after its been loaded
  window.addEventListener("load", function () {
    var nav = document.getElementById("navbar");
    nav.classList.add("dark-theme");
    document.getElementById("dark_toggler").checked = true;
  });

  var sc = document.getElementsByClassName("socialicon");
  for (var i = 0; i < sc.length; i++) {
    sc[i].classList.add("dsc");
  }
} else {
  localStorage.setItem("lightMode", "light");
}

function toggle_light_mode() {
  console.log(localStorage.getItem("lightMode"));
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.remove("dsc");
    }
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.add("dsc");
    }
  }
}

window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
});

// Function to remove scroll bar during preload
$(window).on("load", function () {
  setTimeout(function () {
    $(".no-scroll-preload").css("overflow", "visible");
  }, 1000);
  $(".loader-container").fadeOut(2500);
});
