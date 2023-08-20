const CourseList = document.getElementById("CoursesList");
let clk1 = 0;
CourseList.addEventListener("click", () => {
  if (clk1 == 0) {
    document.getElementById("coursebutton").style.transform = "rotate(0deg)";
    document.getElementById("coursebutton").style.margin = "0";
    clk1++;
  } else {
    clk1 = 0;
    document.getElementById("coursebutton").style.transform = "rotate(180deg)";
    document.getElementById("coursebutton").style.marginTop = "3px";
  }
});
let chk2;
const hamburgermenu = document.getElementById("hamburgermenu");
hamburgermenu.addEventListener("click", () => {
  for (let i = 0; i < document.querySelectorAll(".hide").length; i++) {
    document.querySelectorAll(".hide")[i].style.display = "none";
  }
  document.getElementById("hiddenmenu").style.display = "inline";
  chk2 = 1;
});

const hamburgercancel = document
  .getElementById("hamburgercancel")
  .addEventListener("click", () => {
    for (let i = 0; i < document.querySelectorAll(".hide").length; i++) {
      document.querySelectorAll(".hide")[i].style.display = "flex";
    }
    document.getElementById("hiddenmenu").style.display = "none";
    chk2 = 0;
  });
document.querySelector(".allcourse2").addEventListener("click", () => {
  document.querySelector(".secondlist").style.top = "-427px";
  document.querySelector(".secondlist").style.display = "grid";
  document.querySelector(".secondlist").style.animation =
    "hamburger 0.5s ease-in-out 1";
  setTimeout(() => {
    document.querySelector(".firstlist").style.display = "none";
    document.querySelector(".secondlist").style.top = "0px";
    document.querySelector(".secondlist").style.animation = "ham";
  }, 500);
});
document.querySelector("#secondlistcancle").addEventListener("click", () => {
  document.querySelector(".secondlist").style.animation =
    "hamburger 0.5s ease-in-out 1 reverse";
  setTimeout(() => {
    document.querySelector(".secondlist").style.display = "none";
    document.querySelector(".secondlist").style.animation = "ham";
  }, 450);
  document.querySelector(".secondlist").style.top = "-427px";
  document.querySelector(".firstlist").style.display = "grid";
});

