const contentPs = document.querySelectorAll('.content p');
const floatingLayer = document.getElementById('floatingLayer');
const floatingLayerP = document.querySelector('#mainContent p');

// 点击文字，浮出层出现
for (let i = 0; i < contentPs.length; i++) {
    contentPs[i].addEventListener('click', e => {
        e.preventDefault();
        floatingLayer.style.display = 'block';
        floatingLayerP.innerHTML = e.target.innerHTML;
    });
}

// 点击按钮，浮出层隐藏
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        floatingLayer.style.display = 'none';
    });
}

// 点击浮出层以外的区域，浮出层隐藏
floatingLayer.addEventListener('click', e => {
    floatingLayer.style.display = 'none';
});

const box = document.getElementById('box');
box.addEventListener('click', e => {
    e.stopPropagation();
});


