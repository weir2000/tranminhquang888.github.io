/*
@ Resouces by ThanhDieu.Com
@ Designer V4.0.1
*/
var embeddedHTML = `
<button onclick="__Yamate__();" id="settingstheme" class="theme-button">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-opacity="0"><path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><animate id="lineMdMoonLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonLoop0.begin+6s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+2.2s" dur="0.4s" values="1;0"/></path><path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+3s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+5.2s" dur="0.4s" values="1;0"/></path><path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+0.4s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+2.8s" dur="0.4s" values="1;0"/></path><path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+3.4s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+5.6s" dur="0.4s" values="1;0"/></path></g><path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"/></path></svg>
</button>  
<audio style="display: none;" id="__kudasai__"><source src="//thanhdieu.com/files/ya.mp3" type="audio/mpeg"></audio>
<header>
  <div class="Container">
  <div id="td_Title">
    <h1 class="td_Color Marque">
    QUANGDEPZAI
    </h1>
  </div>
  <nav>
    <ul>
    <li class="td_Activate"><a href="?minhquang=cocaiconcac">Home</a></li>
    <li><a href="download/">Download</a></li>
    <li><a href="team/">About</a></li>
    <li><a class="td_Fps"><span id="fps">60</span> FPS </a></li>
    </ul>
  </nav>
  </div>
</header>
<div class="LoaderCover">
<div class="Loader">
  <div class="lds-ripple"><div></div><div></div></div>
<br/>
  <br/>
    <br/>
      <br/>
        <br/>
          <br/>
          <br/>  
        <br/>
      <br/>
    <br/>
  <br/>
<br/>
<h2 class="NameFtThanhDieu">Loading...🐬</h2>
  </div>
</div>
<div class="ThanhDieuMain">
  <img class="Avatar" src="//imgur.com/nQRJOon.jpg" width="120" height="120" alt="ThanhDieuTV">
  <h2 class="HoVaTen__">
  <div id="userName">Trần Minh Quang
  <img class="TichXanh__" src="./thanhdieuft-data/img/tick-hong.gif">
  </div>
 </h2>
</div>
<h2 class="TieuSu GioiThieu"></h2>
<div class="NgayTao__">
<strong class="InfoYou__">Current Time:</strong>
<u class="DateCreater__" id="today"></u>
</div>
<hr class="ThanhGachNgang">
<div class="MangXaHoiFtThanhDieu" id="ThanhDieuFtCredits">
  <u class="NameFtThanhDieu">- Social Network -</u><br>
  <br>
  <a id="Facebook" onclick="Facebook()">
    <div class="Facebook">
      <i class="bi bi-facebook">&nbsp; </i>Facebook (507K+)
    </div>
  </a>
  <br>
  <a id="Youtube" onclick="Youtube()">
    <div class="Youtube">
      <i class="bi bi-youtube">&nbsp; </i>Youtube (3K+)
    </div>
  </a>
  <br>
  <a id="Discord" onclick="Discord()">
    <div class="Discord">
      <i class="bi bi-discord">&nbsp; </i>Discord (800+)
    </div>
  </a>
  <br>
  <a id="Instagram" onclick="Instagram()">
    <div class="Instagram">
      <i class="bi bi-instagram">&nbsp; </i>Instagram (7+)
    </div>
  </a>
  <hr class="ThanhGachNgang">
 </div>
 <section id="skills">
  <div class="NameFtThanhDieu">
    <div class="row">
      <skills class="col-12">
        <u class="NameFtThanhDieu">- Skill Language -<br>
        </u>
    </skills></div>
  </div>
  <div class="col-lg-6 col-12">
    <div class="skill-box">
      <div class="skill">
        <div class="skill-name">HTML/CSS</div>
        <div class="skill-bar">
          <div class="skill-per color_html__" per="70%" style="width: 70%;"></div>
        </div>
      </div>
      <div class="skill">
        <div class="skill-name">PHP</div>
        <div class="skill-bar">
          <div class="skill-per color_php__" per="10%" style="width: 10%;"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-6 col-12">
    <div class="skill-box">
      <div class="skill">
        <div class="skill-name">JAVASCRIPT</div>
        <div class="skill-bar">
          <div class="skill-per color_javascript__" per="28%" style="width: 28%;"></div>
        </div>
      </div>
      <div class="skill">
        <div class="skill-name">PYTHON</div>
        <div class="skill-bar">
          <div class="skill-per color_python__" per="70%" style="width: 70%;"></div>
        </div>
      </div>
    </div>
</div>
<hr class="ThanhGachNgang">
<u class="NameFtThanhDieu">- About Me -</u>
</section>
<div class="XuongDong__">&nbsp;</div>
<div class="ThongTinThanhToan">
    <p class="ThongTinThanhToanTitle">— MOMO —</p>
    <p class="ThongTinThanhToanText">=> STK: 0329684637 <=<br>=> CTK: TRAN MINH QUANG <=</p>
    </div>
    <div class="XuongDong__">&nbsp;</div>
<div class="ThongTinThanhToan">
    <p class="ThongTinThanhToanTitle">— Momo Payment —</p>
    <p class="ThongTinThanhToanText">=> STK: 0329684637 <=<br>=> CTK: TRAN MINH QUANG <=</</p>
    </div>
<hr class="ThanhGachNgang">
<div class="XuongDong__">&nbsp;</div>
<div class="XuongDong__">&nbsp;</div>
<footer class="ChanTrang__">
<p class="ThanhDieuFtCopyright">
  <span class="copyright">Created by
    <a href="//facebook.com/100035052735014" style="text-decoration: none;"><u style="color: aliceblue;">MinhQuang ♡</u></a><br>
    <strong>All rights reserved - © 2023</strong></span>
</p>
</footer>
<div id="Toast">Resources Code V5.0.1</div>
`;
var appDiv = document.getElementById("app");
appDiv.innerHTML = embeddedHTML;
/*const DevScript = document.createElement('script');
DevScript.setAttribute('disable-devtool-auto', '');
DevScript.src = '';
document.body.appendChild(DevScript);*/
(function() {
  function shuffleElements(elements) {
    var parent = elements[0].parentNode;
    var frag = document.createDocumentFragment();
    while (elements.length) {
      frag.appendChild(elements[Math.floor(Math.random() * elements.length)]);
    }
    parent.appendChild(frag);
  }
})();
(function() {
  function showToastLoop() {
    alert("Vui lòng không sử dụng source bị cracked !");
    setTimeout(showToastLoop, 3000);
  }

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./thanhdieuft-data/css/index.css", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var styleTag = document.createElement("style");
      styleTag.textContent = xhr.responseText;
      document.head.appendChild(styleTag);

      if (document.querySelectorAll(".ThanhDieuDepTrai__").length === 0) {
        showToastLoop();
        styleTag.textContent = "";
      }
    }
  };
  xhr.send();
})();


