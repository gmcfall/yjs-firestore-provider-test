import './App.css';
import * as Y from 'yjs';

import { initializeApp } from "firebase/app";
import { FirestoreProvider } from '@gmcfall/yjs-firestore-provider';
const firebaseConfig = {
  apiKey: "AIzaSyD5BWJymLd19zhHa41bpLdUuEmpYw6fkCk",
  authDomain: "lerniflash.firebaseapp.com",
  projectId: "lerniflash",
  storageBucket: "lerniflash.appspot.com",
  messagingSenderId: "23626517775",
  appId: "1:23626517775:web:dcbc2d8373a8eebc4d827a"
};
const path = ["decks", "deckId", "cards", "cardId"];

const firebaseApp = initializeApp(firebaseConfig);
const ydoc = new Y.Doc();

const provider = new FirestoreProvider(firebaseApp, ydoc, path);
console.log({provider});

function App() {
  return (
    <div className="App">
      <p>This is a simple test of '@gmcfall/yjs-firestore-provider'.</p>
      <p>It merely creates a FirestoreProvider and logs its value to the console.</p>
    </div>
  );
}

export default App;
