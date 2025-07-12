const COLORS = ['#fff', '#fff', '#fff', '#fff'];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[~~(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 400);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 300}vh 0 ${color}`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
  container.style.setProperty("--space-layer", layer.join(","));
}

generateSpaceLayer("1.6px", ".space-1", 130, "350s");
generateSpaceLayer("1px", ".space-2", 300, "295s");
generateSpaceLayer("2px", ".space-3", 175, "197s");