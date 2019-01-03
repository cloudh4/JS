var message = "hello";
let msg2 = "hello2";
const msg3 = "hello3";

message = "hello dirubah";
msg2 = "hello2 dirubah";

if (true) {
  var message = 1;
  let msg2 = 2;
  const msg3 = "const 3";
  console.log("ini", msg2);
  console.log("ini", msg3);

}

console.log(message);
console.log(msg2);
console.log(msg3);
