function Palindrome() {
  const arg = process.argv[2];
  console.log("1. Word entered: ", arg);

  const charArr = Object.assign([], arg);
  console.log("2. Word Array: ", charArr);

  const revArr = charArr.reverse();
  console.log("3. Reversed Array: ", revArr);

  const revWord = revArr.join("");
  console.log("4. Reversed Word: ", revWord);

  if (revWord == arg) {
    console.log(`True! '${arg}' is a palindrome`);
  } else {
    console.log(`False! '${arg}' is not a palindrome...`);
  }
}
Palindrome();
