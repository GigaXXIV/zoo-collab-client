import '../App.css';
import Header from './Header';
import Button from './Button';
import SubscriptionForm from './SubscriptionForm';
import { useEffect, useState } from "react";
import axios from "axios"
import Welcome from './Welcome';

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
      </div>  
      <Welcome />
        {/* <SubscriptionForm subscriptions={subscriptions} /> */}
      </div>
      
  );
}

export default App;
