function valueDisplay(event) {
  display.value += event.target.textContent
}
function clearValue() {
  display.value = display.value.slice(0,-1)
}
function clearAllValue() {
  display.value = ""
}
function result() {
  display.value = eval(display.value)
}