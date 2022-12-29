import './App.css';
import Content from './component/Content';
import ItemContent from './component/ItemContent';
import Plans from './component/Plans';

function App() {

  const allData = [
    {
      title: "Aproveite na TV.",
      description: "Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
      side: "left",
      img: "tv",
    },

    {
      title: "Assista quando quiser.",
      description: "Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.",
      side: "right",
      img: "devicePile",
    },

    {
      title: "Crie perfis para crianças.",
      description: "Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.",
      side: "left",
      img: "kids",
    },

    {
      title: "Baixe séries para assistir offline.",
      description: "Disponível em todos os planos, exceto no Básico com anúncios.",
      side: "right",
      img: "mobile",
    },
  ]

  return (
    <div className="App">
      <Plans />
      <Content />
      {
        allData.map((item, index)=>(
          <ItemContent 
            title={item.title}
            description={item.description}
            side={item.side}
            img={item.img}
          />
        ))
      }
    </div>
  );
}

export default App;