let chk = matchMedia("(max-width:834px)");
setInterval(() => {
  if (chk.matches == false) {
    if (document.querySelectorAll(".hide")[0].style.display == "none") {
      for (let i = 0; i < document.querySelectorAll(".hide").length; i++) {
        document.querySelectorAll(".hide")[i].style.display = "flex";
      }
      document.getElementById("hiddenmenu").style.display = "none";
    }
  } else if (chk.matches && chk2 == 1) {
    for (let i = 0; i < document.querySelectorAll(".hide").length; i++) {
      document.querySelectorAll(".hide")[i].style.display = "none";
    }
    document.getElementById("hiddenmenu").style.display = "inline";
    chk2 = 1;
  }
}, 1);
const a = "AFFORDABLE";
const b = "RELIABLE";
const c = "VALUABLE";
let textTerm = 0;
let TextCount = 0;
const TextChange = document.getElementById("textChange");
let i = 0;
let abc = "";
let textAppear = (x) => {
  if (i <= x.length) {
    TextChange.innerText = abc;
    abc = a.slice(0, i);
    i++;
  } else {
    textTerm++;
  }
};
setInterval(() => {
  switch (textTerm) {
    case 0:
      if (i <= a.length) {
        TextChange.innerText = abc;
        abc = a.slice(0, i);
        i++;
      } else {
        textTerm++;
      }
      break;
    case 1:
      if (i > 0) {
        abc = abc.slice(0, i);
        TextChange.innerText = abc;
        i--;
      } else {
        textTerm++;
        abc = "";
        i = 0;
      }
      break;
    case 2:
      if (i <= b.length) {
        abc = b.slice(0, i);
        TextChange.innerText = abc;
        i++;
      } else {
        textTerm++;
      }
      break;
    case 3:
      if (i >= 0) {
        abc = abc.slice(0, i);
        TextChange.innerText = abc;
        i--;
      } else {
        textTerm++;
        abc = "";
        i = 0;
      }
      break;
    case 4:
      if (i <= c.length) {
        abc = c.slice(0, i);
        TextChange.innerText = abc;
        i++;
      } else {
        textTerm++;
      }
      break;
    case 5:
      if (i >= 0) {
        abc = abc.slice(0, i);
        TextChange.innerText = abc;
        i--;
      } else {
        textTerm = 0;
        abc = "";
        i = 0;
      }
      break;
  }
}, 150);
let CoursesSecondLists = document.querySelectorAll(".CoursesSecondLists");
let Coursesoptions = document.querySelectorAll(".Coursesoptions");
window.onload = () => {
  cousecolorChange();
  couselistChange();
  CoursesSecondLists[0].style.color = "#5a4bda";
  Coursesoptions[0].style.display = "flex";
  CoursesSecondLists[0].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
};
let cousecolorChange = () => {
  for (var j = 0; j < CoursesSecondLists.length; j++) {
    // Coursesoptions[j].style.display="none";
    CoursesSecondLists[j].style.color = "rgb(48, 46, 46)";
    CoursesSecondLists[j].style.boxShadow = " 0px 0px 0px 0px ";
  }
};
let couselistChange = () => {
  for (var j = 0; j < Coursesoptions.length; j++) {
    Coursesoptions[j].style.display = "none";
  }
};
CoursesSecondLists[0].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[0].style.display = "flex";
  CoursesSecondLists[0].style.color = "#5a4bda";
  CoursesSecondLists[0].style.boxShadow =
    " 0px 5px 50px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[1].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[1].style.display = "flex";
  CoursesSecondLists[1].style.color = "#5a4bda";

  CoursesSecondLists[1].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[2].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[2].style.display = "flex";
  CoursesSecondLists[2].style.color = "#5a4bda";
  CoursesSecondLists[2].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[3].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[3].style.display = "flex";
  CoursesSecondLists[3].style.color = "#5a4bda";
  CoursesSecondLists[3].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[4].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[4].style.display = "flex";
  CoursesSecondLists[4].style.color = "#5a4bda";
  CoursesSecondLists[4].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[5].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[5].style.display = "flex";
  CoursesSecondLists[5].style.color = "#5a4bda";
  CoursesSecondLists[5].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[6].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[6].style.display = "flex";
  CoursesSecondLists[6].style.color = "#5a4bda";
  CoursesSecondLists[6].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[7].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[7].style.display = "flex";
  CoursesSecondLists[7].style.color = "#5a4bda";
  CoursesSecondLists[7].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[8].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[8].style.display = "flex";
  CoursesSecondLists[8].style.color = "#5a4bda";
  CoursesSecondLists[8].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[9].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[9].style.display = "flex";
  CoursesSecondLists[9].style.color = "#5a4bda";
  CoursesSecondLists[9].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[10].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[10].style.display = "flex";
  CoursesSecondLists[10].style.color = "#5a4bda";
  CoursesSecondLists[10].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[11].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[11].style.display = "flex";
  CoursesSecondLists[11].style.color = "#5a4bda";
  CoursesSecondLists[11].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[12].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[12].style.display = "flex";
  CoursesSecondLists[12].style.color = "#5a4bda";
  CoursesSecondLists[12].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[13].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[13].style.display = "flex";
  CoursesSecondLists[13].style.color = "#5a4bda";
  CoursesSecondLists[13].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[14].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[14].style.display = "flex";
  CoursesSecondLists[14].style.color = "#5a4bda";
  CoursesSecondLists[14].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[15].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[15].style.display = "flex";
  CoursesSecondLists[15].style.color = "#5a4bda";
  CoursesSecondLists[15].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[16].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[16].style.display = "flex";
  CoursesSecondLists[16].style.color = "#5a4bda";
  CoursesSecondLists[16].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
CoursesSecondLists[17].addEventListener("click", () => {
  cousecolorChange();
  couselistChange();
  Coursesoptions[17].style.display = "flex";
  CoursesSecondLists[17].style.color = "#5a4bda";
  CoursesSecondLists[17].style.boxShadow =
    " 0px 5px 40px 10px rgb(207, 202, 202)";
});
x1 = 1;
x2 = 1000;
x3 = 1000;
x4 = 1;
setInterval(() => {
  if (x1<11) {
    document.querySelector(".countOne").innerText = x1 +" M+";
    x1++;
  }
}, 1000);
setInterval(() => {
  if (x2<3000) {
    document.querySelector(".countTwo").innerText = x2 +"+";
    x2++;
  }
  else{
    document.querySelector(".countTwo").innerText = "31300+";
  }
}, 1);
setInterval(() => {
  if (x3<2500) {
    document.querySelector(".countThree").innerText = x2 +"+";
    x3++;
  }
}, 1);
setInterval(() => {
  if (x4<9) {
    document.querySelector(".countfour").innerText = x4 +" L+";
    x4++;
  }
}, 1300);
setInterval(()=>{
  if(
    document.getElementById("LearnFromBestImg").src!="https://www.pw.live/version14/assets/img/website-banner-12.png"
  ){
    document.getElementById("LearnFromBestImg").src="https://www.pw.live/version14/assets/img/website-banner-12.png"
  }
 else{
  document.getElementById("LearnFromBestImg").src="https://www.pw.live/version14/assets/img/alakh-sir-web-launch.png"
 }
},2000)