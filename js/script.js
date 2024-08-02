// Carsoul--------------------------------------

$(".carousel1").mouseover(function () {
  $("#infCardCrousel1").css("display", "initial");
  $("#infCardCrousel1").css("animation", "1s forwards topbardropdown");
});
$(".carousel1").mouseleave(function () {
  $("#infCardCrousel1").css("display", "none");
});
$(".carousel2").mouseover(function () {
  $("#infCardCrousel2").css("animation", "1s forwards topbardropdown");
  $("#infCardCrousel2").css("display", "initial");
});
$(".carousel2").mouseleave(function () {
  $("#infCardCrousel2").css("display", "none");
});
$(".carousel3").mouseover(function () {
  $("#infCardCrousel3").css("animation", "1s forwards topbardropdown");
  $("#infCardCrousel3").css("display", "initial");
});
$(".carousel3").mouseleave(function () {
  $("#infCardCrousel3").css("display", "none");
});

let elements = {
  first: [
    ".carousel1 img:nth-child(1)",
    ".carousel1 img:nth-child(3)",
    ".carousel1 img:nth-child(4)",
    ".carousel1 img:nth-child(5)",
    ".carousel1 img:nth-child(6)",
  ],
  second: [
    ".carousel2 img:nth-child(1)",
    ".carousel2 img:nth-child(5)",
    ".carousel2 img:nth-child(3)",
    ".carousel2 img:nth-child(4)",
    ".carousel2 img:nth-child(6)",
  ],
  third: [
    ".carousel3 img:nth-child(1)",
    ".carousel3 img:nth-child(5)",
    ".carousel3 img:nth-child(3)",
    ".carousel3 img:nth-child(4)",
    ".carousel3 img:nth-child(6)",
  ],
};

let defaultImage1 = $(elements.first[0]).attr("src");
let defaultImage2 = $(elements.second[0]).attr("src");
let defaultImage3 = $(elements.third[0]).attr("src");

for (var i = 1; i < 6; i++) {
  $(elements.first[i]).on("mouseover", function () {
    $(elements.first[0]).attr("src", this.src);
  });
  $(elements.first[i]).on("mouseleave", function () {
    $(elements.first[0]).attr("src", defaultImage1);
  });
  $(elements.second[i]).on("mouseover", function () {
    $(elements.second[0]).attr("src", this.src);
  });
  $(elements.second[i]).on("mouseleave", function () {
    $(elements.second[0]).attr("src", defaultImage2);
  });
  $(elements.third[i]).on("mouseover", function () {
    $(elements.third[0]).attr("src", this.src);
  });
  $(elements.third[i]).on("mouseleave", function () {
    $(elements.third[0]).attr("src", defaultImage3);
  });
}

// Header Navbar Rasponsive--------------------------------------

$(".headerNavbarRespansive div:nth-child(2)").click(function () {
  $(
    ".headerNavbarRespansive div:nth-child(2) div ul:first-of-type"
  ).toggleClass("headerNavbarRespansiveMenu");
  $(".headerNavbarRespansive div:nth-child(2)").toggleClass(
    "headerNavbarRespansiveMenu"
  );
});
$(".headerNavbarRespansive div:nth-child(3)").click(function () {
  $(
    ".headerNavbarRespansive div:nth-child(3) div ul:first-of-type"
  ).toggleClass("headerNavbarRespansiveMenu");
  $(".headerNavbarRespansive div:nth-child(3)").toggleClass(
    "headerNavbarRespansiveMenu"
  );
});

let m = 1;

$(function () {
  if (m == 1) {
    $("#sandwichButton").click(function () {
      $(".headerNavbarRespansive").css("left", "0px");
      m = 0;
    });
  } else {
    $("*").click(function () {
      $(".headerNavbarRespansive").css("left", "-350px");
      m = 1;
    });
  }
});

// Middle Navbar Rasponsive--------------------------------------

$(".middleNavbarRespansive div:nth-child(2)").click(function () {
  $(".dropdownMiddleNavbarResponsiv").toggleClass(
    "dropdownMiddleNavbarResponsivMenu"
  );
});
$(".middleNavbarRespansive div:nth-child(4)").click(function () {
  $(".dropdown2MiddleNavbarResponsiv").toggleClass(
    "dropdownMiddleNavbarResponsivMenu"
  );
});


// swiper   --------------------------------------

import Swiper from 'swiper/bundle';


import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});