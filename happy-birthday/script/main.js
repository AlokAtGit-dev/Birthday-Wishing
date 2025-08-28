// trigger to play music in the background with sweetalert
// window.addEventListener("load", () => {
//   Swal.fire({
//     title: "Do you want to play music in the background?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes",
//     cancelButtonText: "No",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       document.querySelector(".song").play();
//       animationTimeline();
//     } else {
//       animationTimeline();
//     }
//   });
// });

// window.addEventListener("load", () => {
//   Swal.fire({
//     title: "Do you want to play music in the background?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes",
//     cancelButtonText: "No",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       setTimeout(function() {
//         document.querySelector(".song").play();
//         animationTimeline();
//       }, 1000);
//     } else {
//       animationTimeline();
//     }
//   });
// });

// window.addEventListener("load", () => {
//   Swal.fire({
//     title: "Do you want to play music in the background?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes",
//     cancelButtonText: "No",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       const audio = document.querySelector(".song");
//       audio.volume = 0; // start with volume at 0
//       setTimeout(function() {
//         audio.play();
//         animationTimeline();
//         // animate volume to get louder slowly
//         let volume = 0;
//         const interval = setInterval(function() {
//           volume += 0.01;
//           audio.volume = volume;
//           if (volume >= 1) {
//             clearInterval(interval);
//           }
//         }, 100); // increase volume every 100ms
//       },1000);
//     } else {
//       animationTimeline();
//     }
//   });
// });

window.addEventListener("load", () => {
  Swal.fire({
    title: "Do you want to play music in the background?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const audio1 = document.querySelector(".song1");
      const audio2 = document.querySelector(".song2");

      audio1.volume = 0; // start with volume at 0
      audio1.play();
      animationTimeline();

      // animate volume to get louder slowly
      let volume = 0;
      const interval = setInterval(function() {
        volume += 0.01;
        audio1.volume = volume;
        if (volume >= 1) {
          clearInterval(interval);
        }
      }, 100); // increase volume every 100ms

      audio1.addEventListener("ended", function() {
        audio1.removeEventListener("ended", arguments.callee);
        audio2.play();
        audio2.volume = 0; // start with volume at 0
        // animate volume to get louder slowly
        let volume2 = 0;
        const interval2 = setInterval(function() {
          volume2 += 0.01;
          audio2.volume = volume2;
          if (volume2 >= 1) {
            clearInterval(interval2);
          }
        }, 100); // increase volume every 100ms

        audio2.addEventListener("ended", function() {
          audio2.removeEventListener("ended", arguments.callee);
          audio1.play();
          audio1.volume = 0; // start with volume at 0
          // animate volume to get louder slowly
          let volume = 0;
          const interval = setInterval(function() {
            volume += 0.01;
            audio1.volume = volume;
            if (volume >= 1) {
              clearInterval(interval);
            }
          }, 100); // increase volume every 100ms
        });
      });
    } else {
      animationTimeline();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dayElement = document.getElementById("day");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");
  const ageElement = document.getElementById("age");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const targetDay = 30;
  const targetMonthIndex = 7; // December
  const targetYear = 2025;
  const birthYear = 2001;

  let currentDay = 15;
  let currentMonthIndex = 0;
  let currentYear = birthYear;
  let currentAge = 0;

  const interval = setInterval(() => {
    // Update day, month, year, and age in the DOM
    dayElement.textContent = currentDay;
    monthElement.textContent = months[currentMonthIndex];
    yearElement.textContent = currentYear;
    ageElement.textContent = currentAge;

    // Smoothly increment day, month, year, and age
    if (currentDay < targetDay) {
      currentDay++;
    } else if (currentMonthIndex < targetMonthIndex) {
      currentDay = targetDay; // Fix day
      currentMonthIndex++;
    } else if (currentYear < targetYear) {
      currentMonthIndex = targetMonthIndex; // Fix month
      currentYear++;
      currentAge++;
    } else {
      // Stop animation when target is reached
      clearInterval(interval);
    }
  }, 250); // Smoother speed adjustment
});

// animation timeline
const animationTimeline = () => {
  // split chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  // timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.9, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.9, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      1.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(
      ".fake-btn",
      0.1,
      {
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4"
    )
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1.5"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".profile-picture",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

    
  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};
