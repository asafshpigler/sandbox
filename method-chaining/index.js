function Counter(initNum) {
	this.num = typeof initNum === 'number' && !isNaN(initNum) ? initNum : 0
}

Counter.prototype.inc = function() {
    this.num++
    return this
}
Counter.prototype.dec = function() {
    this.num--
    return this
}
Counter.prototype.log = function() {
    console.log(this.num)
    return this
}