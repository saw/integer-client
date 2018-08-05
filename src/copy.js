
module.exports = function(el) {
    var range = document.createRange();  
    range.selectNode(el);  
    window.getSelection().addRange(range);
    let result = document.execCommand('copy');
    console.log(result);
}