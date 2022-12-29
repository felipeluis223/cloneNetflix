import './App.css';
import Content from './component/Content';
import Plans from './component/Plans';

function App() {
  return (
    <div className="App">
      <Plans />
      <Content />
      <section style={{width: "100%", height: 40, backgroundColor: "red"}}>segunda sessão</section>
    </div>
  );
}

export default App;
