# løsning opg 2 - hovedoppgaven

> Av Kevin Andre Engell

## oppgavetekst

Basert på det du har lært og jobbet med på lærestedet ditt, skal du nå planlegge, gjennomføre, dokumentere og vurdere et praktisk arbeid. Oppgaven din skal ta utgangspunkt i normale oppgaver du utfører på lærestedet og du skal starte med å beskrive de oppgavene du har valgt. Drøft gjerne hvilke oppgaver du velger å beskrive med din faglige leder. Du skal starte med å lage en beskrivelse av oppgaven.
Eksempler på hva du kan velge er Frontend løsning, Backend løsning, Database eller et annet område du har arbeidet med som læring i din virksomhet. Det er meget viktig at oppgavene du velger må dekke kompetansemålene i lærerplanen. Denne planen har du tilgjengelig på ditt lærested, men den er også vedlagt på slutten av dette dokumentet. Besvarelsen skal dekke alle kompetansemål fra læreplanen.
Husk at du skal kunne gjennomføre det du velger på fem arbeidsdager. Det er derfor viktig at du avgrenser omfanget slik at du blir ferdig i tide. Drøft gjerne dette med din faglige leder, slik at oppgavene oppgavens omfang er i henhold til tidsbruken.

## løsning

Jeg skall lage en simplifisert versjon av den nye backenden til Forbrukerrådets tjeneste Strømpris. Under er nødvendige deler for denne løsningen. Løsningen skal være en backend for en tjeneste som skal håndtere produkter og bedrifter. og et api for å hente, opprette, endre og slette disse. det skal også være relasjoner mellom produkter og bedrifter. Applikasjonen skal bruke Prisma som database manager og Express som webserver. den skal også bruke express-jsdoc-swagger for å generere api dokumentasjon. Løsningen skal også ha en versjonskontroll og endringlogg for produkter. Det er også ønskelig med tilgangstyring og automatisk testing av api.

### krav spesifikasjoner

-   Database med produkter og bedrifter
-   Seeder funksjoner for oppsett av database
-   Endepunkt for henting alle av produkter og bedrifter
-   Endepunkt for henting av produkter og bedrifter basert på id
-   Endepunkt for sletting og oppretting av produkter og bedrifter
-   Relasjoner mellom produkter og bedrifter
-   Dokumentasjon servert av løsingen (swagger)
-   Kode dokumentasjon med hjelp av tsDocs og jsDocs
-   Endepunkt for endring av produkter og bedrifter
-   versjonskontroll for produkter
-   Endringlogg
-   Tilgangstyring
-   Automatisk testing av api

### Teknologi

-   [node.js](https://nodejs.org/en)(v20) - `JavaScript runtime environment`
-   [typescript](https://www.typescriptlang.org) - `JavaScript with type definitions`
-   [Prisma](https://www.prisma.io) - `Database manager`
-   [Prettier](https://prettier.io) - `Code formatter`
-   [eslint](https://eslint.org) - `Find problems in code`
-   [dotenv](https://www.npmjs.com/package/dotenv) - `Loads environment from a .env file`
-   [nodemon](https://nodemon.io) - `Restart Node.js application on file change`
-   [express-jsdoc-swagger](https://brikev.github.io/express-jsdoc-swagger-docs/) - `Generate in application API documentation`
-   [WSL]() - `Windows subsystem for linux`
-   [express](https://expressjs.com/)
-   [TSOA](https://tsoa-community.github.io/docs/)
-   [webpack](https://webpack.js.org)

### FORUTSETNINGER

Siden løsningen er en NODE applikasjon, er det forventet at du har node installert på maskinen din. For å installere node, gå til [nodejs.org](https://nodejs.org/en) og last ned den nyeste versjonen. For å sjekke om node er installert, skriv `node -v` i terminalen. Hvis du får en versjon tilbake, er node installert. Hvis ikke, må du installere node.

I tillegg trenger du Docker for å kjøre databasen. For å installere Docker, gå til [docker.com](https://www.docker.com/products/docker-desktop) og last ned den nyeste versjonen. For å sjekke om Docker er installert, skriv `docker -v` i terminalen. Hvis du får en versjon tilbake, er Docker installert. Hvis ikke, må du installere Docker.

### Installasjon

> For å installere løsningen, følg stegene under:

1. installer NODE modulene

```bash
npm install
```

2. Start databasen

```bash
docker compose up -d
```

3. Opprett databasen

```bash
npx prisma db push
```

4. Bygg løsningen

```bash
npm run build
```

5. Kjør løsningen

```bash
npm run start
```

Applikasjonen vil nå kjøre på [http://localhost:3001](http://localhost:3001)

Hvis ikke applikasjonen kjører, sjekk at porten er ledig og at ingen andre prosesser bruker porten. Hvis det er tilfelle, endre porten i `.env` filen. Dette gjøres ved å endre `APP_PORT` variabelen.

---

---

## FOR ENGLISH READERS

> Do to the nature of the assignment, the README is in norwegian. if you have any questions, feel free to ask. The code itself is in english however.

### PRE-REQUISITES

-   Node.js
-   Docker

### Installation

-   Run `npm install`
-   Run `docker compose up -d`
-   Run `npx prisma db push`
-   Run `npm run build`
-   Run `npm run start`

The application will now run on [http://localhost:3001](http://localhost:3001)
<br>
To change the port, change the `APP_PORT` variable in the `.env` file.
