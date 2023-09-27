const obj = {
  name: "Bruce",
  "age-Num": 25,
  key3: "ji",
  printName: function () {
    console.log(this.name);
  },
};

obj.hobby = "footbaall";
delete obj.key3;

delete console.log(obj);
console.log(obj.name, "and", obj["age-Num"]);
obj.printName();

console.log(Object.keys(obj), Object.values(obj), Object.entries(obj));
