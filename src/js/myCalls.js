import BASE_URL from './BASE_URL'
import refs from './refs'

// const postToAdd = {
//   email: 'user5468878994545@example.com',
//   password: 'qwerty123',
// };

/* Post
const urlAdd = `${BASE_URL}/call`
const addBody = { 
  title: 'Shirt number two',
  description: 'New red shirt, made from iron',
  category: 'business and services',
  price: 400,
  phone: '+380000000002',
}
const optionAdd = {
  method: 'POST',
  body: JSON.stringify(addBody),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization':
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',

  },
}
fetch(urlAdd, optionAdd).then(r => r.json()).then(console.log)
*/
refs.myCallClose.addEventListener('click', onModalClose);

function onModalClose(event) {
  event.preventDefault()
  console.log('click');
}

const currentProd = {
  imageUrls: [
    'https://storage.googleapis.com/kidslikev2_bucket/07f526f8-4cbe-4d47-8b3a-ffd3cdc3e150.jpeg',
  ],
  _id: '5fd076b7deae5f0017e41a7d',
  title: 'Red Shirt',
  description: 'New red shirt, made from cotton',
  category: 'business and services',
  price: 255,
  phone: '+380000000000',
  isOnSale: false,
  userId: '5fcf371a2d55d90017ae3391',
  __v: 0,
}

const url = `${BASE_URL}/call/${currentProd._id}`
let patchToUpdate = {};
const option = {
  method: 'PATCH',
  body: JSON.stringify(patchToUpdate),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization':
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',

  },
}

// Собрать данные из инпута

refs.myCallSavaBtn.addEventListener('click', productUpdate)

function productUpdate (event) {
  const inputs = refs.myCallModal.querySelectorAll('.js-my-calls-input')
  const arrValue = Array.from(inputs).reduce((acc, el) => {
    acc.push(el.value)
    
    return acc;
  }, [])
  
  patchToUpdate.title = arrValue[0]
  patchToUpdate.description = arrValue[1]
  patchToUpdate.category = arrValue[2]
  patchToUpdate.price = arrValue[3]
  patchToUpdate.phone = arrValue[4]
  patchToUpdate.imageUrls = [
    'https://storage.googleapis.com/kidslikev2_bucket/07f526f8-4cbe-4d47-8b3a-ffd3cdc3e150.jpeg',
  ],
  console.log(patchToUpdate);

// Отправить запрос на бекенд, чтобы изменить цену

  fetch(url, option) 
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log('ERROR' + error));
}



