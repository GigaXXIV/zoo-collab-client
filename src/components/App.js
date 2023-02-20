import '../App.css';


import Header from './Header';
import Button from './Button';
import SubscriptionForm from './SubscriptionForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="subscription-call">
        <p>Get discount and come have fun!</p>
        <p>Kids join free on adult memberships.</p>
        {/* <Button name="SUBSCRIBE" /> */}
      </div>
      <div class="form-container">
        <h3>ZOO<span>Newsletter</span></h3>
        <SubscriptionForm />
      </div>
    </div>
  );
}

export default App;
