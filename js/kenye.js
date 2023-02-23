
// const loadQuote = () =>{
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => displayQuote(data))
// }

// const  displayQuote  = quote  =>{
//     console.log(quote)
//     const loadData = document.getElementById('kanye')
//     // const loadApi = document.createElement
//     // ('div')
//     console.log(loadData)
//     loadData.innerHTML = quote.quote;
//     // loadData.appendChild(loadApi)
// }
// loadQuote();

//  female api

const loadFemale = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayFemale(data))
}

const  displayFemale  = user  =>{
    console.log(user)
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender;

    const name =user.results[0].name.title+' '+ user.results[0].name.first+' '+user.results[0].name.last
    document.getElementById('name').innerHTML =name;

    const location =user.results[0].location.city+' '+ user.results[0].location.country;
    document.getElementById('location').innerHTML = location;

    // images
    document.getElementById('img-show').innerHTML = `
    <img src="${user.results[0].picture.large}" alt=" This not valid">
    `
   
    }
  
 
    loadFemale();


