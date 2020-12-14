<!DOCTYPE html>
<html land="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Yordan Petkov portfolio website.">
        <meta name="keywords" content="HTML, CSS, JavaScript, Portfolio, Developer, Front-End">
        <meta name="author" content="Yordan Petkov">
        <title>Yordan Petkov</title>
        <link rel="stylesheet" href="./style/main.css" type="text/css">
        <link rel="icon" href="./images/favicon.ico" type="image/gif" sizes="16x16">
        <script type="text/javascript" src="./script/index.js"></script>
    </head>

    <body>
        <header id="header">
            <h1>Yordan Petkov</h1>
            <h3>Front-End Developer and Designer</h2>
            <nav>
                <a href="#about">About me</a>
                <a href="#skills">My skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <main>
            <article class="about" id="about">
                <h2>About me</h2>
                <img src="./images/profilePicture.jpeg" alt="A picture of me">
                <p>Hi, my name is Yordan, and I'm a front-end developer. I'm a high school student in Bulgaria. I learn on my own most of the programming. I have around 4 years of experience and until now I love what I do. I speak English and Bulgarian and I'm happy to work on all kinds of projects.</p>
            </article>
            <article class="skills" id="skills">
              <h2>My skills</h2>
                <section class="html5Section">
                    <img src="./images/html5Icon.png" alt="HTML5 icon">
                    <p>I have created this website using HTML5. I know it very well. I know about: Forms with validation, SEO basics, Semantic html and many other things.</p>
                </section>
                <section>
                    <img src="./images/css3Icon.png" alt="CSS3 icon">
                    <p>I have created this website using CSS3. Without any libraries or help.</p>
                </section>
                <section>
                    <img src="./images/jsIcon.png" alt="Javascript icon">
                    <p>I have created this website using Javascript. I'm very good at it. I have used only basic Javascript without any libraries</p>
                </section>
            </article>
            <article class="portfolio" id="portfolio">
                <section>
                    <a href="#"></a>
                </section>
                <section>
                    <a href="#"></a>
                </section>
            </article>
            <article class="contact" id="contact">
                <h2>Contact me</h2>
                <a href="https://github.com/jordanbleach"><img src="./images/githubIcon.png" alt="My github profile link"></a>
                <a href="https://www.upwork.com/freelancers/~01b0b13ff9c22dc585?s=1110580755057594368"><img src="./images/upworkIcon.png" alt="My upwork profile link"></a>
                <form action="./script/index.js" method="post">
                    <label><p>Name:</p><input type="text" alt="Input field for you'r name." placeholder="First name"></label><br>
                    <label><p>Email:</p><input type="email" alt="Input field for you'r email." placeholder="*@*"></label><br>
                    <label><p>Message:</p><textarea rows="4" cols="50" alt="Text area for you'r message." placeholder="Insert you'r message here."></textarea></label><br>
                    <button type="submit">Send Message</button>
                </form>
            </article>
        </main>
        <footer>
            © Yordan Petkov 2020
            <button id="scrollToTopBtn">☝️</button>
        </footer>
    </body>
</html>