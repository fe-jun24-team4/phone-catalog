

function App() {
  return (
    <div className="wrapper">
      <header className="header">Header</header>

      <main className="page">
        <div className="page___container" style={{width: 350}}>Content
        <div className="test" style={{display: "flex", gap: 15, alignItems: 'center'}}>
        <button className="button-primary">button</button>
        <button className="button-round button-round--heart button-round--heart--selected"></button>
        </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__container">Footer</div>
        </footer>
    </div> 
  );
}

export default App;
