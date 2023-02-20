import '../App.css';


import Header from './Header';
import Button from './Button';
import SubscriptionForm from './SubscriptionForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Button name="SUBSCRIBE"/>
      <SubscriptionForm />
    </div>
  );
}

export default App;
