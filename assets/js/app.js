/* Template Name: Techwind - Multipurpose Tailwind CSS Landing Page Template
   Author: Shreethemes
   Email: support@shreethemes.in
   Website: https://shreethemes.in
   Version: 1.8.0
   Created: May 2022
   File Description: Main JS file of the template
*/


/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Loader               *
 *     02.  Toggle Menus         *
 *     03.  Menu Active          *
 *     04.  Clickable Menu       *
 *     05.  Menu Sticky          *
 *     06.  Back to top          *
 *     07.  Active Sidebar       *
 *     08.  Feather icon         *
 *     09.  Small Menu           *
 *     10.  Wow Animation JS     *
 *     11.  Contact us           *
 *     12.  Dark & Light Mode    *
 *     13.  LTR & RTL Mode       *
 ================================*/


window.addEventListener('load', fn, false)

//  window.onload = function loader() {
function fn() {
    // Preloader
    if (document.getElementById('preloader')) {
        setTimeout(() => {
            document.getElementById('preloader').style.visibility = 'hidden';
            document.getElementById('preloader').style.opacity = '0';
        }, 350);
    }
    // Menus
    activateMenu();
}

//Menu
/*********************/
/* Toggle Menu */
/*********************/
function toggleMenu() {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
        isOpen.style.display = "none";
    } else {
        isOpen.style.display = "block";
    }
};
/*********************/
/*    Menu Active    */
/*********************/
function getClosest(elem, selector) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;

};

function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

        var matchingMenuItem = null;
        for (var idx = 0; idx < menuItems.length; idx++) {
            if (menuItems[idx].href === window.location.href) {
                matchingMenuItem = menuItems[idx];
            }
        }

        if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
         
         
            var immediateParent = getClosest(matchingMenuItem, 'li');
      
            if (immediateParent) {
                immediateParent.classList.add('active');
            }
            
            var parent = getClosest(immediateParent, '.child-menu-item');
            if(parent){
                parent.classList.add('active');
            }

            var parent = getClosest(parent || immediateParent , '.parent-menu-item');
        
            if (parent) {
                parent.classList.add('active');

                var parentMenuitem = parent.querySelector('.menu-item');
                if (parentMenuitem) {
                    parentMenuitem.classList.add('active');
                }

                var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            } else {
                var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            }
        }
    }
}
/*********************/
/*  Clickable manu   */
/*********************/
if (document.getElementById("navigation")) {
    var elements = document.getElementById("navigation").getElementsByTagName("a");
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].onclick = function (elem) {
            if (elem.target.getAttribute("href") === "javascript:void(0)") {
                var submenu = elem.target.nextElementSibling.nextElementSibling;
                submenu.classList.toggle('open');
            }
        }
    }
}
/*********************/
/*   Menu Sticky     */
/*********************/
function windowScroll() {
    const navbar = document.getElementById("topnav");
    if (navbar != null) {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})
/*********************/
/*    Back To TOp    */
/*********************/

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var mybutton = document.getElementById("back-to-top");
    if(mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.classList.add("block");
            mybutton.classList.remove("hidden");
        } else {
            mybutton.classList.add("hidden");
            mybutton.classList.remove("block");
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*********************/
/*  Active Sidebar   */
/*********************/
(function () {
    var current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);;
    if (current === "") return;
    var menuItems = document.querySelectorAll('.sidebar-nav a');
    for (var i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
            menuItems[i].parentElement.className += " active";
        }
    }
})();

/*********************/
/*   Feather Icons   */
/*********************/
feather.replace();

/*********************/
/*     Small Menu    */
/*********************/
try {
    var spy = new Gumshoe('#navmenu-nav a');
} catch (err) {

}

/*********************/
/*      WoW Js       */
/*********************/
try {
    new WOW().init();
} catch (error) {
    
}

/*************************/
/*      Contact Js       */
/*************************/

