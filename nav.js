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
        <li><a href="index.html">Home</a></li>
        <li><a href="works.html">Works</a></li>
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
        background: #FFFFFF;
        opacity: 0.95;
        padding: 10px 20px;
        display: flex;
        height: 26px;
        z-index: 9999;
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
        color: #39C5BB;
        font-size: 18px;
    }

    @media (max-width: 700px) {
        nav{
        height: 40px;
        }
        .hamburger {
        display: block;
        color: #39C5BB;
        font-size: 28px;
        }
        nav ul {
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: #FFFFFF;
        opacity: 0.95;
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
