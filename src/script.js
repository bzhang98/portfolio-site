const header = document.querySelector(".header");
const headerHeading = document.querySelector(".header__heading");
const headerDescription = document.querySelector(".header__description");
const headerButton = document.querySelector(".header__button");

const HEADER_TEXT_1 = "Hi! I'm Brian.";
const HEADER_TEXT_2 = "Welcome to my website!";

const animationWrapper = document.querySelector(".wrapper");

const revealDuration =
  2.5 *
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
}, 100);

headerHeading.textContent = "";

const typeWriter = (text, startDelay = 0, onComplete = () => {}) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      headerHeading.textContent += text[i];
      if (i === text.length - 1) {
        onComplete();
      }
    }, startDelay + 50 * i);
  }
};

const eraseText = (startDelay = 0, onComplete = () => {}) => {
  const currentText = headerHeading.textContent;
  for (let i = currentText.length - 1; i >= 0; i--) {
    setTimeout(() => {
      headerHeading.textContent = currentText.substring(0, i);
      if (i === 0) {
        onComplete();
      }
    }, startDelay + 50 * (currentText.length - i));
  }
};

// Start the sequence
typeWriter(HEADER_TEXT_1, 0, () => {
  // After typing first text, wait 1 second then start erasing
  setTimeout(() => {
    eraseText(0, () => {
      // After erasing, wait 0.5 seconds then type second text
      setTimeout(() => {
        typeWriter(HEADER_TEXT_2, 0, () => {
          headerHeading.style.animation = "blink-caret 1s step-end infinite";
          headerButton.style.display = "flex";
          headerButton.style.animation = "fadeIn 1s linear forwards";

          headerButton.addEventListener("click", () => {
            document.querySelector(".header").style.animation =
              "slideUpIntoPlace 1s linear forwards";
            animationWrapper.style.opacity = "1";
            animationWrapper.style.visibility = "visible";

            animationWrapper.style.animation = `slideUpIntoPlace 1s linear forwards, reveal-down ${revealDuration}s linear forwards`;
            headerButton.style.display = "none";
          });
        });
      }, 500);
    });
  }, 1000);
});