try {
    function validateForm() {
        var name = document.forms["myForm"]["name"].value;
        var email = document.forms["myForm"]["email"].value;
        var subject = document.forms["myForm"]["subject"].value;
        var comments = document.forms["myForm"]["comments"].value;
        document.getElementById("error-msg").style.opacity = 0;
        document.getElementById('error-msg').innerHTML = "";
        if (name == "" || name == null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
            fadeIn();
            return false;
        }
        if (email == "" || email == null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
            fadeIn();
            return false;
        }
        if (subject == "" || subject == null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
            fadeIn();
            return false;
        }
        if (comments == "" || comments == null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
            fadeIn();
            return false;
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("simple-msg").innerHTML = this.responseText;
                document.forms["myForm"]["name"].value = "";
                document.forms["myForm"]["email"].value = "";
                document.forms["myForm"]["subject"].value = "";
                document.forms["myForm"]["comments"].value = "";
            }
        };
        xhttp.open("POST", "php/contact.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("name=" + name + "&email=" + email + "&subject=" + subject + "&comments=" + comments);
        return false;
    }

    function fadeIn() {
        var fade = document.getElementById("error-msg");
        var opacity = 0;
        var intervalID = setInterval(function () {
            if (opacity < 1) {
                opacity = opacity + 0.5
                fade.style.opacity = opacity;
            } else {
                clearInterval(intervalID);
            }
        }, 200);
    }
} catch (error) {
    
}


/*********************/
/* Dark & Light Mode */
/*********************/
try {
    function changeTheme(e){
        e.preventDefault()
        const htmlTag = document.getElementsByTagName("html")[0]
        
        if (htmlTag.className.includes("dark")) {
            htmlTag.className = 'light'
        } else {
            htmlTag.className = 'dark'
        }
    }

    const switcher = document.getElementById("theme-mode")
    switcher?.addEventListener("click" ,changeTheme )
    
    const chk = document.getElementById('chk');

    chk.addEventListener('change',changeTheme);
} catch (err) {
    
}


/*********************/
/* LTR & RTL Mode */
/*********************/
try{
    const htmlTag = document.getElementsByTagName("html")[0]
    function changeLayout(e){
        e.preventDefault()
        const switcherRtl = document.getElementById("switchRtl")
        if(switcherRtl.innerText === "LTR"){
            htmlTag.dir = "ltr"
        }
        else{
            htmlTag.dir = "rtl"
        }
        
    }
    const switcherRtl = document.getElementById("switchRtl")
    switcherRtl?.addEventListener("click" ,changeLayout )
}
catch(err){}
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circleRadius = Math.min(canvas.width, canvas.height) / 3;
const numBalls = 250;  // Increase number of balls
const maxBallRadius = 5;  // Smaller balls
const ballSpeed = 3;  // Faster speed
const mouse = { x: canvas.width / 2, y: canvas.height / 2, isHovering: false, isInsideCircle: false };

const balls = [];

class Ball {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * maxBallRadius + 1;
    this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
    this.vx = Math.random() * ballSpeed - ballSpeed / 2;
    this.vy = Math.random() * ballSpeed - ballSpeed / 2;
  }

  update() {
    // Ball bounce logic within the circular boundary
    const dx = this.x - canvas.width / 2;
    const dy = this.y - canvas.height / 2;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > circleRadius - this.radius) {
      const angle = Math.atan2(dy, dx);
      this.vx = -Math.cos(angle) * ballSpeed;
      this.vy = -Math.sin(angle) * ballSpeed;
    }

    // Flocking effect only if mouse is inside the circle
    if (mouse.isInsideCircle) {
      const mouseDx = mouse.x - this.x;
      const mouseDy = mouse.y - this.y;
      const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
      const attractionForce = Math.min(3 / mouseDistance, 0.1); // Flocking force
      
      // Move balls towards mouse, creating a flocking effect
      this.vx += mouseDx * attractionForce;
      this.vy += mouseDy * attractionForce;

      // Slightly slow down the ball near the mouse
      this.vx *= 0.96;
      this.vy *= 0.96;
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

function initBalls() {
  for (let i = 0; i < numBalls; i++) {
    balls.push(new Ball());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the circle boundary
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, circleRadius, 0, Math.PI * 2);
  const isDarkMode = document.documentElement.classList.contains('dark');
  ctx.strokeStyle = isDarkMode ? 'rgb(15 23 42)' : 'white'; // Change colors as needed
  ctx.stroke();
  ctx.closePath();

  // Update and draw each ball
  balls.forEach(ball => {
    ball.update();
    ball.draw();
  });

  requestAnimationFrame(animate);
}

// Track mouse position and hover state


window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initBalls();  // Reinitialize balls after resizing
});

