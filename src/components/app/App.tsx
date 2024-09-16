import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <header className="header">HEADER</header>

      <main className="page page___container">
        <Outlet />
      </main>

      <footer className="footer">FOOTER</footer>
    </div>
  );
}

export default App;
