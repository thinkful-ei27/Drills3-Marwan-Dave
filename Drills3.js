const loaf = {
    flour: 300,
    water: 210,
    hydration: function(){
        return (this.water / this.flour)*100
    },

}

console.log(loaf.flour)
console.log(loaf.water)
console.log(loaf.hydration())

// ............

const obj = {
    foo: 'foo',
    bar: 'bar',
    fum: 'fum',
    quux: 'quux',
    spam: 'spam',
}

for (let i in obj){
}

console.log(obj)

// ..........

let obj1 = {
    name: 'name1',
    job: 'job1',
}

let obj2 = {
    name: 'name2',
    job: 'job2',
}

let obj3 = {
    name: 'name3',
    job: 'job3',
}

let array = [];
array.push(obj1)
array.push(obj2)
array.push(obj3)

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

// .......



