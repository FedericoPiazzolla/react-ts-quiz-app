# React TS Quiz App 🎯

Una semplice applicazione quiz realizzata con **React + TypeScript**. Consente di interrogarsi su domande multiple prese dall'api di **opentdb**, scegliere una risposta, e visualizzare immediatamente se è **corretta** o **sbagliata**.

---

## 🧰 Tecnologie usate

- React
- TypeScript
- Vite
- CSS

---

## 🚀 Come far partire il progetto

1. Clona questa repository
   ```bash
   git clone git@github.com:FedericoPiazzolla/react-ts-quiz-app.git
   ```
2. Entra nella cartella del progetto
   ```bash
   cd react-ts-quiz-app
   ```
3. Installa le dipendenze
   ```bash
     npm install
   ```
4. Avvia il server di sviluppo
   ```bash
   npm run dev
   ```

---

## 🔍 Cosa fa l’app

- Permette di iniziare un quiz con un numero fisso di domande
- Mostra una domanda per volta
- Quando l’utente seleziona una risposta:
  - disabilita i pulsanti per evitare altri clic
  - evidenzia la risposta scelta come **corretta (verde)** o **sbagliata (rosso)**
- Barra di progresso che indica a che punto sei nel quiz

---

## 📸 Screenshots

| Stato              | Screenshot                                                                              |
| ------------------ | --------------------------------------------------------------------------------------- |
| Inizio quiz        | ![Inizio quiz](./src/assets/image/Screenshot%202025-09-19%20alle%2016.49.51.png)        |
| Risposta corretta  | ![Risposta corretta](./src/assets/image/Screenshot%202025-09-19%20alle%2016.50.03.png)  |
| Risposta sbagliata | ![Risposta sbagliata](./src/assets/image/Screenshot%202025-09-19%20alle%2016.50.24.png) |

---

## 🧠 Cosa ho imparato / miglioramenti futuri

- Gestione dello stato con React + TypeScript
- Uso di props e funzioni callback
- Condizionali nel rendering e gestione di eventi

**Migliorie possibili:**

- Aggiungere feedback sonoro / animazioni
- Aggiungere gestione multi-livello di difficoltà
- Salvare i punteggi passati
- Miglioramenti nell’interfaccia utente

---

## 📄 Licenza

Questo progetto è open source e può essere usato liberamente.
