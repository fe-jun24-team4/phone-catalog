import { Outlet } from "react-router-dom";


function App() {
    return (
      <div className="wrapper">
        <header className="header">Header</header>
  
        <main className="page">
          <Outlet/>
        </main>
  
        <footer className="footer">Footer</footer>
      </div> 
    );
  }
  
  export default App;
  