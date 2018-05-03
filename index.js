function justInvoke(fn){
  return fn.call(this)
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(this, arg)
}