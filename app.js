const axios = require('axios');
const cheerio = require('cheerio');
const site = 'https://br.openfoodfacts.org/produto/5601045300022/guarana-antarctica';

try {
    axios.get(site).then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        const product = $('.title-1').text();
        const brand = $('#field_brands_value').text();
        const category = $('#field_categories_value').text();

        console.log(product);
        console.log(brand);
        console.log(category);
    }).catch(error => {
        console.log("Erro ao fazer a requisição:", error);
    });
} catch (error) {
    console.log("Erro, por favor tente mais tarde:", error);
}
