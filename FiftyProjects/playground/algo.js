function solution(find, replace, source) {
  // 여기에 코드를 작성해주세요
  let build = "";
  let len = find.length;
  for (let i = 0; i < source.length - len + 1; i++) {
    let s = "";
    for (let j = i; j < i + len; j++) {
      s += source[j];
    }
    console.log(s);
    if (s === find) {
      build += replace;
      i += len;
    } else {
      if (!build) {
        build += s;
      } else {
        build += s[s.length - 1];
      }
    }
    console.log(build);
  }

  return build;
}

const a = "d8V0";
const b = "Hb9yznn";
const c = "ApYxpd8V0lE3ldO3id8V0MOd5CUGd8V05fszb2d8V0HeGyTXq5n";

// ApYxpHb9yznnlE3ldO3iHb9yznnMOd5CUGHb9yznn5fszb2Hb9yznnHeGyTXq5n
// ApYxpHb9yznnlE3ldO3iHb9yznnMOd5CUGHb9yznn5fszb2Hb9yznnHeGyTXq5n
// ApYxpHb9yznnldO3id8VHb9yznn5CUGd8VHb9yznnzb2d8VHb9yznnyTXq5n
solution(a, b, c);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     i += 3;
//   }
// }
