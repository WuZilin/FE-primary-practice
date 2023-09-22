import page1 from "./routerPages/page1";
import page2 from "./routerPages/page2";
import page3 from "./routerPages/page3";
import page4 from "./routerPages/page4";
import page5 from "./routerPages/page5";
import page6 from "./routerPages/page6";
import page7 from "./routerPages/page7";
import page8 from "./routerPages/page8";
import page9 from "./routerPages/page9";
import page10 from "./routerPages/page10";
import blogPage from "./routerPages/blogPage";
import projectsPage from "./routerPages/projectsPage";
import aboutPage from "./routerPages/aboutPage";
import newsletterPage from "./routerPages/newsletterPage";
import detailBlogPage from "./routerPages/detailBlog";

import './style.css';
// 定义路由
class Router {
    constructor(reg, routes, link, showArea) {
        this.reg = reg;  // 路由正则
        this.routes = routes;  // routes 是一个数组, 每一个元素是一个对象， 每个对象包含 path 和 component 属性
        this.link = link;  // 触发路由的按钮的选择器
        this.showArea = showArea;  // 显示路由的区域的选择器
        this.preHash;
        // 监听hashchange事件
        window.addEventListener('hashchange', () => {
            let hash = window.location.hash;
            let allBlogReg = new RegExp(this.reg);
            if (allBlogReg.test(hash)) {
                this.routerChange();
            }
        });
    }

    // 初始化路由, 主要就是给那几个按钮添加点击事件
    init() {
        document.querySelectorAll(this.link).forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e = e || window.event;  // 为了兼容各浏览器
                e.preventDefault();  // 阻止默认行为
                // 获取当前点击的导航链接的路径

                // this.preHash = window.location.hash;
                let path = item.getAttribute('href');
                window.location.hash = path;
            });
        });
    }

    // 路由切换
    routerChange() {
        // 获取当前hash路径
        let path = window.location.hash;
        let index = this.routes.findIndex(item => '#' + item.path === path);
        if (index > -1) {
            // 更新对应的路由页面
            document.querySelector(this.showArea).innerHTML = this.routes[index].component;
            this.init();
        }
        else {
            // 路由重定向
            let defaultIndex = this.routes.findIndex(item => item.path === '/');
            if (defaultIndex > -1) {
                document.querySelector(this.showArea).innerHTML = this.routes[defaultIndex].redirect;
                this.init();
            }
        }
    }
}

let allBlogRoutes = [
    {
        path: '/allBlog/page1',
        component: page1
    },
    {
        path: '/allBlog/page2',
        component: page2
    },
    {
        path: '/allBlog/page3',
        component: page3
    },
    {
        path: '/allBlog/page4',
        component: page4
    },
    {
        path: '/allBlog/page5',
        component: page5
    },
    {
        path: '/allBlog/page6',
        component: page6
    },
    {
        path: '/allBlog/page7',
        component: page7
    },
    {
        path: '/allBlog/page8',
        component: page8
    },
    {
        path: '/allBlog/page9',
        component: page9
    },
    {
        path: '/allBlog/page10',
        component: page10
    },
    {
        path: '/',
        redirect: page1
    }
];

let pageRoutes = [
    {
        path: '/blog',
        component: blogPage
    },
    {
        path: '/projects',
        component: projectsPage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/newsletter',
        component: newsletterPage
    },
    {
        path: '/detailBlog',
        component: detailBlogPage
    }
];

let mode = 'light';
function toggleMode() {
    document.getElementById('toggleStyleButton').addEventListener('click', () => {
        if (mode === 'light') {
            document.body.style.backgroundColor = '#090D1F';
            mode = 'dark';
        }
        else {
            document.body.style.backgroundColor = 'white';
            mode = 'light';
        }
        document.querySelector('#topBar p').classList.toggle('dark');
        document.querySelector('footer').classList.toggle('dark');
        document.querySelectorAll('#topBar nav a').forEach(item => {
            item.classList.toggle('dark');
        });
        document.getElementById('choseMark').classList.toggle('dark');
        document.getElementById('toggleStyleButton').classList.toggle('dark');
        let bigTitle = document.querySelector('#bigTitle');
        if (bigTitle) {
            bigTitle.classList.toggle('dark');
        }
        let rh3 = document.getElementById('rh3');
        if (rh3) {
            rh3.classList.toggle('dark');
        }
        let ah3 = document.getElementById('ah3');
        if (ah3) {
            ah3.classList.toggle('dark');
        }
        let newsP2 = document.getElementById('news-p2');
        if (newsP2) {
            newsP2.classList.toggle('dark');
        }
        let aboutH4 = document.querySelectorAll('#mainShowArea h4');
        if (aboutH4) {
            for (let i = 0; i < aboutH4.length; i++) {
                aboutH4[i].classList.toggle('dark');
            }
        }
    });
}

