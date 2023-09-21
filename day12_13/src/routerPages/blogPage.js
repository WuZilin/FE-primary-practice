const blogPage = `
<div id="header">
            <!-- 上方导航栏 -->
            <div id="topBar">
                <p>Your Name</p>
                <nav>
                    <a href="" class="chosen nav-link4page">Blog</a>
                    <a href="/projects" class="nav-link4page">Projects</a>
                    <a href="/about" class="nav-link4page">About</a>
                    <a href="/newsletter" class="nav-link4page">Newsletter</a>
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
                THE BLOG
            </div>
        </div>

        <!-- 博客展示部分 -->
        <div id="blog">
            <!-- Recent blog posts区域 -->
            <div id="recentBlogPosts">
                <h3 id="rh3">Recent blog posts</h3>
                <div id="recentShowArea">
                    <!-- 位于左上的blog -->
                    <div id="leftTop-blog">
                        <img src="../src/asets/img1.png" alt="几张办公桌">
                        <p class="authorAndDate">Olivia Rhye · 1 Jan 2023</p>
                        <div class="title">
                            <p>UX review presentations</p>
                            <a href="">
                                <img class="arrow" src="../src/asets/箭头_右上.png" alt="">
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

                    <!-- 位于右上方的blog -->
                    <div id="rightTop-blog">
                        <div class="rightTop-ceil">
                            <img src="../src/asets/img2.png" alt="小组讨论">
                            <div id="rightTop-content1">
                                <p class="authorAndDate">Phoenix Baker • 1 Jan 2023</p>
                                <div class="title">
                                    <p>Migrating to Linear 101</p>
                                </div>
                                <p class="summary">Linear helps streamline software projects, sprints, tasks, and bug
                                    tracking. Here's how to get ...</p>
                                <div class="tag">Design</div>
                                <div class="tag">Research</div>
                            </div>

                        </div>
                        <div class="rightTop-ceil">
                            <img src="../src/asets/img3.png" alt="电脑桌">
                            <div id="rightTop-content2">
                                <p class="authorAndDate">Lana steiner · 1 Jan 2023</p>
                                <div class="title">
                                    <p>Building your API Stack</p>
                                </div>
                                <p class="summary">
                                    The rise of RESTful APIs has been met by a rise in tools for creating, testing, and
                                    manag...
                                </p>
                                <div class="tag">Design</div>
                                <div class="tag">Research</div>
                            </div>

                        </div>
                    </div>

                    <!-- 位于下方的blog -->
                    <div id="down-blog">
                        <img src="../src/asets/img4.png" alt="一个页面截图">
                        <div id="down-content">
                            <p class="authorAndDate">Olivia Rhye · Jan 2023</p>
                            <div class="title">
                                <p>Grid system for better Design User Interface</p>
                                <a href="">
                                    <img src="../src/asets/箭头_右上.png" alt="" class="arrow">
                                </a>
                            </div>
                            <p class="summary">
                                A grid system is a design tool used to arrange content on a webpage. It is a series of
                                vertical and horizontal lines that create a matrix of intersecting points, which can be
                                used to align and organize page elements. Grid systems are used to create a consistent
                                look and feel across a website, and can help to make the layout more visually appealing
                                and easier to navigate.
                            </p>
                            <div class="tag">Design</div>
                            <div class="tag">Interface</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- All blog  posts区域-->
            <div id="allBlogPosts">
                <h3 id="ah3">All blog posts</h3>

                <!-- 内容展示区 -->
                <div id="allBlogShowContanier" class="router-view4allBlog">
                    <div class="allBlogShowArea">
                        <div>
                            <img src="../src/asets/img5.png" alt="几张办公桌">
                            <p class="authorAndDate">Olivia Rhye · 1 Jan 2023</p>
                            <div class="title">
                                <p>UX review presentations</p>
                                <a href="">
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
                                <a href="">
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
                                <a href="">
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
                            <img src="../src/asets/img8.png" alt="几张办公桌">
                            <p class="authorAndDate">Olivia Rhye · 1 Jan 2023</p>
                            <div class="title">
                                <p>UX review presentations</p>
                                <a href="">
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
                            <img src="../src/asets/img9.png" alt="几张办公桌">
                            <p class="authorAndDate">Olivia Rhye · 1 Jan 2023</p>
                            <div class="title">
                                <p>UX review presentations</p>
                                <a href="">
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
                            <img src="../src/asets/img10.png" alt="几张办公桌">
                            <p class="authorAndDate">Olivia Rhye · 1 Jan 2023</p>
                            <div class="title">
                                <p>UX review presentations</p>
                                <a href="">
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

                <!-- 换页器 -->
                <div class="page-changer">
                    <a id="previous"><img src="../src/asets/箭头_向左.png" alt=""> Previous</a>
                    <div class="pages">
                        <nav>
                            <a href="/allBlog/page1" class="chosen nav-link4AllBlog">1</a>
                            <a href="/allBlog/page2" class="nav-link4AllBlog">2</a>
                            <a href="/allBlog/page3" class="nav-link4AllBlog">3</a>
                            <a href="/allBlog/page4" class="nav-link4AllBlog">4</a>
                            <a href="/allBlog/page5" class="nav-link4AllBlog">5</a>
                            <a href="/allBlog/page6" class="nav-link4AllBlog">6</a>
                            <a href="/allBlog/page7" class="nav-link4AllBlog">7</a>
                            <a href="/allBlog/page8" class="nav-link4AllBlog">8</a>
                            <a href="/allBlog/page9" class="nav-link4AllBlog">9</a>
                            <a href="/allBlog/page10" class="nav-link4AllBlog">10</a>
                        </nav>
                    </div>
                    <a id="next">Next <img src="../src/asets/箭头_向右.png" alt=""></a>
                </div>
            </div>
        </div>
`;

export default blogPage;