import './newsletterPages.css'

const newsletterPage = `
    
<div id="header" class="newsletter">
<!-- 上方导航栏 -->
<div id="topBar">
    <p>Your Name</p>
    <nav>
        <a href="/blog" class=" nav-link4page">Blog</a>
        <a href="/projects" class="nav-link4page">Projects</a>
        <a href="/about" class="nav-link4page">About</a>
        <a href="/newsletter" class="chosen nav-link4page">Newsletter</a>
    </nav>
    <!-- 切换白天黑夜样式的按钮 -->
    <div id="toggleStyleButton">
        <img src="../src/asets/sun.png" alt="太阳" id="sun">
        <img src="../src/asets/moon.png" alt="月亮" id="moon">
        <div id="choseMark"></div>
    </div>
</div>
</div>

<div id="subscribeArea">
<p id="news-p1">Newlatters</p>
<p id="news-p2">Stories and interviews</p>
<p id="news-p3">Subscribe to learn about new product features, the latest in technology, solutions, and
    updates</p>
<input type="text" placeholder="Enter your email" id="email">
<button id="subscribeBtn">Subscribe</button>
<p id="news-p4">We care about your data in our <a href="/detailBlog" class="nav-link4page">privacy policy</a></p>
</div>

<div id="allBlogPosts" class="newsletter">
<h3 id="ah3">All blog posts</h3>

<!-- 内容展示区 -->
<div id="allBlogShowContanier" class="router-view4allBlog newsletter">
    <div class="allBlogShowArea">
        <div>
            <img src="../src/asets/img5.png" alt="几张办公桌">
            <p class="authorAndDate">Olivia Rhye · 1 Jan 2023</p>
            <div class="title">
                <p>UX review presentations</p>
                <a href="/detailBlog" class="nav-link4page">
                    <img src="../src/asets/箭头_右上.png" alt="" class="arrow">
                </a>
            </div>
            <p class="summary">
                How do you create compelling presentations that wow your colleagues and impress your
                managers?
            </p>
            <div class="tag">Design</div>
            <div class="tag">Research</div>
            <div class="tag">Presentation</div>
        </div>
        <div>
            <img src="../src/asets/img6.png" alt="几张办公桌">
            <p class="authorAndDate">Olivia Rhye · 1 Jan 2023</p>
            <div class="title">
                <p>UX review presentations</p>
                <a href="/detailBlog" class="nav-link4page">
                    <img src="../src/asets/箭头_右上.png" alt="" class="arrow">
                </a>
            </div>
            <p class="summary">
                How do you create compelling presentations that wow your colleagues and impress your
                managers?
            </p>
            <div class="tag">Design</div>
            <div class="tag">Research</div>
            <div class="tag">Presentation</div>
        </div>
        <div>
            <img src="../src/asets/img7.png" alt="几张办公桌">
            <p class="authorAndDate">Olivia Rhye · 1 Jan 2023</p>
            <div class="title">
                <p>UX review presentations</p>
                <a href="/detailBlog" class="nav-link4page">
                    <img src="../src/asets/箭头_右上.png" alt="" class="arrow">
                </a>
            </div>
            <p class="summary">
                How do you create compelling presentations that wow your colleagues and impress your
                managers?
            </p>
            <div class="tag">Design</div>
            <div class="tag">Research</div>
            <div class="tag">Presentation</div>
        </div>
    </div>
</div>
</div>
<footer>© 2023 Twitter Linkedln Email RSS feed Add to Feedly</footer>
`;

export default newsletterPage;