function justInvoke(fn){
  return this.fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(this, thisValue, arg)
}