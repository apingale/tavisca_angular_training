var strArray = new Array();
strArray.push("abcd");
strArray.push("abcde");
strArray.push("ab");
strArray.push("bdc");
console.log('String Array is - ');
strArray.forEach(function (v, i) {
    console.log(v);
});
console.log('String Array after sorting is - ');
strArray.sort(function (a, b) { return a.length - b.length; }).forEach(function (v, i) {
    console.log(v);
});
console.log('String Array after reversing is - ');
strArray.reverse().forEach(function (v, i) {
    console.log(v);
    dasa 
});
