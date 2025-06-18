# Mijn Project: Nabouwen van de Label Vier Website

Live link: https://proof-of-concept-v3m0.onrender.com/

## Introductie

Voor dit project heb ik de website van Label Vier als voorbeeld gebruikt. Mijn opdracht was om deze website na te bouwen, niet zelf iets te ontwerpen, maar goed te kijken hoe zij het hebben gemaakt en dat stap voor stap zelf te bouwen. Zo wilde ik meer leren over werken met Liquid templates, dynamische content en een goede structuur in de code.

## Wat ik heb gemaakt

Ik heb twee belangrijke pagina’s gebouwd:

1. De overzichtspagina met alle cases  
2. De detailpagina van één case


<table>
  <tr>
    <th>Detailpagina Mobile</th>
    <th>Detailpagina Desktop</th>
  </tr>
  <tr>
    <td>
       <img src="https://github.com/user-attachments/assets/e42f9ec3-a9da-4b4a-8cfd-9b2c52e7f0cc" width="200">
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/54a7b230-6365-4836-8f79-924f1be624e5" width="400">
    </td>
  </tr>
  <tr>
    <th>Cases overzicht Mobile</th>
    <th>Cases overzicht Desktop</th>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/2cc6e976-2c24-4560-8f26-bcc99589bf0b" width="200">
    </td>
    <td>
     <img src="https://github.com/user-attachments/assets/89180681-98de-4502-bcc5-0b9f8d892d74" width="400">
    </td>
  </tr>
</table>


### Overzichtspagina met cases

Op deze pagina laat ik een lijst zien van alle projecten (cases) die ik vanuit een database ophaal.

- Ik heb een `<section>` gemaakt met de titel “Projecten waar we trots op zijn!”  
- Daaronder een lijst (`<ul>`) waarin ik met een `for`-loop alle cases uit mijn data toon.  
- Elk project staat in een lijstitem (`<li>`) met een link naar de detailpagina van dat project.  
- Bij elk project toon ik een afbeelding, titel en een korte samenvatting van de inhoud. Hiervoor gebruik ik Liquid filters zoals `strip_html` en `truncatewords` om de tekst netjes kort te houden.  
- Onderaan elk item staat een “lees verder” link met een pijltje, zodat het duidelijk is dat je doorklikt voor meer info.

Verder heb ik paginering toegevoegd:

- Er zijn knoppen om naar de vorige en volgende pagina te gaan, als er meer projecten zijn dan op één pagina passen.  
- Ook laat ik paginanummers zien om makkelijk te kunnen kiezen.

Daarnaast staat er een nieuwsbrief-inschrijfformulier:

- Dit formulier vraagt om een e-mailadres.  
- Het wordt met JavaScript en `fetch` verstuurd zonder dat de pagina vernieuwt.  
- Tijdens het verzenden zie je een laad-animatie en bij succes verandert de knoptekst naar “Ingeschreven”.  
- Het formulier wordt daarna leeg gemaakt, zodat je ziet dat je inschrijving is verwerkt.
  
![CPT2506171942-610x159](https://github.com/user-attachments/assets/1f36bae3-d05d-42d2-8c70-58977d378a96)


### Detailpagina van een case

Op deze pagina laat ik alle informatie over één project zien, zodat bezoekers een compleet beeld krijgen van de case:

- **Broodkruimels (breadcrumbs):**  
  Bovenaan staat een navigatiepad dat dynamisch wordt opgebouwd uit data. Dit helpt bezoekers snel te begrijpen waar ze zich bevinden binnen de site.

- **Hero-afbeelding van het project:**  
  Er wordt een grote afbeelding getoond die het project representeert. De alt-tekst van deze afbeelding wordt automatisch gevuld met de titel van het project voor betere toegankelijkheid.

- **Projecttitel:**  
  De naam van het project staat prominent bovenaan als een `<h1>`-kop, zodat het duidelijk is welk project wordt getoond.

- **Projectinformatie:**  
  Er is een overzichtelijke lijst met belangrijke extra informatie over het project, waaronder:  
  - Een link naar de betreffende website.  
  - **Leestijd:** Wordt automatisch ingevuld uit de data. Dit helpt bezoekers inschatten hoeveel tijd ze nodig hebben om de case te lezen.  
  - **Publicatiedatum:** De datum waarop het project is gepubliceerd, mooi geformatteerd als dag, maand en jaar, ook uit de data afkomstig.

- **Projectteam:**  
  Een swiper toont foto’s en informatie van de teamleden die aan het project hebben gewerkt. Dit gebeurt door de teamleden-ID’s te koppelen aan de gebruikersdata, zodat naam, profielfoto, titel en rol worden weergegeven.

- **Projectbeschrijving:**  
  De volledige inhoud van het project wordt dynamisch geladen vanuit de API. Hierdoor laad de tekst, videos en afbeeldingen in.
  
- **Contact projectleider:**  
  Onderaan staat een aparte sectie met contactinformatie van de projectleider, inclusief een klikbare profielfoto, naam, rol en e-mailadres, zodat geïnteresseerden direct contact kunnen opnemen.

- **Social media delen:**  
  De pagina bevat knoppen om de case makkelijk te delen via Twitter, Facebook, WhatsApp en LinkedIn. De links worden automatisch opgebouwd met de juiste URL en titel, zodat delen eenvoudig kan.

---

### Progressive Enhancement en Performance Enhancement

- **Progressive Enhancement:**  
  Ik zorg ervoor dat de website ook goed functioneert als JavaScript niet beschikbaar is of uitstaat. Zo is het navigatiemenu ook bereikbaar via een `:target` CSS-selector die de bezoeker naar de footer brengt waar het menu opnieuw staat. Op deze manier blijft de navigatie altijd bruikbaar, ongeacht de browserinstellingen of -mogelijkheden. Hierdoor blijft de gebruikservaring toegankelijk en consistent.

- **Performance Enhancement:**  
  Voor een snellere laadtijd en betere performance gebruik ik moderne fontformaten: ik laad eerst `.woff2` fonts, die veel kleiner en sneller zijn, met een fallback naar `.ttf` voor oudere browsers die `.woff2` niet ondersteunen. Dit zorgt voor optimale snelheid zonder compatibiliteitsverlies.

---

## Gebruikte tools

* Express.js – server en routing
* LiquidJS – templates renderen
* WordPress API – content ophalen
* Directus API – formulierdata opslaan
* Fetch API – data ophalen in routes

## Installatie
Wil je deze code gebruiken of aanpassen? Zo doe je dat:

* Clone de repository:
git clone https://github.com/jouwgebruikersnaam/jouwproject.git  
* Installeer de benodigde tools:
npm install  
* Start de ontwikkelserver:
npm start  
* Open de website in je browser:
http://localhost:8000

