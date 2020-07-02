import errorTemplate from '../templates/error_template.hbs';
import resultErrorTemplate from '../templates/result_error_template.hbs';
import { renderCard, renderCountryList } from '../scripts/markupRender';
const result = document.querySelector('.result');

const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default async function fetchCountries(searchQuery) {
  result.innerHTML = '';
  const res = await fetch(`${baseUrl}${searchQuery}`)
    .then(response => {
      if (response.status < 400) {
        return response.json();
      } else {
        result.innerHTML = resultErrorTemplate();
      }
    })
    .then(data => {
      if (data) {
        if (data.length > 10) {
          result.innerHTML = errorTemplate();
        } else if (data.length < 2) {
          renderCard(data[0]);
        } else {
          renderCountryList(data);
        }
      }
    });
  return res;
}
