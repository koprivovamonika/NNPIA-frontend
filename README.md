## NNPIA semestrální práce - frontend

Napsáno v ReactJs.

#### Téma
Tématem semestrální práce bylo napsání aplikace pro kosmetický salon.
Cílem bylo vytvoření takové aplikace, která dovolí nepřihlášenému uživateli vytvoření rezervace v kosmetickém salonu. 
Komunikace mezi zákazníky a salonem je řešena přes email. Z tohoto důvodu backend zasílá emailové zprávy zákazníkům, aby byli informováni o stavu jejich rezervace. 
Přihlášený uživatel (salon) může spravovat rezervace a také je mu umožněna správa kosmetických procedur, které salon nabízí.

#### Spuštění
- cd do složky tohoto projektu
- npm install 
- npm start

Projekt je nastavený pro připojení na backend.

#### Kód
Rozdělení kódu do balíčků 
- components - obsahuje všechny komponenty ze kterých se web skládá
- service - obsahuje třídy starající se o komunikaci s API

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!