var a= 10; 
var arr = [1,2,3,'a', 'abc', true, {a: 'abc'}]
console.log(arr[6]); 
console.log(arr) 
arr.push(100) 
console.log(arr) 
arr.pop() 
console.log(arr) 
console.log(arr.join("*")) 
console.log(arr.join("=="))

var arr = [] 
arr.push(10) 
arr.push(20) 
console.log(arr) 
arr.shift() 
console.log(arr) 
arr.push(100) 
console.log(arr) 
arr.unshift(100) 
console.log(arr)

var person = 
{ 
    name:'xyz', 
    age:20, 
    hobbies: ['singing', 'dancing', 'chatting'], 
    DOB: "12-4-1999", 
    walking: function()
        { console.log('I am walking'); 
            return "hello"; 
        }, 
    watching: function()
        { 
        console.log('I am watching'); 
        return "hi"; 
        }
} 
console.log(person) 
console.log(person.name)
console.log(person.walking())

function details(name, age)
{   this.name=name; 
    this.age=age;
} 
var person1 = new details("Sharanya", 28) 
console.log(person1)