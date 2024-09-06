module.exports = function check(str, bracketsConfig) {
  let dictionary = {}
  for (arr of bracketsConfig) {
    arr[1] !== arr[0] ? dictionary[arr[1]] = arr[0] : null
  }
  let openBrackets = Object.values(dictionary)
  let stack = []

  for (let i = 0; i < str.length; i++) {

    if (openBrackets.includes(str[i])) {
      stack.push(str[i])
    } else if (dictionary[str[i]] === stack[stack.length -1] && stack.length){
      stack.pop()
    } else if (stack[stack.length -1] !== str[i]) {
      stack.push(str[i])
    } else stack.pop()
  }
  return stack.length === 0
}

