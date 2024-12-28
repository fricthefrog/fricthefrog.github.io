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
