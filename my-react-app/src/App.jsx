import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import Counter from './Counter.jsx';
import MyComponent from './MyComponent'
import Car from './Car'
function App() {
  
    const fruits = [
                {id:1, name:"apple",calories:95},
                    {id:2, name:"orange",calories:90},
                    {id:3, name:"banana",calories:105},
                    {id:4, name:"coconut",calories:159},
                    {id:5, name:"mango",calories:95},];
    
    const veggies = [
                {id:1, name:"potato",calories:95},
                    {id:2, name:"tomato",calories:90},
                    {id:3, name:"celery",calories:105},
                    {id:4, name:"carrot",calories:159},
                    {id:5, name:"sprouts",calories:95},];
return(
  <> /*to include multiple tags */
  <Header></Header>
  <Food></Food>
  <Footer></Footer>
  <Card></Card>
  <Counter/>
  <UserGreeting isLoggedIn={true} username="BroCode"></UserGreeting>
  <h1>Low calorie fruits</h1>
  
  <List items={fruits} category="Fruits" />
  <List items={veggies} category="vegetables" />
  <MyComponent></MyComponent>
  <Car></Car>
  </>
);
}

export default App;
