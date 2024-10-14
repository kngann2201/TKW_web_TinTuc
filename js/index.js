window.onload = function () {
    //---------- GO TO TOP --------------------------------------------------------------------//
    let goTop =document.getElementById("gotoTop")
    goTop.onclick = function() {
        //cuộn trang đến một phần tử cụ thể mượt hơn
        document.documentElement.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

//---------- RESPONSIVE THANHMENU -----------------------------------------------------------//
    
    const sidebarMenu = document.getElementById('sidebarMenu');
    let btn = document.querySelector("#menuBtn")
    btn.addEventListener('click', function() {
        sidebarMenu.classList.toggle('show');
    });
    let closemenu = document.getElementById("closeMenu")
    closemenu.onclick = function () {
        sidebarMenu.classList.remove("show");
    } 

//---------- TIN NOI BAT -----------------------------------------------------------//
    let listImg = document.querySelector(".listImg")
    let imageGT = document.querySelectorAll(".gallery .image")
    let gallery = document.querySelector(".gallery")
    var current = 0;
    var w = gallery.offsetWidth;
    console.log(w);
    const changeImg = function() {
        if (current == imageGT.length-1) {
            listImg.style.transition = 'transform 0s';
            listImg.style.transform = `translateX(${0}px)`;
            current = 0; 
        }
        else {
            current++;
            listImg.style.transform = `translateX(${-w * current}px)`;
        }
    }
    let clear = setInterval(() => { changeImg()}, 2500);
    let prev = document.querySelector(".btnGT .prev")
    let next = document.querySelector(".btnGT .next")
        prev.onclick = function() {
            clearInterval(clear);
            if (current == 0) {
                current = imageGT.length-1; 
                listImg.style.transition = 'transform 0s';
                listImg.style.transform = `translateX(${-w * current}px)`;
            }
            else {
                current--;
                listImg.style.transform = `translateX(${-w * current}px)`;
            }
            clear = setInterval(() => { changeImg()}, 2500); 
        }
        next.onclick = function() {
            clearInterval(clear);
            changeImg();
            clear = setInterval(() => { changeImg()}, 2500);
        }

//---------- HIEN FULL BAI -----------------------------------------------------------//
    let newsItems = document.querySelectorAll('.newsItem a');
    let fullArticleSection = document.getElementById('fullArticle');
    let articleTitle = document.getElementById('articleTitle');
    let articleImg = document.getElementById('articleImg');
    let articleText = document.getElementById('articleText');
    let closeArticleBtn = document.getElementById('closeArticle');
    newsItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            let title = item.querySelector('h3').innerText;
            let imgSrc = item.querySelector('img').src;
            let fullArticleElement = item.querySelector('.fullArticle');
            let text = fullArticleElement.innerHTML; 
            articleTitle.innerText = title;
            articleImg.src = imgSrc;
            articleText.innerHTML = text;
            closeArticleBtn.style.position = `fixed`;
            fullArticleSection.classList.add('show'); 
            document.body.style.overflow = 'hidden';
        });
    });
    closeArticleBtn.addEventListener('click', () => {
        closeArticleBtn.style.position = `absolute`;
        fullArticleSection.classList.remove('show'); 
        document.body.style.overflow = '';
    });
    $(".news .mucLuc a").click(function(event) {
        event.preventDefault(); 
        let targetId = $(this).attr('href');
        let targetElement = $(targetId); 
        $('html, body').animate({
            scrollTop: targetElement.offset().top - 50 
        }, 500);
    });

    let bg = document.getElementById("bg")
    let moon = document.getElementById("moon")
    let mountain = document.getElementById("mountain")
    let text = document.getElementById("text")
}   
window.addEventListener('scroll', function () {
    var value = window.scrollY;
    bg.style.top = value *0.5 + 'px';
    moon.style.left = value *0.4 + 'px';
    text.style.top = -value *0.2 + 'px';
    mountain.style.top = value *0.2 + 'px';
}); 