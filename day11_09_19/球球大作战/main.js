// 设置画布

const canvas = document.querySelector('canvas');
// 返回一个开始画画的环境，ctx是一个对象，直接代指画布上的一块允许我们绘制2D图形的区域
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function randomColor() {
    return (
        "rgb(" +
        random(0, 255) +
        ", " +
        random(0, 255) +
        ", " +
        random(0, 255) +
        ")"
    );
}

function Shape(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Shape.prototype.draw = function () {
    // 声明现在要开始在纸上画一个图形了
    ctx.beginPath();
    // 定义图形的颜色
    ctx.fillStyle = this.color;
    // 用arc()方法在纸上画出一段圆弧
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    // 声明结束以beginPath()方法开始的绘画
    ctx.fill();
};

Shape.prototype.update = function () {
    // 如果小球已经到达边缘，则反转它的速度
    if (this.x + this.size >= width) {
        this.velX = -this.velX;
    }
    if (this.x - this.size <= 0) {
        this.velX = -this.velX;
    }
    if (this.y + this.size >= height) {
        this.velY = -this.velY;
    }
    if (this.y - this.size <= 0) {
        this.velY = -this.velY;
    }
    // 更新小球的位置
    this.x += this.velX;
    this.y += this.velY;
};


function Ball(x, y, velX, velY, color, size) {
    Shape.call(this, x, y, velX, velY, color, size);
    this.exist = true;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;



function PlayBall(x, y, velX, velY, color, size) {
    Shape.call(this, x, y, velX, velY, color, size);
    this.exist = false;
}
PlayBall.prototype = Object.create(Shape.prototype);
PlayBall.prototype.constructor = PlayBall;
PlayBall.prototype.draw = function () {
    // 声明现在要开始在纸上画一个图形了
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, this.size * 0.8, 0, 2 * Math.PI);
    ctx.fill();
}

// playball的移动是根据按下的方向键来决定
PlayBall.prototype.update = function (arrowKey) {
    // 只有正在游戏中，才生效
    if (isGaming) {
        if (arrowKey === 'ArrowUp') {
            this.y -= 10;
            if (this.y - this.size <= 0) {
                this.y += 30;
            }
        }
        if (arrowKey === 'ArrowDown') {
            this.y += 10;
            if (this.y + this.size >= height) {
                this.y -= 30;
            }
        }
        if (arrowKey === 'ArrowLeft') {
            this.x -= 10;
            if (this.x - this.size <= 0) {
                this.x += 30;
            }
        }
        if (arrowKey === 'ArrowRight') {
            this.x += 10;
            if (this.x + this.size >= width) {
                this.x -= 30;
            }
        }
    }
}

// 碰撞检测
PlayBall.prototype.collisionDetect = function (balls) {
    // 只有正在游戏中，才生效
    if (isGaming) {
        for (let i = 0; i < balls.length; ++i) {
            let disX = this.x - balls[i].x;
            let disY = this.y - balls[i].y;
            let dis = Math.sqrt(disX * disX + disY * disY);
            // 发生碰撞了，开始进行大小判断
            if (dis < this.size + balls[i].size) {
                // 开吃！
                if (this.size > balls[i].size) {
                    score += Math.floor((balls[i].size * balls[i].size * Math.PI));
                    scoreEle.innerHTML = '当前分数为:' + score;
                    this.size = Math.sqrt(this.size * this.size + balls[i].size * balls[i].size);
                    balls[i].exist = false;
                    balls.splice(i, 1);
                }
                // wuwuwuw~ 被吃掉了～
                else {
                    // 先终止游戏
                    isGaming = false;
                    scoreEle.innerHTML = '上一局总分: ' + score;
                    // 重置玩家小球的状态，即把上一把吃的吐出来，位置也重置
                    this.x = 31;
                    this.y = 31;
                    this.size = 15;
                    start.style.display = 'block';
                    start.innerHTML = 'New game';
                    messageEle.innerHTML = 'You have been eaten, Game Over...';
                    messageEle.style.display = 'block';
                    h3.style.display = 'block';
                }
            }
        }
    }
}

// 生成小球函数
function generateBalls() {
    let balls = [];
    for (let i = 0; i < 25; ++i) {
        let size = random(5, 30);
        let x = random(0 + size, width - size);
        let y = random(0 + size, height - size);
        let velX = random(-5, 5);
        let velY = random(-5, 5);
        let color = randomColor();
        let newBall = new Ball(x, y, velX, velY, color, size);
        balls.push(newBall);
    }
    return balls;
}

// 定义一些全局变量
let balls = generateBalls();  // 用来存放每一局游戏中的NPC小球
let aa = new PlayBall(31, 31, 5, 6, "white", 15);  // 玩家小球aa
const start = document.getElementById('start');  // 获取开始按钮
let isGaming = false;  // 用来判断游戏是否进行中
let animation = null;  // 用来标记正在播放的循环动画
let arrowKey = '';  // 用来记录当前按下的方向键
let score = 0;  // 用来记录当前分数
const scoreEle = document.getElementById('score');  // 用于显示分数
const messageEle = document.getElementById('message');  // 用于显示信息
const h3 = document.querySelector('h3');

window.addEventListener('keydown', (e) => {
    arrowKey = e.key;
});

window.addEventListener('keyup', () => {
    arrowKey = '';
});

// 按钮绑定开始游戏时间
start.addEventListener('click', () => {
    isGaming = true;
    // 重新生成新一局的NPC小球
    balls = generateBalls();
    start.style.display = 'none';
    // 重置玩家小球的状态
    aa = new PlayBall(31, 31, 5, 6, "white", 15);
    // 如果还存在之前的循环动画，则清楚它，然后再开启新的动画
    score = 0;
    scoreEle.innerHTML = '当前分数为: ' + score;
    scoreEle.style.display = 'block';
    messageEle.style.display = 'none';
    h3.style.display = 'none';
    if (animation) {
        cancelAnimationFrame(animation);
    }
    animation = requestAnimationFrame(loop);
})


// 这个实现动画的原理就是：
// 每一帧都画一幅画展示，到下一幅画的时候就在上幅画的上面覆盖下一幅画
// 从而实现动画的效果，所以要给每一幅画上一个黑色的背景，如果没有这个
// 背景，那就是不是小球运动的效果了，每个小球的每一帧都记录在页面上
// 就像相机的延时摄影效果一样了。之所以给背景有透明度，是为了让小球
// 的运动看上去有一些虚影， 透明度越小，虚影越长。
function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < balls.length; ++i) {
        balls[i].draw();
        balls[i].update();
    }
    aa.draw();
    aa.update(arrowKey);
    aa.collisionDetect(balls);

    // 已经吃光啦全部NPC，游戏结束
    if (balls.length === 0) {
        isGaming = false;
        start.style.display = 'block';
        start.innerHTML = 'New game';
        scoreEle.innerHTML = '最终得分为: ' + score;
        messageEle.innerHTML = 'Congratulations! You are the king of the ball ball kingdom!';
        messageEle.style.display = 'block';
        cancelAnimationFrame(animation);
    }
    animation = requestAnimationFrame(loop);
}

loop();


