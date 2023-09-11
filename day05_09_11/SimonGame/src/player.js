import { System, blocks } from ".";
export class Player {
    constructor() {
        this.score = 0;
        this.step = 1;
    }

    playerClick(i, sequence) {
        System.twinkle(blocks[i]);
        if (i !== sequence[this.step - 1]) {
            alert('点错了, 这轮游戏您得到了' + this.score + '分');
            // flag = end  这轮游戏结束了
            return false;
        }
        this.step++;
        return true;
    }
}