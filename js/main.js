// Табы
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

// Открытие меню мобильного
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

// Слайдер
const swiper = new Swiper(".hints__swiper-container", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Слайдер статьи
const swiperArticle = new Swiper('.article__swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.article__button-slider--next',
    prevEl: '.article__button-slider--prev ',
  },
});

//Якоря
$(window).on("resize", function () {
  if ($(window).width() > 767) {
    $(".header__link a").bind("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 0,
          },
          1000
        );
      e.preventDefault();
    });
  } else {
    $(".header__link a").bind("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 53,
          },
          1000
        );
      e.preventDefault();
    });
  }
});

//Переход на статью при нажатии на кнопку
$(".button").on("click", function () {
  window.location.href = $(this).attr("formaction");
});

//Модальное окно
var modalButton = $("[data-togle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on('click', closeModal)

  function openModal(){
    var madalOverlay = $(".modal__overlay");
    var madalDialog = $(".modal__dialog");
    madalOverlay.addClass('modal__overlay--visible');
    madalDialog.addClass('modal__dialog--visible');
  }

    function closeModal(event){
    event.preventDefault()
    var madalOverlay = $(".modal__overlay");
    var madalDialog = $(".modal__dialog");
    madalOverlay.removeClass('modal__overlay--visible');
    madalDialog.removeClass('modal__dialog--visible');
  }

  $(document).keyup(function(e) {
	if (e.key === "Escape" || e.keyCode === 27) {
		closeModal(e);
	}
})
