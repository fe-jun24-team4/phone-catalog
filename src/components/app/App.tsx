import { CartItem } from '../../CartItem/CartItem';
import Phone from '../../CartItem/Phone.svg'

function App() {

const selectedPhone = {
  imgSrc: Phone,
  description: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
  quantity: 1,
  price: 1099,
};

  return (
    <div className="wrapper">
      <header className="header">

      </header>

      <main className="page">
      <CartItem selectedPhone={selectedPhone}/>
      </main>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
