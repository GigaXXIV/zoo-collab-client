import '../App.css';
import Header from './Header';
import Button from './Button';
import SubscriptionForm from './SubscriptionForm';
import { useEffect, useState } from "react";
import axios from "axios"

const API_URL = `http://localhost:3000/subscriptions.json`;

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}





function App() {
  const [subscriptions, setSubscriptions] = useState([])

  useEffect(() => {
    let mounted = true;
    getAPIData().then((data) => {
      if (mounted) {
        setSubscriptions(data);
      }
    });
    return () => (mounted = false)
  }, [])

  return (
    <div className="App">
      <Header />
      <div class="subscription-call">
        
        {/* <Button name="SUBSCRIBE" /> */}
      </div>
      <div class="form-container">
        <div>
        <h3>ZOO<span>Weekly Newsletter</span></h3>
        </div>
        <div class="welcome">
        <p>Receive a discount and come have some fun! Kids join free on an adult membership.</p>
        </div>
        
        <SubscriptionForm subscriptions={subscriptions} />
        
      </div>
      
    </div>
  );
}

export default App;
