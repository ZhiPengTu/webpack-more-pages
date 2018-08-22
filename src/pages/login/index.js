import "./index.scss";
let layUI = require("../../js/layui.js");
console.log(layUI);
layUI.totals({
    delay:4000,
    message:'你好！layUI'
});
layUI.totals({
    delay:5000,
    message:'今天牙疼的厉害！'
});
layUI.totals();//默认显示3s  message==hello layUI ！