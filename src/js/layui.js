(function(window,$){
var layUI=layUI||{};
function totals(options){
    this.timer=null;
    this.options={
        delay:3000,
        message:'hello layUI!'
    }
    $.extend(this.options, options);
	this.init();
}
totals.prototype.constructor=totals;
totals.prototype.init=function(){
    var _this = this;
    console.log(_this.options.delay);
    var totalswrap=document.createElement('div');
    var body=document.getElementsByTagName('body')[0];
    totalswrap.innerText=_this.options.message;
    body.appendChild(totalswrap);
    setTimeout(function(){
        body.removeChild(totalswrap);
    },_this.options.delay)
};

layUI.totals=function(options){
    new totals(options);
}
if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
    module.exports = layUI;
} else if (typeof define === 'function' && define.amd) {
    define(function () {
        return layUI;
    });
} else {
    window.layUI = layUI;
}
})(window,jQuery);


