import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        name="Angie"
        avatar="https://randomuser.me/api/portraits/women/79.jpg"
        online={true}
      />
      <Contact
        name="Jessica"
        avatar="https://randomuser.me/api/portraits/women/44.jpg"
        online={false}
      />
      <Contact
        name="Dominick"
        avatar="https://randomuser.me/api/portraits/men/97.jpg"
        online={true}
      />
    </div>
  );
}

export default App;
