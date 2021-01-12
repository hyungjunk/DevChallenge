let param = [
  ["hello", () => console.log("helloworld")],
  ["world", 2],
  ["solo", "work"],
];

let a = new Map(param);
console.log(a.set("yolo", "solos"));
let b = a.entries();
console.log(b);
