const catalogo = require('./catalogo');

function adicionarFilme(titulo, duracao, atores, anoDeLancamento, emCartaz) {
  catalogo.push({
    id: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDeLancamento,
    emCartaz, 
  });
  console.log('Filme adicionado com sucesso!!!')
  console.log(catalogo)
}

function buscarFilme(id) {
  const buscafilme = catalogo.find(movie => movie.id === id)
  return buscafilme ? buscafilme : 'Filme não encontrado'
}

function alterarStatusEmCartaz(id) {
  const movie = buscarFilme(id)

  movie.emCartaz ? false : true

  console.log(movie)
}

const listMovies = (catalogo) => {
  const titleMovie = []
  for(i = 0; i < catalogo.length; i++) {
    let movie = catalogo[i];
    titleMovie.push(movie.titulo, movie.anoDeLancamento, movie.atores);
  }
  console.log(titleMovie);
}

const moviesInTheaters = (catalogo) => {
  const moviesTheaters = catalogo.forEach(movie => {
    console.log(
      movie.emCartaz ? `Filme em cartaz: ${ movie.titulo }` 
    : 
    `${ movie.titulo } - Não está em cartaz!!`
    );
  });
  // console.log(typeof moviesTheaters)
  return moviesTheaters
}

module.exports = {
  adicionarFilme,
  buscarFilme,
  alterarStatusEmCartaz,
  listMovies,
  moviesInTheaters,
}