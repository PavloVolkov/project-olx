export function fetchCategories (){
   return fetch("https://callboard-backend.herokuapp.com/call/categories")
    .then(categories=>categories.json())
}
// console.log(fetchProducts ().then(data=>console.log(data)))
