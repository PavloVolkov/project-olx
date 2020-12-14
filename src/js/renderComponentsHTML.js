import requires from './componentsHTML'

const contain = requires.reduce((acc, el) => {
  acc += el()
  
  return acc;
}, '')

const bodyRef = document.querySelector('body');
bodyRef.insertAdjacentHTML('beforeend', contain )

const refs = {}

export default refs;