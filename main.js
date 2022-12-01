const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    hobbies: ['music','money','food'],
    address: {
        street: 'John Street',
        city: 'John City',
        state: 'John State',
        hobbies: ['music','money','food'],
    }
}

console.log(person.address.hobbies[0])