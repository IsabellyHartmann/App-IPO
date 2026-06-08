import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Barra de navegação superior em bootstap 4 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">IPO</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/veiculos">Veículos</Link>
            <Link className="nav-link" to="/veiculos">Inspeções</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspecoes" element={<InspecoesList />} />
        </Routes>
      </div>
    </div>
  );
}

// Página inicial

function Inicio() {
  return <div className="container">
    <div className="jumbotron text-center">
      <h1>Centro de Inspecões de Automóveis</h1>
      <p>IPO - ESDS1</p>
    </div>
  </div>
}

// Componente ClientesList (Funcional conforme Exercício 3)
function ClientesList() {
  return (<h2>Página de Clientes;
    <button className="btn btn-primary">
      <i className="fa fa-plus"></i>
      Novo Cliente
    </button>
  </h2>);

}

function VeiculosList() {
  return (<h2>Página de Veículos</h2>);
}

function InspecoesList() {
  return (<h2>Página de Inspecções</h2>);
}

export default App

