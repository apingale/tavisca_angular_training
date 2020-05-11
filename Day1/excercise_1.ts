// EX 1 -> Sort and Reverse data from string array based on string length
let strArray: Array<string> = new Array<string>();
strArray.push("abcd");
strArray.push("abcde");
strArray.push("ab");
strArray.push("bdc");

console.log('String Array is - ')
strArray.forEach((v:string,i:number)=> {
    console.log(v);
});

console.log('String Array after sorting is - ')
strArray.sort((a, b) => { return a.length - b.length }).forEach((v:string,i:number)=> {
    console.log(v);
});

console.log('String Array after reversing is - ')
strArray.reverse().forEach((v:string,i:number)=> {
    console.log(v);
});