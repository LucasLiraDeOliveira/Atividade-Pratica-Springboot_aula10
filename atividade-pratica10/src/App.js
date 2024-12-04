import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import SwipeableTemporaryDrawer from "./pages/Menu/SwipeableSideDrawer.jsx";

function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <p><strong>Menu lateral vindo do Material UI </strong></p>
        <strong><SwipeableTemporaryDrawer /></strong>
      </div>
      <Header />
      <ListarTarefa />
    </div>
  );
}
export default App;
