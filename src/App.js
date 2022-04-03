import './App.scss';
import React from 'react';
import { InputColumn } from './components/input-column/input-column';
import { PreviewCard } from './components/preview-card/preview-card';

function App() {
  const [cardDetails, setCardDetails] = React.useState({
    givenName: '',
    surname: '',
    email: '',
    phone: '',
    houseName: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
    avatarURL: '',
  })

  return (
    <div className="h-card">
        <InputColumn setCardDetails={setCardDetails} cardDetails={cardDetails}/>
        <PreviewCard cardDetails={cardDetails}/>
    </div>
  );
}

export default App;
