const axios = require("axios");
const fs = require("fs");

async function my_func(a, b, c) {
  // write code here
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((result) => result);
}

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  // 중략
  // const result = my_func(param1, param2, param3);
  const result = my_func(1, 2, 3);
  // ws.write(result + "\n");
  // ws.end();
  return result;
}

console.log(main());
