# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Billeder har en fælles img-mappe. Fonte kommer i base.css sammen med variabler, menu og footer - links til de forskellige fonte indsættes øverst i html'en. Assets som små knapper og logoer sættes i en assets-mappe.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  Alle html er i roden. CSS er i en fælles mappe, js er i en fælles mappe. og så en mappe til billeder og en til assets.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  ???

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller _)
  Alle filnavne har små bogstaver. Til klassenavne bruger vi _ og - i stedet for mellemrum.

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Vi har givet samme filnavn, til de forskellige HTML-sider. Så HTML, CSS og jS har samme navn til tilhørene side.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  Vi indsætter vores js-script nederst, lige før </body>.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Vi skriver vores fornavn med stort, og bagefter et bindestreg hvorefter vi skriver feature og så et bindestreg hvor man skriver hvad man arbejder på. EKS: celine-feature-menu.

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi har fordelt sider ud til hver, som man har ansvaret på at få arbejdet på og lavet - selvfølgelig med hjælp fra hinanden hvis der er behov for det. Men alle har fået udgivet en HTML en CSS og en JS fil hver.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  sit navn (noget beskrivene om hvad du har arbejdet på) EKS: celine grid

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  ???

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Vi bruger de metoder som vi har lært. Vi bruger både function keyword og arrow functions (til eks data-delen)

- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Vi bruger classes til det hele.

- Skal filer have korte forklaringer som kommentarer?
<!-- ja! vi skriver en kort forklaring til de steder, hvor vi syntes det giver mening -->

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejdet med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
  vi henter API'er fra DummyJson fra PRODUCTS.

- Filtrering af produkter baseret på brugerens valg.
  Vi har inddelt produkterne i kategorier, og sorteret ud så vi kun har makeup og parfumer på vores site. Og man kan filtrer ydeligere efter køn og type produkter. Og vi vil også gerne have en knap der viser alt på sale.

- Dynamisk visning af produkter i HTML.
  Vores forskellige kategoriter. Noget er udsolgt, noget til tilsalg. Alt hentes fra DUmmyJson.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?

  - Funktionen tager udgangspunkt i APIen, som er fetched, og bruger dataen af produkterne, så de forskellige data vises, hvor man ønsker dem.

- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?

  -Der forventes, at de rigtige værdier (såsom pris og discount) bliver beregnet. Der forventes også, at når man klikker på et bestemt produkt, så bliver man henvist til product.html med det rigtige id.

- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.

  - Der bruges et if statement, som går igennem parametrerne, ser om der er produkter, der kan indlæses. Hvis ikke, så viser den en paragraf, der siger "No products found in this category". Hvis der er produkter, så returner funktionen en map funktion, som laver vores produkt kort med værdier fra APIen. Herunder bliver der lavet nogle consts, som fx beregner discount pris, beregner betinget visninger osv, og returnerer dem i article.

- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
function show(products) {
  if (!products || products.length === 0) {
    productList.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  const markup = products
    .map((product) => {
      const finalPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
      const discountLabel = product.discountPercentage ? `<p class="product_discount">Deal</p>` : "";
      const soldOutLabel = product.stock === 0 ? `<p class="product_soldout">Sold Out</p>` : "";
      const priceDisplay = product.discountPercentage
        ? `<p class="product_price">
            <span class="original_price">$${product.price}</span> 
            <span class="discounted_price">$${finalPrice}</span>
          </p>`
        : `<p class="product_price">$${product.price}</p>`;

      return `
      <article>
          ${discountLabel}
          ${soldOutLabel}
          <label>
          <input type="checkbox" id="fav-toggle">
          <span class="heart-container"></span>
          </label>
          <a href="single.html?id=${product.id}"><img src="${product.thumbnail}" alt="${product.title}" /></a>
          <h3 class="product_name">${product.title}</h3>
          <p class="product_brand">${product.brand}</p>
          <br>
          ${priceDisplay}
        </article>`;
    })
    .join("");

  productList.innerHTML = markup;
}
```
