const set = new Set([1, 2, 3, "aa"]);
console.log(set);
set.add(4);
set.add(2); //ignores the duplicate
set.delete(3);
for (const item of set) console.log(item);

console.log(set.has(2));
console.log(set.size);
set.clear();
console.log(set);
