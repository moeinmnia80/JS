export function createTypeWriter(element, options = {}) {
  const config = {
    typeSpeed: 75,
    eraseSpeed: 35,
    pauseAfterType: 2600,
    pauseAfterErase: 150,
    cursorClass: "tc",
    ...options,
  };

  let currentIndex = 0;

  const type = (text, callback) => {
    let i = 0;
    element.innerHTML = `<span class="${config.cursorClass}"></span>`;

    const step = () => {
      element.innerHTML =
        text.slice(0, i) + `<span class="${config.cursorClass}"></span>`;
      i++;
      if (i <= text.length) setTimeout(step, config.typeSpeed);
      else if (callback) setTimeout(callback, config.pauseAfterType);
    };
    step();
  };

  const erase = (callback) => {
    let text = element.textContent;

    const step = () => {
      text = text.slice(0, -1);
      element.innerHTML = text + `<span class="${config.cursorClass}"></span>`;
      if (text.length > 0) setTimeout(step, config.eraseSpeed);
      else if (callback) setTimeout(callback, config.pauseAfterErase);
    };
    step();
  };

  const cycle = (texts) => {
    const loop = () => {
      erase(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        type(texts[currentIndex], loop);
      });
    };
    type(texts[0], loop);
  };

  return { type, erase, cycle };
}
