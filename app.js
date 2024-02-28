const axios = require('axios');
const cheerio = require('cheerio');
const site = 'https://br.openfoodfacts.org/produto/5601045300022/guarana-antarctica';

//a biblioteca axios, ja realiza a requisição HTTP do site alvo. O metodo then, com o parametro response, contém os dados da resposta da requisição HTTP
axios.get(site).then(response => {

    const html = response.data; //extraindo o documento html do site alvo.
    const $ = cheerio.load(html); //const $ função que recebe uma string contendo o HTML de uma página da web e retorna um objeto que pode ser usado para fazer seleções e manipulações no DOM, criado a partir desse documento HTML

    //selecionando os elementos do produto e posteriormente extrair o texto dos elementos selecionados, com a função text()
    const productName = $('.title-1').text();
    const brand = $('#field_brands_value').text();
    const category = $('#field_categories_value').text();
    const ecoScore = $('.grade_unknown_title').text();

    // Criando o objeto com as informações do produto
    const productInfo = {
        productName: productName,
        brand: brand,
        category: category,
        ecoScore: ecoScore
    };

    // Exibindo o objeto no console
    console.log(productInfo);

}).catch(error => {
    console.log("Erro ao fazer a requisição dos dados:", error);
});

