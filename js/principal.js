const ul = document.querySelector('[data-js="marvel"]');
const filterImput = document.querySelector('#filter')
const getPosts = async (param) => {
    const response = await
        fetch(
            `http://gateway.marvel.com/v1/public/characters?${param}&ts=${timeStamp}
            &apikey=7bd17ba682f6887e07c185e1bb2705ee=${hash}`)
    return response.json();
}

//Exibe os Herois iniciais:
const earlyFeed = async () => {
    const heros = await getPosts('orderByname&limite=20');
    const postsTemplate = herosFromFedd(heros)
    ul.innerHTML = postsTemplate;

}

//Exibe os Herois pesquisados:
const searchPersonIntoDOM = async (search) => {
    const heros = await getPosts(`${ 'name=' }${search}`);
    const postsTemplate = herosFromSearch(heros)
    ul.innerHTML = postsTemplate;
}


const herosfromfedd = heros.data.results.map(item =>`<li class="card ${'normal'}>
<li class="card ${normal}">
<img class="card-image" alt=${item.name}
src= "${item.thumbnail.path}${'.'}{item.thubnail.extension}"/>
<h2 class="card-title">${item.name}</h2>
</li    >
`).join('')

//Funcao que verifica o imput "pesquisar personagens"
const modifyimputValue = event => {
    const inputValue = event.target.value.toLowerCase();
    if (inputValue != '') {
        searchPersonIntoDOM(inputValue);
    } else if (inputValue == '' || inputValue == null) {
        earlyFeed();
        }
    }

    //Para preenchermos o feed inicial:
    earlyFeed();
    
    //Para verificar se ocorre algum input:
    filterImput.addEventListener('input', modifyInputValue)