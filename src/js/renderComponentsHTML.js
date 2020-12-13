import refs from './refs'
import requires from './componentsHTML'

const contain = requires.reduce((acc, el) => {
  acc += el()
  
  return acc;
}, '')

refs.body.insertAdjacentHTML('beforeend', contain )