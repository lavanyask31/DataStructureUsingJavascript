const map = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(map);
map.set("c", 3);
map.delete("b");

console.log(map.has("a"));
console.log(map.size);

for (const [key, value] of map) console.log(`${key}:${value}`);
console.log(map.clear);
console.log(map);
