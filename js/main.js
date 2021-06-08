$(document).ready(function () {
  var tabsItem = $(".main__tab");
  var contentItem = $(".main__element");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("main__tab--active");
    contentItem.removeClass("main__element--active");
    $(activeContent).addClass("main__element--active");
    $(this).addClass("main__tab--active");
  });
});

var menuButton = document.querySelector(".header__button-menu");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".header__background-menu")
    .classList.toggle("header__background-menu--visible");
});

$(document).on("click", ".jquery path", function () {
  $(this).toggleClass("active");
});
$(document).on("click", ".bookmark-path path", function () {
  $(this)[0].classList.toggle("active");
});
