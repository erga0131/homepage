function toggleMenu() {
    const navUl = document.querySelector('nav ul.navbar');
    navUl.classList.toggle('active');
}

const data =  
`
<nav>
    <div class="hamburger" onclick="toggleMenu()">☰</div>
    <ul class="navbar">
        <li><a href="index.html">Home</a></li>
        <li><a href="works.html">Works</a></li>
    </ul>
</nav>
`;

document.getElementById('navbar').innerHTML = data;
