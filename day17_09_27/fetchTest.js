// fetch('https://v6.exchangerate-api.com/v6/4612e4b0036b51d0324a2825/latest/CNY')
//     .then(response => response.json())
//     .then(data => console.log(data));

async function getExchangeRate() {
    const response = await fetch('https://v6.exchangerate-api.com/v6/4612e4b0036b51d0324a2825/latest/CNY');
    // // console.log(response);
    // console.log(response.ok);
    // console.log(response.url);
    // console.log(response.type);
    // console.log(response.redirected);
    // for (let [key, value] of response.headers) {
    //     console.log(key, value);
    // }
    // let data = await response.text();
    let data2 = await response.json();
    console.log(data2);
}

getExchangeRate();