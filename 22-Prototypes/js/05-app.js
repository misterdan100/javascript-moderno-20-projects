var students = [
    {name: 'Daniel'},
    {name: 'Julian'},
    {name: 'Lucas'},
    {name: 'Andres'}
]

//Students.where('name', 'Daniel') // resultado: {name: 'Daniel'}

Array.prototype.where = function(key, value) {
    return this.find(item => item[key] === value);
}

console.log(students.where('name', 'Lucas'));