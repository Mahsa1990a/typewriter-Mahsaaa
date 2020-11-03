//const sentence = "hello there from lighthouse labs";
////1:
//for (const char of sentence) {
//  console.log(char);   //The issue we see in the output is that each character is on a new line
//}                     //becuase console.log will add a new line character (\n) to the end of the string
//                      //ude process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.
////2:
//for (const char of sentence) {
//  process.stdout.write(char); //hello there from lighthouse labsvagrant [typewriter]> 
//}
////3:
//setTimeout(() => {
  //for (const char of sentence) {
  //  process.stdout.write(char); //hello there from lighthouse labsvagrant [typewriter]> 
 // }
//}, 1000); // <= 1s delay to make it noticeable. Can dial it down later.

//4: Delaying Each Character Separately

const sentence = "hello there from lighthouse labs";

const letters = function(sent){
  let time = 0;
  for(let i = 0; i < sent.length; i++){ //going through all letters
   // console.log(time)
   // setTimeout(letters, 1000)
   //we can creat swtTime here
   setTimeout(() => {
    process.stdout.write(sent[i]);
    //////////////console.log("\n") wrong
   }, time);
   time += 50; //we want to print each letter every 50ms
  }
  //console.log(`time after for loop: ${time} `) // 1600
  ///////////////////console.log("\n")
  setTimeout(() => {
   console.log("\n")
 }, time); // means time after 1600

};

letters(sentence);