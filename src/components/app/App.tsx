import { CatalogPage } from '../../pages/CatalogPage';
import { ButtonFavorite, ButtonPrimary } from '../buttons';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <ButtonFavorite icon="icon-heart" />
        <ButtonPrimary title="test" />
      </header>

      <main className="page page___container">
        <CatalogPage />
      </main>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
