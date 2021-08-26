let a = {
  LPW: ["YDA", 15, "AGO"],
  QSU: [],
  AVM: "ZLP",
  YJC: 22,
  LTZ: [[], "YJU"],
};

const b = [[["GES", "ZMH"], 79, 35, 98, "HGV"], "DRD", 70];

function solution(data) {
  let answer = recurseCopy(data);
  return answer;
}

function recurseCopy(data) {
  if (Array.isArray(data)) {
    return recurseCopyArr([...data]);
  } else {
    return recurseCopyObj(data);
  }
}

function recurseCopyArr(arr) {
  if (!arr.length) return [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      recurseCopyArr(i);
    } else {
      return [...arr, i];
    }
  }
}
function recurseCopyObj(obj) {
  for (let o in obj) {
    if (typeof o === "object") {
      recurseCopyObj(o);
    } else {
      return { ...obj, o };
    }
  }
}

let answer = solution(b);
console.log(answer);
a["LPW"][0] = 5;
b[0][0][0] = "asdf";
console.log("===========");
console.log(answer);

// function test() {
//   console.log(typeof arguments);
//   console.log(arguments);
//   console.log([...arguments]);
// }

// test([1, 2, 3, 4], ["a", "b", "c"]);
