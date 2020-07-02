import searchResultsTemplate from '../templates/search_results_template.hbs';
import foundCountryTemplate from '../templates/found_country_template.hbs';

const result = document.querySelector('.result');

export const renderCard = country => {
  result.insertAdjacentHTML('beforeend', foundCountryTemplate(country));
};

export const renderCountryList = countryArr => {
  result.insertAdjacentHTML('beforeend', searchResultsTemplate(countryArr));
};

// export const renderCountryList = countryArr => {
//   const countryList = `
//     <ul class="countryList">
//     ${renderCountryListItem(countryArr)}
//     </ul>
//     `;
//   result.insertAdjacentHTML('beforeend', countryList);
// };

// const renderCountryListItem = arr =>
//   arr.reduce((acc, item) => {
//     return (acc += `<li class="countryListItem">${item.name}</li>`);
//   }, '');
