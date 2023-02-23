// console.log('data')
const countryLoad = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = country =>{
    // console.log(country)
    const countriesContainer = document.getElementById('countries');
    // step one same data
    // for(const countries of country){
    //     console.log(countries)
    // }
    // step two same data show
    country.forEach(element => {
//  console.log(element.cca2)
const countryDiv = document.createElement('div')
countryDiv.classList.add('country');
countryDiv.innerHTML = `
<h3>Name: ${element.name.common} </h3>
<p>Capital: ${element.capital ? element.capital[0] : 'No Capital'} </p>
<button onclick="loadCountryDetails('${element.cca2}')">Detailes</button>
`       
countriesContainer.appendChild(countryDiv)
    });
}

const loadCountryDetails = code =>{
    // console.log(code,'details')
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res  => res.json() )
    .then( data  => displayCountryDetails(data))
}

const displayCountryDetails  = load  =>{
    console.log(load[0])
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML =`
    <h2>Country Detail ${load[0].region}</h2>
    <h3>Name : ${load[0].continents[0]} </h3>
    <p>Capital : ${load[0].capital[0]}</p>
    <img src="${load[0].flags.png}" alt="NOt">
    `
}

countryLoad()