function move(node, targetx, speed) {
    return new Promise(resolve => {
        let timer = setInterval(() => {
            node.style.left = node.offsetLeft + speed + 'px';
            if (node.offsetLeft < targetx && speed < 0) {
                node.style.left = targetx + 'px';
                clearInterval(timer);
                resolve();
            }
            if (node.offsetLeft > targetx && speed > 0) {
                node.style.left = targetx + 'px';
                clearInterval(timer);
                resolve();
            }
        }, 10);
    });

}

class Router4AllBlog extends Router {
    constructor(reg, routes, link, showArea) {
        super(reg, routes, link, showArea);
    }
    init() {
        document.querySelectorAll(this.link).forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e = e || window.event;  // 为了兼容各浏览器
                e.preventDefault();  // 阻止默认行为
                // 获取当前点击的导航链接的路径
                this.preHash = window.location.hash + '#';  // 特意加个#， 只是为了第一次路由换时，不让this.preHash为空
                let path = item.getAttribute('href');
                window.location.hash = path;
                // document.querySelector('.nav-link4AllBlog.chosen').classList.remove('chosen');
                // item.classList.add('chosen');
            });
        });
        const previous = document.getElementById('previous');
        if (previous) {
            previous.addEventListener('click', () => {
                this.preHash = window.location.hash + '#';
                window.history.go(-1);
            });
        }
        const next = document.getElementById('next');
        if (next) {
            next.addEventListener('click', () => {
                this.preHash = window.location.hash + '#';
                window.history.go(1);
            });
        }

    }
    async routerChange() {
        let path = window.location.hash;
        let preIndex = parseInt(this.preHash.slice(14));
        let index = this.routes.findIndex(item => '#' + item.path === path);
        if (index > -1) {
            // 更新对应的路由页面
            // 创建一个新的allBlogShowArea组件
            let nextBlog = document.createElement('div');
            nextBlog.innerHTML = this.routes[index].component;
            nextBlog.classList.add('allBlogShowArea');
            // 应该向右添加路由组件， 然后向左滑
            if (preIndex < index + 1 || this.preHash === '#' || this.preHash === '#/blog#') {
                nextBlog.classList.add('right');
                document.querySelector(this.showArea).appendChild(nextBlog);
                let twoBlogs = document.querySelectorAll('.allBlogShowArea');
                move(twoBlogs[0], -1254, -10);
                await move(twoBlogs[1], 0, -10);
                twoBlogs[1].className = 'allBlogShowArea';
                document.querySelector(this.showArea).removeChild(twoBlogs[0]);
            }
            // 应该向左添加路由组件， 然后向右滑
            else if (preIndex > index + 1) {
                nextBlog.classList.add('left');
                document.querySelector(this.showArea).appendChild(nextBlog);
                let twoBlogs = document.querySelectorAll('.allBlogShowArea');
                move(twoBlogs[0], 1254, 10);
                await move(twoBlogs[1], 0, 10);
                twoBlogs[1].className = 'allBlogShowArea';
                document.querySelector(this.showArea).removeChild(twoBlogs[0]);
            }
        }
        document.querySelector('.nav-link4AllBlog.chosen').classList.remove('chosen');
        document.querySelectorAll('.nav-link4AllBlog')[index].classList.add('chosen');
    }
}

let router4AllBlog = new Router4AllBlog('^#/allBlog/', allBlogRoutes, '.nav-link4AllBlog', '.router-view4allBlog');
// 重写router4AllBlog.routerChange()方法


class Router4page extends Router {
    constructor(reg, routes, link, showArea) {
        super(reg, routes, link, showArea);
    }
    init() {
        document.querySelectorAll(this.link).forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e = e || window.event;  // 为了兼容各浏览器
                e.preventDefault();  // 阻止默认行为
                // 获取当前点击的导航链接的路径
                let path = item.getAttribute('href');
                window.location.hash = path;
            });
        });
        toggleMode();
        router4AllBlog.init();
    }
    routerChange() {
        let path = window.location.hash;
        let index = this.routes.findIndex(item => '#' + item.path === path);
        if (index > -1) {
            // 更新对应的路由页面
            document.querySelector(this.showArea).innerHTML = this.routes[index].component;
            this.init();
        }
        else {
            // 路由重定向
            let defaultIndex = this.routes.findIndex(item => item.path === '/');
            if (defaultIndex > -1) {
                document.querySelector(this.showArea).innerHTML = this.routes[defaultIndex].redirect;
                this.init();
            }
        }

    }
}

let router4page = new Router4page('^#/', pageRoutes, '.nav-link4page', '.router-view4page');
router4page.init();