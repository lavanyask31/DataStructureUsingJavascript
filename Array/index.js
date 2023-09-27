const arr = [1, 2, "Lavanya", 5];

console.log(arr[0]);

arr.push(4); // add at the end
arr.unshift(0); //add in the beginning

arr.pop(); // delete last item
arr.shift(); //delete from beginning

for (const item in arr) {
  console.log(item);
}
