const ul = document.querySelector('[data-js="marvel"]');
const filterImput = document.querySelector('#filter')
const getPosts = async (param) => {
    const response = await
        fetch(
            `http://gateway.marvel.com/v1/public/characters?${param}&ts=${timeStamp}
            &apikey=7bd17ba682f6887e07c185e1bb2705ee=${hash}`)
            return response.json();
        
    }