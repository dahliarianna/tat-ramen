window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  const headerNav1 = document.querySelector(".header-nav1");
  const headerNav2 = document.querySelector(".header-nav2");
  const headerLogo1 = document.querySelector(".logo-gif");
  const headerLogo2 = document.querySelector(".logo-fixed");
  if (scroll >= 600){
    headerNav1.style.display = 'none'
    // headerNav2.style.display = 'block'
  } else {
    headerNav2.style.display = 'none'
    headerNav1.style.display = 'flex'
  }
  if (scroll >= 600){
    headerLogo1.style.display = 'none'
    headerLogo2.style.display = 'block'
  } else {
    headerLogo2.style.display = 'none'
    headerLogo1.style.display = 'block'
  }
});

function splitScroll() {
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    duration: "600",
    triggerElement: ".third1",
    triggerHook: 0,
  })
    .setPin(".third1")
    .addTo(controller);
}

splitScroll();

function splitScroll2() {
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    duration: "600",
    triggerElement: ".making-noodle",
    triggerHook: 0,
  })
    .setPin(".making-noodle")
    .addTo(controller);
}

splitScroll2();

function splitScroll3() {
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    duration: "700",
    triggerElement: ".fourth2",
    triggerHook: 0,
  })
    .setPin(".fourth2")
    .addTo(controller);
}

splitScroll3();

let titles = ["DESIRE", "FLAVOR", "FUEL", "DISH"];
let currentIndex = 0;

setInterval(() => {
  document.getElementById("choose-your").innerHTML = titles[currentIndex];
  currentIndex++;

  if (currentIndex === 4) currentIndex = 0;
}, 700);