initBalls();
animate();

document.getElementById("langToggle").addEventListener("change", function () {
    if (!this.checked) {
        changeLanguage("en"); // Cambiar a inglés
    } else {
        changeLanguage("es"); // Cambiar a español
    }
});



function changeLanguage(lang) {
    console.log("Cambiando a idioma:", lang);
    document.getElementById('SubES').style.display = 'none';
    document.getElementById('SubEN').style.display = 'none';

    // Mostrar el párrafo correspondiente según el idioma
    if (lang === 'es') {
        document.getElementById('SubES').style.display = 'block';
    } else if (lang === 'en') {
        document.getElementById('SubEN').style.display = 'block';
    }


    if (lang === "es") {
        document.getElementById("menuES").style.display = "block";
        document.getElementById("menuEN").style.display = "none";

        document.getElementById("contactES").style.display = "inline-block";
        document.getElementById("contactEN").style.display = "none";

        document.getElementById("content2ES").style.display = "block";
        document.getElementById("content2EN").style.display = "none";

        document.getElementById("otimiES").style.display = "block";
        document.getElementById("otimiEN").style.display = "none";

        document.getElementById("contactUSES").style.display = "inline-block";
        document.getElementById("contactUSUS").style.display = "none";
        
        document.getElementById("contact2USES").style.display = "inline-block";
        document.getElementById("contact2USUS").style.display = "none";

        document.getElementById("contact3USES").style.display = "inline-block";
        document.getElementById("contact3USUS").style.display = "none";
        
        document.getElementById("contact4USES").style.display = "inline-block";
        document.getElementById("contact4USEN").style.display = "none";
        document.getElementById("IntegraES").style.display = "block";
        document.getElementById("IntegraUS").style.display = "none";

        document.getElementById("ImpulsaES").style.display = "block";
        document.getElementById("ImpulsaEN").style.display = "none";

        document.getElementById("submenuEs").style.display = "block";
        document.getElementById("submenuEn").style.display = "none";
        

    } else {
        document.getElementById("menuES").style.display = "none";
        document.getElementById("menuEN").style.display = "block"; 
          document.getElementById("contactES").style.display = "none";
        document.getElementById("contactEN").style.display = "inline-block";

        document.getElementById("content2ES").style.display = "none";
        document.getElementById("content2EN").style.display = "block";

        document.getElementById("otimiES").style.display = "none";
        document.getElementById("otimiEN").style.display = "block";

        document.getElementById("contactUSES").style.display = "none";
        document.getElementById("contactUSUS").style.display = "inline-block";

        document.getElementById("contact2USES").style.display = "none";
        document.getElementById("contact2USUS").style.display = "inline-block";


        document.getElementById("contact3USES").style.display = "none";
        document.getElementById("contact3USUS").style.display = "inline-block";

        document.getElementById("contact4USES").style.display = "none";
        document.getElementById("contact4USEN").style.display = "inline-block";
        document.getElementById("IntegraES").style.display = "none";
        document.getElementById("IntegraUS").style.display = "block";


        document.getElementById("ImpulsaES").style.display = "none";
        document.getElementById("ImpulsaEN").style.display = "block";

        document.getElementById("submenuEs").style.display = "none";
        document.getElementById("submenuEn").style.display = "block";
        

    }

   

    // Verifica que el idioma esté disponible en el objeto de traducciones
    if (translations[lang]) {
        // Obtiene todos los elementos con el atributo data-translate
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(element => {
            // Obtiene el valor del atributo data-translate
            const key = element.getAttribute('data-translate');

            // Si la clave existe en las traducciones, actualiza el contenido del elemento
            if (translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });
    } else {
        console.error("Idioma no disponible:", lang);
    }
}



  // Llamar a la función con el idioma deseado (por ejemplo, "es" o "en")
  changeLanguage("es");