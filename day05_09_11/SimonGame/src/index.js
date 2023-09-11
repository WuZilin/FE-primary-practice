import './index.css'
import { generateSequence } from './computer'
import { Player } from './player'

export class System {
    constructor() {
        this.turn = 'computer';
        this.num = 1;
        this.sequence = generateSequence(1);
    }

    // 色彩块闪烁特效
    static async twinkle(block) {
        block.classList.add('light');
        await new Promise(resolve => {
            setTimeout(() => {
                block.classList.remove('light');
                resolve();
            }, 800);
        });
        await new Promise(resolve => {
            setTimeout(() => resolve(), 200);
        });
    }

    // 按照序列顺序依次让对应色块闪烁
    async lightBlock(sequence) {
        for (let i = 0; i < sequence.length; i++) {
            await System.twinkle(blocks[sequence[i]]);
        }
        this.turn = 'player';
        message.innerHTML = 'Player Turn';
    }
}

export const blocks = document.querySelectorAll('#blockArea div');
let system = new System();
let player = new Player();

let flag = 'end';
const btn = document.getElementById('start');
const message = document.querySelector('h1');
btn.addEventListener('click', () => {
    if (flag === 'end') {
        flag = 'gaming';
        btn.innerHTML = 'Restart Game';
        system = new System();
        player = new Player();
        system.lightBlock(system.sequence);
    }
    else if (flag == 'gaming') {
        flag = 'end';
        btn.innerHTML = 'Start Game';
        message.innerHTML = 'Computer Turn';
    }
    else {
        flag = 'end';
        btn.innerHTML = 'Resurrection';
    }
})

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', () => {
        if (system.turn === 'player' && flag === 'gaming') {
            // 点错了，游戏结束
            if (!player.playerClick(i, system.sequence)) {
                flag = 'death';
                message.innerHTML = 'Try Again';
            }
            else {
                // 如果play.step > system.num 则说明应该进下一关了
                if (player.step > system.num && player.step < 7) {
                    // 对关卡进行一系列更新
                    system.turn = 'computer';
                    system.num++;
                    system.sequence = generateSequence(system.num);
                    console.log(system.sequence);
                    system.lightBlock(system.sequence);
                    player.score++;
                    document.querySelector('#steps .frame').innerHTML = system.num;
                    document.querySelector('#score .frame').innerHTML = player.score;
                    message.innerHTML = 'Computer Turn';
                    player.step = 1;
                }
                // 通关了
                else if (player.step === 7) {
                    alert('恭喜您, 通关了');
                    btn.click();
                }
                // 否则这关还没过，还要继续按顺序点击色块
            }
        }
    });
}
