function solution(text, markers) {
  const arr = text.split('\n');
  const finalResult = [];
  arr.forEach((word) => {
    const result = filter(word, markers);
    finalResult.push(result);
  });
  return finalResult.join('\n');
}

const filter = (str, markers) => {
  const arr = str.split('');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (markers.includes(arr[i])) {
      break;
    } else {
      result.push(arr[i]);
    }
  }
  return result.join('').trimEnd();
};

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']));
