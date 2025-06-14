// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

app.get('/', function (request, response) {
    response.render('index.liquid')
});

// const API = 'https://labelvier.nl/wp-json';
// const APIcases = (API + '/wp/v2/cases?per_page=8');

// app.get(['/cases','/cases/page:page'], async function (request, response) {

//     const apiResponse = await fetch('https://labelvier.nl/wp-json/wp/v2/cases?per_page=99');
//     const apiResponseJSON = await apiResponse.json();
  
//     response.render('cases.liquid', {cases: apiResponseJSON});
// });

app.get(['/cases', '/cases/page:page'], async function (request, response) {
    // 1. Kijk of er een paginanummer is. Zo niet, begin dan bij pagina 1.
    const page = request.params.page || 1;
  
    // 2. Maak de URL om cases op te halen van WordPress, met 8 items per pagina
    const url = 'https://labelvier.nl/wp-json/wp/v2/cases?per_page=8&page=' + page;
  
    // 3. Vraag de data op van de API
    const apiResponse = await fetch(url);
  
    // 4. Zet de data om naar JSON (leesbare JavaScript-data)
    const apiResponseJSON = await apiResponse.json();
  
    // 5. Haal het totaal aantal pagina's op uit de API-header
    const totalPages = apiResponse.headers.get('X-WP-TotalPages');
  
    // 6. Laat de pagina 'cases.liquid' zien met de opgehaalde data
    response.render('cases.liquid', {
      cases: apiResponseJSON,        // de lijst met cases
      currentPage: Number(page),     // het huidige paginanummer
      totalPages: Number(totalPages) // het totaal aantal pagina's
    });
});

app.get('/cases/case/:id', async function (request, response) {

    const caseResponse = await fetch('https://labelvier.nl/wp-json/wp/v2/cases/' + request.params.id);
    const caseData = await caseResponse.json();
    
    const usersResponse = await fetch('https://labelvier.nl/wp-json/wp/v2/users/');
    const usersData = await usersResponse.json();

    response.render('case.liquid', {case: caseData, users: usersData });
});

app.post('cases/contactfomulier', async function (request, response) {
    await fetch('', {
        method: 'POST',
        body: JSON.stringify({
        title: request.body.title,
        address: request.body.address,
        colleagues: request.body.colleagues,
        }),
        headers: {
        'Content-Type': 'application/json;charset=UTF-8'
        }
    });
    response.redirect(303, '/cases');
});

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`)
});