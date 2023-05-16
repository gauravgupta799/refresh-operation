const bodyEle1 = document.querySelector(".body");
const scrollProgress = document.querySelector(".progress");

const header = document.querySelector(".header");
const headerHome = document.querySelector(".header--home");
const hamburgerBtn = document.querySelector(".hamburger__wrapper");
const desktopMenu = document.querySelector(".desktop__menu");
const headeMobileWrapper = document.querySelector(".header-wrapper--mobile");
const closeIcon = document.querySelector(".btn-close");
const mobileNav = document.querySelectorAll(".mobile__navItem");
const inputBn = document.querySelectorAll('input[type="button"]');


const videoContainer = document.querySelector(".video__row")
const playBtn = document.querySelector(".playButton");
const playIcon = document.querySelector(".playBtn");
const pauseIcon = document.querySelector(".pauseBtn");
const videoRow = document.querySelector(".video__row");

const loader = document.getElementById("preloader");

const InputDiv = document.querySelectorAll(".input__div");

const videoId = "3kJCZTC1aaE";
const clr = "#4d148c";
// 3kJCZTC1aaE

window.addEventListener("load",()=>{
  loader.style.display = "none";
})

window.addEventListener('scroll', () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;

    if(window.scrollY > 20){
      header.classList.add("stickyHeader");
      headerHome.classList.add("stickyHeader")
    }else{
      header.classList.remove("stickyHeader")
    }
});

hamburgerBtn.addEventListener("click", () => {
    headeMobileWrapper.classList.add("active");
})

closeIcon.addEventListener("click", () => {
    headeMobileWrapper.classList.remove("active")
})

mobileNav.forEach(item=>{
    item.addEventListener("click",()=>{
        headeMobileWrapper.classList.remove("active");
    })
})

inputBn.forEach(item=>{
  item.addEventListener("click",()=>{
    item.classList.toggle('active');
  })
})

InputDiv.forEach((item)=>{
  item.addEventListener("focusin", ()=>{
    item.classList.add("isBorder");
  })
  item.addEventListener("focusout", ()=>{
    item.classList.remove("isBorder");
  })
})

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "100%",
    // width: "100%",
    videoId: videoId,
    playerVars: {
      playsinline: 1,
      autoplay: 0,
      controls: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}
// https://youtu.be/nR3ok_P2gzI

function onPlayerReady() {
  console.log(true);
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}

if(pauseIcon != null){
  playIcon.addEventListener('click', ()=> {
      videoRow.style.position = 'static';
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      player.playVideo();
      playBtn.style.animationPlayState = "paused";
      videoContainer.addEventListener("mouseover", ()=>{
        playBtn.style.opacity = 1
      })
      videoContainer.addEventListener("mouseleave", ()=>{
        playBtn.style.opacity = 0;
      })
  })
  pauseIcon.addEventListener('click',() => {
    videoRow.style.position = 'relative';
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    player.pauseVideo();
    playBtn.style.animationPlayState = "running";
  })
}


// animation fade in 
const fadeIn = gsap.utils.toArray(".animate-fade-in");
fadeIn.forEach((mainContent, i) => {
  const anim = gsap.fromTo(
    mainContent,
    { opacity: 0 },
    { duration: 1.2, opacity: 1, stagger: 0.5 }
  );
  ScrollTrigger.create({
    trigger: mainContent,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1.2,
    ease: Power4.easeOut,
  });
});

// animate fade in up
const textContainers = gsap.utils.toArray(".animate-fade-in-up");
textContainers.forEach((item, i) => {
  const anim = gsap.fromTo(
    item,
    { opacity: 0, y: "15%" },
    { duration: 1.2, opacity: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration:1.2,
    stagger:0.1,
    ease: Power4.easeOut,
  });
});


// card-fade-in-up
const cardContainers = gsap.utils.toArray(".card-animate");
cardContainers.forEach((item, i) => {
  const anim = gsap.fromTo(
    item,
    { opacity: 0, y: "10%" },
    { duration: 2, opacity: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 2,
    stagger:0.1,
    ease: Power4.easeOut,
  });
});

