import './projectsPage.css'
const projectsPage = `

<div id="header" >
<!-- 上方导航栏 -->
<div id="topBar">
    <p>Your Name</p>
    <nav>
        <a href="/blog" class=" nav-link4page">Blog</a>
        <a href="/projects" class="chosen nav-link4page">Projects</a>
        <a href="/about" class="nav-link4page">About</a>
        <a href="/newsletter" class=" nav-link4page">Newsletter</a>
    </nav>
    <!-- 切换白天黑夜样式的按钮 -->
    <div id="toggleStyleButton">
        <img src="../src/asets/sun.png" alt="太阳" id="sun">
        <img src="../src/asets/moon.png" alt="月亮" id="moon">
        <div id="choseMark"></div>
    </div>
</div>
<!-- 巨大标题 -->
<div id="bigTitle">
    PROJECTS
</div>
</div>

<div id="allBlogPosts">
<h3 id="ah3">List Project</h3>
<!-- 内容展示区 -->
<div class="allBlogShowArea projects">
    <div>
        <img src="../src/asets/manyData.png" alt="满屏数据">
        <div class="title">
            <p>User Experience Design Dashboard Hotel Management</p>
            <a href="/detailBlog" class="nav-link4page">
                <img src="../src/asets/箭头_右上.png" alt=""
                    class="arrow">
            </a>
        </div>
        <p class="summary">
            n the context of user experience (UX) design, a hotel management dashboard should be designed
            with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive
            interface that allows staff to easily access and use the various tools and features of the
            dashboard.
        </p>
        <div class="tag">Design</div>
        <div class="tag">Research</div>
        <div class="tag">Presentation</div>
    </div>

    <div>
        <img src="../src/asets/游行.png" alt="游行">
        <div class="title">
            <p>Bring of User Experience Design to Policy Making, How to Impact Society</p>
            <a href="/detailBlog" class="nav-link4page">
                <img src="../src/asets/箭头_右上.png" alt=""
                    class="arrow">
            </a>
        </div>
        <p class="summary">
            User experience (UX) design is a discipline that focuses on creating products and services that
            are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design
            can be used to create policies that are effec
        </p>
        <div class="tag">Research</div>
        <div class="tag">Presentation</div>
    </div>

    <div class="sp-ceil">
        <img src="../src/asets/friendTalk.jpg" alt="朋友交谈">
        <div class="title">
            <p>UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data &
                Inclusive Collaboration Designons</p>
            <a href="/detailBlog" class="nav-link4page">
                <img src="../src/asets/箭头_右上.png" alt=""
                    class="arrow">
            </a>
        </div>
        <p class="summary">
            There are many different design processes that can be followed when creating a hotel management
            dashboard. Here are some tips for bringing a design process to teams and using data and
            inclusive collaboration to solve user problems
        </p>
        <div class="tag">Design</div>
        <div class="tag">Research</div>
        <div class="tag">Presentation</div>
        <div class="tag">Collaboration</div>
    </div>

    <div>
        <img src="../src/asets/somesymbol.png" alt="一些图标">
        <div class="title">
            <p>Icon Package of Slin Icon</p>
            <a href="/detailBlog" class="nav-link4page">
                <img src="../src/asets/箭头_右上.png" alt=""
                    class="arrow">
            </a>
        </div>
        <p class="summary">
            An icon package is a collection of icons that can be used in various design projects, such as
            website design, app development, and graphic design.
        </p>
        <div class="tag">Design</div>
        <div class="tag">Branding</div>
        <div class="tag">Identity</div>
    </div>

    <div>
        <img src="../src/asets/img1.png" alt="几张办公桌">
        <div class="title">
            <p>UX review presentations</p>
            <a href="/detailBlog" class="nav-link4page">
                <img src="../src/asets/箭头_右上.png" alt=""
                    class="arrow">
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
<footer class="projectFooter">© 2023 Twitter Linkedln Email RSS feed Add to Feedly</footer>
`;

export default projectsPage;