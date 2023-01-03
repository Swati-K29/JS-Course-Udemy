// const johnHeight = 1.95;
// const johnWeight = 92;
// const markHeight = 1.69;
// const markWeight = 78;

//output
// John's BMI  24.194608809993426
// codingChallenge1.js:15 mark's BMI  27.309968138370508
// codingChallenge1.js:18 Mark has higher BMI than john  true

const johnHeight = 1.76;
const johnWeight = 85;
const markHeight = 1.88;
const markWeight = 95;

//output
// John's BMI  27.44059917355372
// codingChallenge1.js:21 mark's BMI  26.87867813490267
// codingChallenge1.js:24 Mark has higher BMI than john  false

const jonhBMI = johnWeight/johnHeight**2;
const markBMI = markWeight/(markHeight*markHeight);

console.log('John\'s BMI ', jonhBMI);
console.log('mark\'s BMI ', markBMI);

const markHigherBMI = markBMI>jonhBMI;
console.log('Mark has higher BMI than john ', markHigherBMI);