const lenis = new Lenis({
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.body.style.overflow = "hidden";
lenis.stop();

function copyCa() {
  const ca = "EsP4kJfKUDLfX274WoBSiiEy74Sh4tZKUCDjfULHpump";
  const caTooltip = document.querySelector(".ca-tooltip");
  navigator.clipboard
    .writeText(ca)
    .then(() => {
      caTooltip.textContent = "COPIED!";
    })
    .catch(() => (caTooltip.textContent = "COPIED!"))
    .finally(() => {
      setTimeout(() => {
        if (window.innerWidth < 768) {
          caTooltip.style.opacity = 0;
        }
        caTooltip.textContent = "COPY ADDRESS";
      }, 2000);
    });
}

document.querySelector(".navbar-ca").addEventListener("click", copyCa);

const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("navbar-btn");

function toggleNav() {
  navBtn.classList.toggle("active");
  if (navBtn.classList.contains("active")) {
    navbar.classList.add("active");
    document.body.style.overflow = "hidden";
    lenis.stop();
  } else {
    navbar.classList.remove("active");
    document.body.style.overflow = "";
    lenis.start();
  }
}
navBtn.addEventListener("click", toggleNav);

const beat = document.getElementById("beat");
const wakeUpLayout = document.getElementById("wake-up-fren");
const wakeUpBtn = document.getElementById("wake-up-btn");
const sleepingFric = document.querySelector(".wake-up-img.asleep");
const awakeFric = document.querySelector(".wake-up-img.awake");

let revealing = false;

function wakeUp() {
  if (revealing) {
    return;
  }
  sleepingFric.style.display = "none";
  awakeFric.style.display = "block";
  revealing = true;
  beat.play();
  setTimeout(() => {
    revealSite();
  }, 500);
}

wakeUpBtn.addEventListener("click", wakeUp);
// wakeUpVideo.addEventListener("ended", revealSite);

function revealSite() {
  wakeUpLayout.style.opacity = "0";
  document.body.style.overflow = "";
  lenis.start();
  setTimeout(() => {
    wakeUpLayout.style.display = "none";
  }, 1000);
  const rightScrollText = document.querySelectorAll(".scroll-right");
  const leftScrollText = document.querySelectorAll(".scroll-left");
  rightScrollText.forEach((el) => {
    el.classList.remove("scroll-right");
    void el.offsetHeight;
    el.classList.add("scroll-right");
  });
  leftScrollText.forEach((el) => {
    el.classList.remove("scroll-left");
    void el.offsetHeight;
    el.classList.add("scroll-left");
  });
}

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

function pauseBeat() {
  beat.pause();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
}

function playBeat() {
  beat.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

playBtn.addEventListener("click", playBeat);
pauseBtn.addEventListener("click", pauseBeat);

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navBtn.classList.remove("active");
    navbar.classList.remove("active");
    document.body.style.overflow = "";
    lenis.start();
  }
});

const btn = document.getElementById("back-to-top");
const gallery = document.querySelector(".gallery");

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    },
    {
      rootMargin: "0px 0px -200px 0px",
    }
  );

  observer.observe(gallery);
});

btn.addEventListener("click", () => {
  lenis.scrollTo(0);
});

let colorIndex = 0;
let eyesIndex = 0;
let accessoryIndex = 0;

const bodyColors = [
  "./images/pfp-generator/body-colors/color1.png",
  "./images/pfp-generator/body-colors/color2.png",
  "./images/pfp-generator/body-colors/color3.png",
  "./images/pfp-generator/body-colors/color4.png",
  "./images/pfp-generator/body-colors/color5.png",
  "./images/pfp-generator/body-colors/color6.png",
  "./images/pfp-generator/body-colors/color7.png",
  "./images/pfp-generator/body-colors/color8.png",
  "./images/pfp-generator/body-colors/color9.png",
  "./images/pfp-generator/body-colors/color10.png",
  "./images/pfp-generator/body-colors/color11.png",
];

const eyes = [
  "./images/pfp-generator/eyes/eye1.png",
  "./images/pfp-generator/eyes/eye2.png",
  "./images/pfp-generator/eyes/eye3.png",
  "./images/pfp-generator/eyes/eye4.png",
  "./images/pfp-generator/eyes/eye5.png",
  "./images/pfp-generator/eyes/eye6.png",
  "./images/pfp-generator/eyes/eye7.png",
  "./images/pfp-generator/eyes/eye8.png",
  "./images/pfp-generator/eyes/eye9.png",
  "./images/pfp-generator/eyes/eye10.png",
  "./images/pfp-generator/eyes/eye11.png",
];

