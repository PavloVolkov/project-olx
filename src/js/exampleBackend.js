const BASE_URL = 'https://callboard-backend.herokuapp.com';

const postToAdd = {
  email: 'user5468878994545@example.com',
  password: 'qwerty123',
};

const option = {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append(
  'Authorization',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
);

/* 
///////////////// Регистрация /////////////////

const urlAuthRegister = `${BASE_URL}/auth/register`;

 // Регистрация 
fetch(urlAuthRegister, option)
 .then((r) => r.json())
 .then(console.log);

// Ответ
{
  email: 'user5468878994545@example.com',
  registrationDate: '2020-12-11',
  id: '5fd332a680dabd00179d7faf',
};
*/

///////////////// login /////////////////

const urlAuthLogin = `${BASE_URL}/auth/login`;

// fetch(urlAuthLogin, option)
//   .then(r => r.json())
//   .then(console.log);

/* Ответ
{
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYwNzY4MDg0Mn0.Nw3Xu2mElqFP5XXQ8OXlbheo6aN7ZC6fSXqup1AaeNI',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
  sid: '5fd3353a80dabd00179d7fe4',
  user: {
    email: 'user5468878994545@example.com',
    registrationDate: '2020-12-11',
    id: '5fd332a680dabd00179d7faf',
    favourites: [],
    calls: [],
  },
};
*/

///////////////// User /////////////////

const urlAuthUser = `${BASE_URL}/user`;

fetch(urlAuthUser, {
  method: 'GET',
  headers: myHeaders,
})
  .then(r => r.json())
  .then(console.log);

/* Ответ
{
  email: 'user5468878994545@example.com',
  registrationDate: '2020-12-11',
  id: '5fd332a680dabd00179d7faf',
  calls: [],
  favourites: [],
};
*/

///////////////// Категории /////////////////

const urlCallCategory = `${BASE_URL}/call/categories`;

fetch(urlCallCategory, myHeaders)
  .then(r => r.json())
  .then(console.log);

/* Отвут
[
  'property',
  'transport',
  'work',
  'electronics',
  'business and services',
  'recreation and sport',
  'free',
  'trade',
];
*/

///////////////// Поиск /////////////////

const urlCallCall = `${BASE_URL}/call?page=1`;

const myHeadersCall = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append(
  'Authorization',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc',
);

fetch(urlCallCall, myHeadersCall)
  .then(r => r.json())
  .then(console.log);

/* Ответ
{
  sales: [],
  recreationAndSport: [],
  free: [],
  businessAndServices: [
    {
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
    },
    ...
    {
      imageUrls: [
        'https://storage.googleapis.com/kidslikev2_bucket/1798bb23-aab7-4b24-9741-529d03356339.jpeg',
      ],
      _id: '5fd367626da6ab0017dbf38b',
      title: 'Red Shirt1112',
      description: 'New red shirt, made from cotton',
      category: 'business and services',
      phone: '+380000000000',
      price: 200,
      isOnSale: false,
      userId: '5fcf34b02d55d90017ae338f',
      __v: 0,
    },
  ],
};
 */

///////////////// Фаворит добавить /////////////////
const callId = '5fd076b7deae5f0017e41a7d';
const urlCallCFavour = `${BASE_URL}/call/favourite/${callId}`;
const optionFavour = {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization':
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc'
  },
};

// fetch(urlCallCFavour, optionFavour)
//   .then(r => r.json())
//   .then(console.log);

  /* Ответ
  {"newFavourites":[{"imageUrls":["https://storage.googleapis.com/kidslikev2_bucket/1798bb23-aab7-4b24-9741-529d03356339.jpeg"],"_id":"5fd367626da6ab0017dbf38b","title":"Red Shirt1112","description":"New red shirt, made from cotton","category":"business and services","phone":"+380000000000","price":200,"isOnSale":false,"userId":"5fcf34b02d55d90017ae338f","__v":0}]}
  */

///////////////// Фаворит DELETE /////////////////
const callIdDel = '5fd367626da6ab0017dbf38b';
const urlCallCFavourDel = `${BASE_URL}/call/favourite/${callIdDel}`;
const optionFavourDel = {
  method: 'DELETE',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization':
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzJhNjgwZGFiZDAwMTc5ZDdmYWYiLCJzaWQiOiI1ZmQzMzUzYTgwZGFiZDAwMTc5ZDdmZTQiLCJpYXQiOjE2MDc2NzcyNDIsImV4cCI6MTYxMDMwNTI0Mn0.k7ClxKFHWx8UIIIIY0VZmvB7mOnpOvK7N00Mk6jdotc'
  },
};
 
// fetch(urlCallCFavourDel, optionFavourDel)
//   .then(r => r.json())
//   .then(console.log);

/* Ответ
  {"newFavourites":[{"imageUrls":["https://storage.googleapis.com/kidslikev2_bucket/07f526f8-4cbe-4d47-8b3a-ffd3cdc3e150.jpeg"],"_id":"5fd076b7deae5f0017e41a7d","title":"Red Shirt","description":"New red shirt, made from cotton","category":"business and services","price":255,"phone":"+380000000000","isOnSale":false,"userId":"5fcf371a2d55d90017ae3391","__v":0}]}
  */

  ///////////////// Поиск по заголовку /////////////////
 const urlFind = `${BASE_URL}/call/find?search=Red Shirt1112`;

fetch(urlFind, myHeaders)
  .then(r => r.json())
  .then(console.log);

  /* Ответ
  [{"_id":"5fd367626da6ab0017dbf38b","imageUrls":["https://storage.googleapis.com/kidslikev2_bucket/1798bb23-aab7-4b24-9741-529d03356339.jpeg"],"title":"Red Shirt1112","description":"New red shirt, made from cotton","category":"business and services","phone":"+380000000000","price":200,"isOnSale":false,"userId":"5fcf34b02d55d90017ae338f","__v":0}]
  */