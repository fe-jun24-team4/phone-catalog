import { ProductCard } from './ProductCard';

function App() {
  const test = {
    image: 'https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg',
    name: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
    price: 799,
    fullPrice: 900,
    screen: '5.8" OLED',
    capacity: '64 GB',
    ram: '4 GB',
  };

  return (
    <div className="wrapper">
      <header className="header">Header</header>

      <main className="page">
        <div className="page__container">
          <ProductCard card={test} />
        </div>
      </main>

      <footer className="footer">
        <div className="footer__container">Footer</div>
      </footer>
    </div>
  );
}

export default App;
