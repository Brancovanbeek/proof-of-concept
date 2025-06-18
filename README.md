Ontwerp en maak een data driven online concept voor een opdrachtgever

De instructies voor deze opdracht staan in: [docs/INSTRUCTIONS.md](https://github.com/fdnd-task/proof-of-concept/blob/main/docs/INSTRUCTIONS.md)

# Label Vier
Een website met een overzicht van projecten én een detailpagina per project van Label Vier.
## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)

## Beschrijving
Dit project bestaat uit twee pagina’s:
Overzichtspagina: Hier zie je een lijst van alle projecten (cases). Elk project heeft een foto, titel, korte samenvatting en een link naar de detailpagina. Onderaan kun je makkelijk tussen pagina’s wisselen via paginering.

Detailpagina: Hier zie je alle informatie over één project, zoals een grote afbeelding, teamleden, datum, leestijd, en je kunt het project delen via social media. Ook is er een contactmogelijkheid met de projectleider.
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Gebruik

Overzichtspagina:
Als bezoeker kan ik gemakkelijk alle projecten bekijken en doorklikken naar het project dat mij interesseert.

Detailpagina:
Als bezoeker kan ik meer lezen over een specifiek project, zien wie eraan hebben gewerkt, en het project delen of contact opnemen met de projectleider.

## Kenmerken
### Technieken en structuur
* HTML + Liquid: Om dynamisch pagina’s te maken met data uit de API.
* CSS: Voor een mooie en overzichtelijke styling, inclusief responsive design voor mobiel en desktop.
* JavaScript: Kleine verbeteringen zoals een nieuwsbriefformulier dat zonder pagina-herlaad werkt met een loader en succes state.
* Paginering: Op de overzichtspagina kun je tussen pagina’s wisselen.
* Breadcrumbs: Op de detailpagina zie je waar je bent in de website (Home > Cases > Specifiek project).
* Social sharing: Met knoppen voor Twitter, Facebook, WhatsApp en LinkedIn.
* Teamleden: Automatisch laden van teamleden met foto’s en rollen.
* Contact: Contactgegevens van de projectleider worden getoond.
### Hoe de data werkt
Cases worden via een lijst geladen en per case worden details opgehaald.

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

