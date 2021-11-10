const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco"
  }
};
const updated = {
  ...person,
  address: {
    ...person.address, // this does a deep copy.
    city: "New York"
  },
  name: "Bob"
};
console.log(person); //{ name: 'John', address: { country: 'USA', city: 'San Francisco' } }

