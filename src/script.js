const header = document.querySelector(".header");
const headerHeading = document.querySelector(".header__heading");
const headerDescription = document.querySelector(".header__description");
const H1_TEXT = "Brian Zhang";

const animationWrapper = document.querySelector(".wrapper");

const revealDuration =
  3.5 *
  (animationWrapper.offsetHeight /
    (window.innerHeight - header.offsetHeight - 16));

let scrollLock = true;

const lockToTop = () => {
  if (scrollLock) {
    window.scrollTo(0, 0);
    requestAnimationFrame(lockToTop);
  }
};
lockToTop();

document.body.style.overflow = "hidden";
setTimeout(() => {
  scrollLock = false;
  document.body.style.overflow = "auto";
}, (revealDuration - 0.5) * 1000);

headerHeading.textContent = "";

for (let i = 0; i < H1_TEXT.length; i++) {
  setTimeout(() => {
    headerHeading.textContent += H1_TEXT[i];
    if (i === H1_TEXT.length - 1) {
      setTimeout(() => {
        headerHeading.style.animation = "blink-caret 1s step-end infinite";
        setTimeout(() => {
          document.querySelector(".header").style.animation =
            "slideUpIntoPlace 1.5s linear forwards";
          animationWrapper.style.opacity = "1";
          animationWrapper.style.visibility = "visible";

          animationWrapper.style.animation = `slideUpIntoPlace 1.5s linear forwards, reveal-down ${revealDuration}s linear forwards`;
        }, 1000);
      }, 150);
    }
  }, 150 * i);
}
