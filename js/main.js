//navbar style
var nav = document.getElementById("navbar-scrollSpy");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > this.window.outerHeight / 2) {
    nav.classList.add("custom-nav-bg");
  } else {
    nav.classList.remove("custom-nav-bg");
  }
  console.log();
});

//CounterUp
var teamMembers = document.getElementById("counter-team");
var completeProjects = document.getElementById("complete-rojects");
var filesDownloaded = document.getElementById("files-downloaded");
var linesOfCode = document.getElementById("lines");
var isScrolledBefore = false;
function CounterUp(counter,number,time) {
    let CounterNumber = 0;
    if (counter.getBoundingClientRect().y < 600) {
        let interval = this.setInterval(function () {
            counter.innerHTML = CounterNumber++;
          if (CounterNumber > number) {
              this.clearInterval(interval);
            }
        }, time);
        isScrolledBefore = true;
      }
}
window.addEventListener("scroll", function () {
  if (isScrolledBefore == false) {
    CounterUp(teamMembers,54,1000/54);
    CounterUp(completeProjects,25,1000/25);
    CounterUp(filesDownloaded,70,1000/70);
    CounterUp(linesOfCode,600,.5);
  }
});

//type.js
var typing = new Typed(".home-desc-change", {
  strings: [
    "&nbsp;Designer",
    "&nbsp;Developer ",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});
