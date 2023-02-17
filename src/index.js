module.exports = function reverse (n) {
    let str = Math.abs(n).toString().split("").reverse().join("");
    n = parseInt(str);
    return n;
}
