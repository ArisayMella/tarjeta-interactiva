// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const formElement = document.getElementById('form');

const validateForm = event => {
  event.preventDefault();
};

//console.log(isNan(4));

//if (isNaN(Number('y')));
//if (Number ('y') === NaN){
//console.log('NO ES UN NUMERO');
//}
//

formElement.addEventListener('submit', validateForm);
