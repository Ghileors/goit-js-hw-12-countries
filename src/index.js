import './styles.css';
import lodash from 'lodash';
import fetchCountries from '../src/scripts/fetchCountries';

const input = document.querySelector('.form-control');
input.addEventListener(
  'input',
  lodash.debounce(() => {
    fetchCountries(input.value);
  }, 500),
);
