
export function generateSequence(num) {
    let sequence = [];
    for (let i = 0; i < num; i++) {
        sequence.push(Math.floor((Math.random() * 4)));
    }
    return sequence;
}
