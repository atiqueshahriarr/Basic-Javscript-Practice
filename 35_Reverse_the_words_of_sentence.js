/*

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'

*/

const statement = 'I am a hard working person'

let statement_arr = statement.split(" ");

console.log(statement_arr)

let rev_arr = [];
for (let word of statement_arr) {
    rev_arr.unshift(word);
}
console.log(rev_arr);


let rev_statement = rev_arr.join(" ");
console.log(rev_statement)