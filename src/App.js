import CartCard from './components/CartCard';
import NavigationBar from './components/NavigationBar';
import OrderInfoCard from './components/OrderInfoCard';
import './styles/App.css';

function App() {
  return (
    <>
      <NavigationBar />
      <section>
        <div className='left-content'>
          <h1>My Cart</h1>
          <CartCard />
        </div>
        <div className='right-content'>
          <OrderInfoCard />
        </div>
      </section>
    </>
  );
}

export default App;
