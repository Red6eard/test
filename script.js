
//работа с объектами.


//дан шаблон объекта, сделать так чтобы из шаблона 
//получалась копия с данными получеными из инпутов со страницы
// и новый объект выводился на экран


// шаблон объекта:
const personTemplate = {
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

console.log(personTemplate);

// функция клонирования и вставки новых значений из инпутов
const updatePerson = (obj) => {
  const pers = JSON.parse(JSON.stringify(obj));//клонируем объект
  pers.id += 1;
  pers.fullName.firstName = "Vadim";
  return pers
};

const newPerson = updatePerson(personTemplate);

console.log(newPerson);