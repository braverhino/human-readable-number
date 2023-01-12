module.exports = function toReadable (number) {
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    15: 'fifteen',
    18: 'eighteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }
  let digits = number.toString().split('');
  let lastTwoNumbers = digits[1] + digits[2]

  if(number < 10){
    return numbers[number]
  }
  else if(number > 9 && number < 20){
    if(number in numbers){
        return numbers[number]
    }
    return numbers[digits[1]] + 'teen'
  }
  else if(number > 19 && number < 100){
    let digits = number.toString().split('')
    if(number in numbers){
        return numbers[number]
    }
    return numbers[digits[0]*10] + ' ' + numbers[digits[1]]
  }
  else if(number > 99 && number < 1000){
    let digits = number.toString().split('')
    if(digits[1] == 0 && digits[2] == 0){
        return numbers[digits[0]] + ' hundred'
    }
    else if(digits[1] == 0){
        return numbers[digits[0]] + ' hundred ' + numbers[digits[2]]
    }
    else if(lastTwoNumbers in numbers){
        return numbers[digits[0]] + ' hundred ' + numbers[lastTwoNumbers] 
    }
    else if(lastTwoNumbers > 9 && lastTwoNumbers < 20){
        return numbers[digits[0]] + ' hundred ' + numbers[digits[2]] + 'teen'
    }
    return  numbers[digits[0]] + ' hundred ' + numbers[digits[1]*10] + ' ' + numbers[digits[2]]
  }
}
