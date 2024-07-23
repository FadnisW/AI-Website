function navAnimation() {
  const nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    const tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "25vh",
    })
      .to(
        ".nav-part2 h5",
        {
          display: "block",
        },
        "<"
      ) // Start at the same time as the previous animation
      .from(
        ".nav-part2 h5 span",
        {
          y: 25,
          stagger: { amount: 0.3 },
        },
        "<"
      ); // Start at the same time as the previous animation
  });

  nav.addEventListener("mouseleave", () => {
    const tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: { amount: 0.1 },
    })
      .to(
        ".nav-part2 h5",
        {
          display: "none",
          duration: 0.1,
        },
        "<"
      ) // Start at the same time as the previous animation
      .to(
        "#nav-bottom",
        {
          height: 0,
          duration: 0.1,
        },
        "<"
      ); // Start at the same time as the previous animation
  });
}
//This is a more simplified alternative of the above code
// function navAnimation() {
//   let nav = document.querySelector("nav");

//   nav.addEventListener("mouseenter", function () {
//     let tl = gsap.timeline();
//     tl.to("#nav-bottom", {
//       height: "25vh",
//     });
//     tl.to(".nav-part2 h5", {
//       display: "block",
//     });
//     tl.from(".nav-part2 h5 span", {
//       y: 25,
//       Stagger: { amount: 0.3 },
//     });
//   });
//   nav.addEventListener("mouseleave", function () {
//     let tl = gsap.timeline();
//     tl.to(".nav-part2 h5 span", {
//       y: 25,
//       Stagger: { amount: 0.1 },
//     });
//     tl.to("nav-part2 h5", {
//       display: "none",
//       duration: 0.1,
//     });
//     tl.to("#nav-bottom", {
//       height: 0,
//       duration: 0.1,
//     });
//   });
// }
function page2Animation() {
  const right_elems = document.querySelectorAll(".right-elem");

  right_elems.forEach((elem) => {
    const targetElem = elem.childNodes[3];
    let animationFrame;

    elem.addEventListener("mouseenter", () => {
      gsap.to(targetElem, {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(targetElem, {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", (dets) => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const { x, y } = dets;
        const rect = elem.getBoundingClientRect();
        gsap.to(targetElem, {
          x: x - rect.x - 50,
          y: y - rect.y - 140,
        });
      });
    });
  });
  //This is a more simplified alternative of the code above
  // function page2Animation() {
  //   let right_elems = document.querySelectorAll(".right-elem");

  //   right_elems.forEach(function (elem) {
  //     elem.addEventListener("mouseenter", function () {
  //       gsap.to(elem.childNodes[3], {
  //         opacity: 1,
  //         scale: 1,
  //       });
  //     });
  //     elem.addEventListener("mouseleave", function () {
  //       gsap.to(elem.childNodes[3], {
  //         opacity: 0,
  //         scale: 0,
  //       });
  //     });
  //     elem.addEventListener("mousemove", function (dets) {
  //       gsap.to(elem.childNodes[3], {
  //         x: dets.x - elem.getBoundingClientRect().x - 50,
  //         y: dets.y - elem.getBoundingClientRect().y - 140,
  //       });
  //     });
  //   });
  // }
}

function page3VideoAnimation() {
  const page3Center = document.querySelector(".page3-center");
  const video = document.querySelector("#page3 video");
  page3Center.addEventListener("click", () => {
    video.play();
    const tl = gsap.timeline();
    tl.to(video, {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", () => {
    video.pause();
    const tl = gsap.timeline();
    tl.to(video, {
      scaleX: 0.7,
      scaleY: 0,
      opacity: 0,
      borderRadius: "30px",
    });
  });
}
//this is a more simplified version of the above code
//   let Page3Center = document.querySelector(".page3-center");
//   let Video = document.querySelector("#page3 video");
//   Page3Center.addEventListener("click", function () {
//     Video.play();
//     gsap.to(Video, {
//       transform: "scaleX(1) scaleY(1)",
//       opacity: 1,
//       borderRadius: 0,
//     });
//   });
//   Video.addEventListener("click", function () {
//     Video.pause();
//     gsap.to(Video, {
//       transform: "scaleX(0.7) scaleY(0)",
//       opacity: 0,
//       borderRadius: "30px",
//     });
//   });

navAnimation();
page2Animation();
page3VideoAnimation();