const accessories = [
  "./images/pfp-generator/accessories/design1.png",
  "./images/pfp-generator/accessories/design11_1.png",
  "./images/pfp-generator/accessories/design11_2.png",
  "./images/pfp-generator/accessories/design11_3.png",
  "./images/pfp-generator/accessories/design11_4.png",
  "./images/pfp-generator/accessories/design12_1.png",
  "./images/pfp-generator/accessories/design12_2.png",
  "./images/pfp-generator/accessories/design12_3.png",
  "./images/pfp-generator/accessories/design12_4.png",
  "./images/pfp-generator/accessories/design12_5.png",
  "./images/pfp-generator/accessories/design13_1.png",
  "./images/pfp-generator/accessories/design13_2.png",
  "./images/pfp-generator/accessories/design13_3.png",
  "./images/pfp-generator/accessories/design13_4.png",
  "./images/pfp-generator/accessories/design13_5.png",
  "./images/pfp-generator/accessories/design13_6.png",
  "./images/pfp-generator/accessories/design13_7.png",
  "./images/pfp-generator/accessories/design13_8.png",
  "./images/pfp-generator/accessories/design14_1.png",
  "./images/pfp-generator/accessories/design14_2.png",
  "./images/pfp-generator/accessories/design14_3.png",
  "./images/pfp-generator/accessories/design14_4.png",
  "./images/pfp-generator/accessories/design14_5.png",
  "./images/pfp-generator/accessories/design14_6.png",
  "./images/pfp-generator/accessories/design14_7.png",
  "./images/pfp-generator/accessories/design14_8.png",
  "./images/pfp-generator/accessories/design15.png",
  "./images/pfp-generator/accessories/design16.png",
  "./images/pfp-generator/accessories/design17.png",
  "./images/pfp-generator/accessories/design18_1.png",
  "./images/pfp-generator/accessories/design18_2.png",
  "./images/pfp-generator/accessories/design18_3.png",
  "./images/pfp-generator/accessories/design18_4.png",
  "./images/pfp-generator/accessories/design18_5.png",
  "./images/pfp-generator/accessories/design18_6.png",
  "./images/pfp-generator/accessories/design18_7.png",
  "./images/pfp-generator/accessories/design18_8.png",
  "./images/pfp-generator/accessories/design19_1.png",
  "./images/pfp-generator/accessories/design19_2.png",
  "./images/pfp-generator/accessories/design19_3.png",
  "./images/pfp-generator/accessories/design19_4.png",
  "./images/pfp-generator/accessories/design19_5.png",
  "./images/pfp-generator/accessories/design1_1.png",
  "./images/pfp-generator/accessories/design1_2.png",
  "./images/pfp-generator/accessories/design1_3.png",
  "./images/pfp-generator/accessories/design1_4.png",
  "./images/pfp-generator/accessories/design1_5.png",
  "./images/pfp-generator/accessories/design1_6.png",
  "./images/pfp-generator/accessories/design1_7.png",
  "./images/pfp-generator/accessories/design1_8.png",
  "./images/pfp-generator/accessories/design20_1.png",
  "./images/pfp-generator/accessories/design20_2.png",
  "./images/pfp-generator/accessories/design20_3.png",
  "./images/pfp-generator/accessories/design20_4.png",
  "./images/pfp-generator/accessories/design2_1.png",
  "./images/pfp-generator/accessories/design2_2.png",
  "./images/pfp-generator/accessories/design2_3.png",
  "./images/pfp-generator/accessories/design2_4.png",
  "./images/pfp-generator/accessories/design3_1.png",
  "./images/pfp-generator/accessories/design3_2.png",
  "./images/pfp-generator/accessories/design3_3.png",
  "./images/pfp-generator/accessories/design3_4.png",
  "./images/pfp-generator/accessories/design3_5.png",
  "./images/pfp-generator/accessories/design3_6.png",
  "./images/pfp-generator/accessories/design4.png",
  "./images/pfp-generator/accessories/design5.png",
  "./images/pfp-generator/accessories/design6_1.png",
  "./images/pfp-generator/accessories/design6_2.png",
  "./images/pfp-generator/accessories/design6_3.png",
  "./images/pfp-generator/accessories/design6_4.png",
  "./images/pfp-generator/accessories/design6_5.png",
  "./images/pfp-generator/accessories/design7.png",
  "./images/pfp-generator/accessories/design8.png",
  "./images/pfp-generator/accessories/design9_1.png",
  "./images/pfp-generator/accessories/design9_2.png",
  "./images/pfp-generator/accessories/design9_3.png",
  "./images/pfp-generator/accessories/design9_4.png",
  "./images/pfp-generator/accessories/design9_5.png",
  "./images/pfp-generator/accessories/design9_6.png",
];

