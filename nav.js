function toggleMenu() {
    const navUl = document.querySelector('nav ul.navbar');
    navUl.classList.toggle('active');
}

data = 
`
<!--navbarのHTMLコード-->
<nav>
    <div class="hamburger" onclick="toggleMenu()">☰</div>
    <ul class="navbar">
        <li><a href="index.html">HOME</a></li>
        <li><a href="works.html">作品</a></li>
        <li><a href="iss.html">ISS追跡</a></li>
    </ul>
</nav>

<!--navbarのCSSコード-->
<style>
    body {
    padding-top: 40px;
    }
     nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #000033;
        opacity: 0.8;
        padding: 10px 20px;
        display: flex;
        height: 26px;
        z-index: 100;
    }
    /* ハンバーガーメニュー */
    .hamburger {
        display: none;
    }
    nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }
    nav ul li a {
        margin: 0 15px;
        text-decoration: none;
        color: #fff;
        font-size: 18px;
    }

    @media (max-width: 700px) {
        nav{
        height: 40px;
        }
        .hamburger {
        display: block;
        color: #FFFFFF;
        font-size: 28px;
        }
        nav ul {
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: #000044;
        opacity: 0.9;
        display: none;
        }
        nav ul.active {
        display: flex;
        }
        nav ul li {
        margin: 10px 0;
        }
    }
</style>`

document.getElementById('navbar').innerHTML = data;
