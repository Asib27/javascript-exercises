const findTheOldest = function(people) {
    return people.map(person=>{
        if(person.hasOwnProperty('yearOfDeath')){
            let age = person.yearOfDeath - person.yearOfBirth;
            return {name: person.name, age: age};
        }
        else{
            let age = (new Date()).getFullYear() - person.yearOfBirth;
            return {name: person.name, age: age};
        }
    }).reduce((mx, per)=> per.age > mx.age? per: mx, {age: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
