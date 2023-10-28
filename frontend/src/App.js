```javascript
import React from 'react';
import PersonaMarketplace from './components/PersonaMarketplace';
import PersonaDetails from './components/PersonaDetails';
import PurchasePersona from './components/PurchasePersona';
import ApplyPersona from './components/ApplyPersona';
import PreviewPersona from './components/PreviewPersona';
import UserReviews from './components/UserReviews';
import PersonaRatings from './components/PersonaRatings';
import CreatePersona from './components/CreatePersona';
import SubmitPersona from './components/SubmitPersona';
import TopRatedPersonas from './components/TopRatedPersonas';
import TrendingPersonas from './components/TrendingPersonas';
import SecurePayment from './components/SecurePayment';
import ContentModeration from './components/ContentModeration';
import Accessibility from './components/Accessibility';

function App() {
  return (
    <div className="App">
      <PersonaMarketplace />
      <PersonaDetails />
      <PurchasePersona />
      <ApplyPersona />
      <PreviewPersona />
      <UserReviews />
      <PersonaRatings />
      <CreatePersona />
      <SubmitPersona />
      <TopRatedPersonas />
      <TrendingPersonas />
      <SecurePayment />
      <ContentModeration />
      <Accessibility />
    </div>
  );
}

export default App;
```