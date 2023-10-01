
//работа с объектами.


//дан шаблон объекта, сделать так чтобы из шаблона 
//получалась копия с данными получеными из инпутов со страницы
// и новый объект выводился на экран


// *************шаблон объекта:
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


// ******получаем доступ к инпутам и кнопке
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const surnameInput = document.getElementById('surnameInput');
const sendButton = document.getElementById('sendButton');







//функция получения данных из инпутов
const getDataFromInput = (input) => {
  const data = input.value;
  return data;
};
const data = getDataFromInput(firstNameInput)
console.log(data);




//******************************* */



sendButton.addEventListener('click', getDataFromInput(firstNameInput));





// функция клонирования и вставки новых значений из инпутов
const updatePerson = (obj, vaiue ) => {
  const pers = JSON.parse(JSON.stringify(obj));//клонируем объект
  pers.id += 1;
  pers.fullName.firstName = vaiue;
  return pers
};

const newPerson = updatePerson(personTemplate, getDataFromInput(firstNameInput));
console.log(newPerson);