// CHECK NAME OWNER
var __Owner__ = ["Trần Minh Quang"];
var __LinkThanhDieu__ = ["https://chat.vuaclmm.online/"];
var __OwnerFound__ = false;
var __DomainOwner__ = "VUACLMM.ONLINE";
for (var i = 0; i < __Owner__.length; i++) {
    var __OwnerThanhDieu_ = __Owner__[i];
    var nameElements = document.querySelectorAll(".HoVaTen__");
    for (var j = 0; j < nameElements.length; j++) {
        var userNameDiv = nameElements[j].querySelector("#userName");
        if (userNameDiv) {
            var userName = userNameDiv.textContent.trim();
            
            if (userName === __OwnerThanhDieu_) {
                __OwnerFound__ = true;
                break; 
            }
        }
    }
    if (!__OwnerFound__) {
      alert("Vui lòng không chỉnh sửa tên tác giả, mã lỗi 0x000002 @TranMinhQuang");
        window.location = __LinkThanhDieu__;
    }
    
    __OwnerFound__ = false;
}
// NHÚNG THƯ VIỆN JS
var script = document.createElement("script");
script.src = "//cdn.jsdelivr.net/npm/sweetalert2@9";
//script.onload = function() {ThanhDieuDieuAudio();};
document.head.appendChild(script);
var style = document.createElement("style");
style.innerHTML = `
.rainbow {
  animation: rainbow 1s linear infinite;
}


.blink-title {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
var x = document.getElementById("__kudasai__");
var playCount = 0;
x.addEventListener('ended', function() {
  playCount++;
  if (playCount < 1) {
      x.currentTime = 0;
      x.play();
  }
});

// YAMATE KUDASAI ~
function __Yamate__() {
  playCount = 0;
  x.currentTime = 0; 
  x.play();
}
// MUSIC PLAY
const ThanhDieu_List = [
  "//files.catbox.moe/whzi6p.mp3",
  "//files.catbox.moe/qkhtzv.mp3", 
  "//files.catbox.moe/8farwo.mp3",
  "https://files.catbox.moe/igzool.mp3",
  "https://files.catbox.moe/g27van.mp3",
  "https://files.catbox.moe/5zbss6.mp3",
  "https://files.catbox.moe/3tmnme.mp3",
];
//Random music
let index = Math.floor(Math.random() * ThanhDieu_List.length);
const audio = new Audio(ThanhDieu_List[index]);
function ThanhDieuAudio() {
  audio.play();
}
document.addEventListener("click", ThanhDieuAudio);
audio.addEventListener("ended", function() {
  index = (index + 1) % ThanhDieu_List.length;
  audio.src = ThanhDieu_List[index];
  audio.play();
});
function HomeThanhDieu() {
  Swal.fire({
    title: '<span class="blink-title">𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 !</span>',
    html: '<span class="rainbow-text">=>>🐬Nice !! You Gay =))🐬<<=</span>',
    showConfirmButton: false,
    onBeforeOpen: () => {
      const content = Swal.getContent();
      const element = content.querySelector('.rainbow-text');
      const text = element.innerText;
      const letters = text.split('');
      element.innerHTML = '';
  
      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${i * 50}ms`;
        span.classList.add('rainbow');
        element.appendChild(span);
      });
    }
  });
  
}
// SKILL LANGUAGE
   $('.skill-per').each(function() {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({
      animatedValue: 0
    }).animate({
      animatedValue: per
    }, {
      duration: 10000,
      step: function() {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function() {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });
  
function __tdonload() {
ShowToast(); 
HomeThanhDieu();
CheckFps();
ThanhDieuAudio();
}
function ThemeChangeDone() {
/*
@ ThanhDieuVersion 4.0.0
*/
}
// CHECK FPS
var fps = document.getElementById("fps");
var startTime = Date.now();
var frame = 0;
function CheckFps() {
var time = Date.now();
frame++;
if (time - startTime > 1000) {
fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
startTime = time;
frame = 0;
}
window.requestAnimationFrame(CheckFps);
}
// TIEU SU TYPE TEXT
let typed = new Typed(".GioiThieu", {
strings: ["Hi my name is MinhQuang","Hey brother, I'm a Coder.", "I like website design =]]"],
typeSpeed: 95,
backSpeed: 75,
loop: true
})
// SOCIAL NETWORK
function ThanhDieuLinkSocial(link) {
    setTimeout(function() {
      var newTab = window.open(link, '_blank');
      newTab.focus();
    }, 1900);
    toastr.success("Thank you for caring me :>", "Notification !");
  }
  function Facebook() {
    ThanhDieuLinkSocial('https://tranminhquang888.github.io/');
  }
  
  function Youtube() {
    ThanhDieuLinkSocial('https://tranminhquang888.github.io/');
  }
  
  function Discord() {
    ThanhDieuLinkSocial('https://tranminhquang888.github.io/');
  }
  
  function Instagram() {
    ThanhDieuLinkSocial('https://tranminhquang888.github.io/');
  }
  // TOAST SHOW
  function ShowToast() {
	var x = document.getElementById("Toast");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
  }
  // LOADER SCREEN
  let spin = document.querySelector('.LoaderCover');
window.addEventListener('load', () => {
  spin.classList.add('HideLoader');
  setTimeout(() => {
    spin.remove();
  }, 1200);
});
function updateTime() {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'Asia/Ho_Chi_Minh'
  };

  const timeString = now.toLocaleString('en-US', options);
  const hours = now.getHours();

  let timeOfDay = '';
  if (hours >= 5 && hours < 12) {
    timeOfDay = 'Buổi Sáng 🌞';
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = 'Buổi Chiều 🌒';
  } else {
    timeOfDay = 'Buổi Tối 🌚';
  }

  document.getElementById('today').textContent = `${timeString} ${timeOfDay}`;
}

setInterval(updateTime, 1000);
