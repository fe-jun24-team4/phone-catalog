import { Outlet } from 'react-router-dom';
import { RotateDegs } from '../buttons/buttonFavorite/RotateDegs';
import { ButtonFavorite, ButtonPrimary, ButtonRounded } from '../buttons';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <ButtonFavorite icon="icon-heart" />
        <ButtonPrimary title="test" />
        <ButtonRounded icon="icon-chevron-left" rotateDeg={RotateDegs.up} />
      </header>

      <main className="page">
        <Outlet />
      </main>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
