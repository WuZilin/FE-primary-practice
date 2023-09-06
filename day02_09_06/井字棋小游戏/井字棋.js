// 定义玩家类
class Player {
    constructor(piece) {
        this.piece = piece;
        this.allPiecesCorrdinates = [];
    }

    // 落子, 
    luozi(corrdinate) {
        this.allPiecesCorrdinates.push(corrdinate);
        const cell = document.getElementById(corrdinate);
        cell.className = `cell ${current.piece}`;
        cell.innerHTML = this.piece;
        // 当落子数 >= 3时，每一次落子都要判断是否获胜
        if (this.allPiecesCorrdinates.length > 2) {
            const line = this.isWin(this.allPiecesCorrdinates);
            console.log(this.allPiecesCorrdinates, line);
            if (line) {
                this.claimWin(line);
                winFlag = 'end';
            }
            else {
                // 下到第五手, 还没分出胜负, 平局
                if (this.allPiecesCorrdinates.length === 5) {
                    const winMessage = document.getElementById('win-message');
                    winMessage.innerHTML = `棋逢对手, 将遇良才, 平局!`;
                    winMessage.style.display = 'block';
                    winFlag = 'draw';
                }
            }
        }
    }

    // 判断是否胜负已分
    isWin(allPiecesCorrdinates) {
        for (let i = 0; i < winConditions.length; ++i) {
            // 符合任意一种则胜利, 并返回决定胜利的那三颗子
            if (winConditions[i].every((v) => allPiecesCorrdinates.includes(v))) {
                return winConditions[i];
            }
        }
        return false;
    }

    // 宣称胜利，效果为：给决定胜利的line上的cell改变样式
    claimWin(line) {
        for (let i = 0; i < line.length; i++) {
            const winCell = document.getElementById(line[i]);
            winCell.className = `cell ${current.piece} win`;
        }
        const winMessage = document.getElementById('win-message');
        winMessage.innerHTML = `胜负已分, player${current.piece}获胜!`;
        winMessage.style.display = 'block';
    }
}

// 创建两个玩家X和O，分别执 X 和 O
const playerX = new Player("X");
const playerO = new Player("O");
// 定义当前应该落子的玩家, 初始为玩家X
let current = playerX;

// 切换落子玩家
function togglePlayer() {
    if (current === playerX) {
        current = playerO;
    } else {
        current = playerX;
    }
}

// 定义获胜条件, 因为井字棋比较简单，只有8种获胜的可能，完全可以暴力解决
const winConditions = [
    ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
    ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'],
    ['1', '5', '9'], ['3', '5', '7']
];

// 标记这盘棋有没有分出胜负
let winFlag = 'gaming';

let cells = document.getElementsByClassName('cell');
// 给棋盘里每个格子绑定落子(click)事件
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', (e) => {
        if (winFlag === 'end') {
            alert('胜负已分, 请不要再落子了, 不服的话点击new game再来一盘!');
            return;
        }
        if (winFlag === 'draw') {
            alert('难分胜负, 请再来一盘!');
            return;
        }
        let corrdinate = e.target.id;
        // 不能在有棋子的格子里落子
        if (e.target.className !== 'cell empty') {
            alert('这里已经满员了, 请选别的风水宝地落子!');
        }
        else {
            current.luozi(corrdinate);
            // e.target.className = `cell ${current.piece}`;
            // e.target.innerHTML = `${current.piece}`;
            togglePlayer();
        }
    });
}

// 再来一盘
document.getElementById('restart').addEventListener('click', () => {
    const winMessage = document.getElementById('win-message');
    winMessage.innerHTML = '';
    winMessage.style.display = 'none';
    current = playerX;
    playerX.allPiecesCorrdinates = [];
    playerO.allPiecesCorrdinates = [];
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].className = 'cell empty';
    }
    winFlag = 'gaming';
});
