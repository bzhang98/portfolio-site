const title = document.querySelector(".title") as HTMLElement;

const HEADER_TEXT_1 = "Hi! I'm Brian.";
const HEADER_TEXT_2 = "Welcome to my website!";

if (title) {
  title.textContent = "";
}

const addText = (text: string, speed: number, element: HTMLElement) => {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = "";

    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        resolve(undefined);
      }
    };
    type();
  });
};

const eraseText = (speed: number, element: HTMLElement) => {
  return new Promise((resolve) => {
    let i = (element.textContent ?? "").length;

    const erase = () => {
      if (i > 0) {
        element.textContent = (element.textContent ?? "").substring(0, i - 1);
        i--;
        setTimeout(erase, speed); 
      } else {
        resolve(undefined);
      }
    }
    erase();
  })
}

const typeWriter = async () => {
  await addText(HEADER_TEXT_1, 50, title);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
  await eraseText(50, title);
  await new Promise(resolve => setTimeout(resolve, 500)); // Wait 0.5 seconds
  await addText(HEADER_TEXT_2, 50, title);
  title.classList.add("blinking");
  await new Promise(resolve => setTimeout(resolve, 500)); // Wait 1 second
}

typeWriter().catch(console.error);
