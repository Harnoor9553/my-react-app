import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

function App() {
return(
  <> /*to include multiple tags */
  <Header></Header>
  <Food></Food>
  <Footer></Footer>
  <Card></Card>
  <UserGreeting isLoggedIn={true} username="BroCode"></UserGreeting>
  <List/>
  </>
);
}

export default App