function getRandomElement(array) {
  const num = Math.floor(Math.random() * array.length);
  const item = array[num];
  return {
    num,
    item,
  };
}

const pfpColor = document.getElementById("pfp-color");
const pfpEyes = document.getElementById("pfp-eyes");
const pfpAccessory = document.getElementById("pfp-accessory");

function randomizeBtn() {
  let result = getRandomElement(bodyColors);
  colorIndex = result.num;
  pfpColor.src = result.item;
  document.getElementById("color-choice").textContent = `Color ${colorIndex + 1}`;

  result = getRandomElement(eyes);
  eyesIndex = result.num;
  pfpEyes.src = result.item;
  document.getElementById("eyes-choice").textContent = `Eyes ${eyesIndex + 1}`;

  result = getRandomElement(accessories);
  accessoryIndex = result.num;
  pfpAccessory.src = result.item;
  document.getElementById("accessory-choice").textContent = `Accessory ${accessoryIndex + 1}`;
}

document.getElementById("download-pfp").addEventListener("click", async () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const container = document.querySelector(".generator-img-container");
  const images = container.querySelectorAll(".generator-img-el");
  const nameInput = document.getElementById("name-input");
  const nameText = nameInput.value || "";

  const firstImage = images[0];
  const imgWidth = 1000;
  const imgHeight = 1000;
  canvas.width = imgWidth;
  canvas.height = imgHeight;

  const bgImage = await loadImage(document.getElementById("pfp-bg").src);
  ctx.drawImage(bgImage, 0, 0, imgWidth, imgHeight);

  await document.fonts.ready;

  ctx.font = '120px "Vividly", Arial, sans-serif';
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  ctx.fillText(nameText, canvas.width / 2, imgHeight - 80);

  for (const img of images) {
    if (img.id !== "pfp-bg") {
      const loadedImg = await loadImage(img.src);
      ctx.drawImage(loadedImg, 0, 0, imgWidth, imgHeight);
    }
  }

  const link = document.createElement("a");
  link.download = "custom_fric.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

const generatorChoice = document.querySelectorAll(".generator-choice-arrow");

function changeChoice(e) {
  const target = e.target.textContent;
  const parent = e.target.parentElement;
  const text = parent.querySelector(".generator-choice-text").textContent;

  const options = {
    Color: { array: bodyColors, indexVar: "colorIndex", img: pfpColor },
    Eyes: { array: eyes, indexVar: "eyesIndex", img: pfpEyes },
    Accessory: { array: accessories, indexVar: "accessoryIndex", img: pfpAccessory },
  };

  for (const [key, { array, indexVar, img }] of Object.entries(options)) {
    if (text.includes(key)) {
      if (window[indexVar] === undefined) {
        window[indexVar] = 0;
      }

      if (target === "<") {
        window[indexVar] = (window[indexVar] - 1 + array.length) % array.length;
      } else if (target === ">") {
        window[indexVar] = (window[indexVar] + 1) % array.length;
      }

      img.src = array[window[indexVar]];
      parent.querySelector(".generator-choice-text").textContent = `${key} ${window[indexVar] + 1}`;

      break;
    }
  }
}

generatorChoice.forEach((e) => e.addEventListener("click", changeChoice));

function scrollToGenerator() {
  const generator = document.getElementById("generator");
  const position = generator.getBoundingClientRect().top + window.scrollY - 100;
  if (window.innerWidth <= 768) {
    toggleNav();
  }

  lenis.scrollTo(position);
}
