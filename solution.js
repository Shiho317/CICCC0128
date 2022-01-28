const API_URL = 'https://randomuser.me/api?results=50'
const result = document.getElementById('result')
const filter = document.getElementById('filter')
const list = document.querySelector('#result li')

async function getData(){
    const response = await fetch(API_URL);
    const { results } = await response.json()
    

    //clear result
    result.innerHTML = ''

    const getSearchResult = (e) => {
    e.preventDefault();

    let inputValue = e.target.value.toLowerCase();
    
    const findResult = results.filter(result => result.name.first.toLowerCase().indexOf(inputValue) !== -1 );

    if(findResult.length > 0){

        findResult.forEach(user => {

            const newList = document.createElement('li');
            newList.classList.add('user-info')

            newList.innerHTML = `
                <img src="${user.picture.medium}"/>
            <div>
                <h4>${user.name.first} ${user.name.last}<h4>
                <p>${user.location.city} ${user.location.country}<p>
            </div>
            `
            
            result.appendChild(newList)
            
    })
    }
    
}

filter.addEventListener('keyup', getSearchResult)

}

getData()

