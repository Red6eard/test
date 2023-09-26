

const newPerson = {
  id: 00000,
  fullName: {
    firstName: "firstName",
    surname: "surname",
    lastName: "lastName",
  },
  gender: "gender",
  age: 0,
  address: {
    country: "country",
    city: "city",
    street: "street",
    house: "house",
    apartment: 0
  },
  married: true
};

console.log(newPerson);


const updatePerson = (obj) => {
  const pers = JSON.parse(JSON.stringify(obj));
  pers.id += 1;
  pers.fullName.firstName = "Vadim";
  return pers
};

console.log(updatePerson(newPerson));