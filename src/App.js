import './App.css';
import Content from './component/Content';
import Help from './component/Help';
import ItemContent from './component/ItemContent';
import Plans from './component/Plans';
import allDataDescriptions from './datas/allDescriptions';

function App() {  
  return (
    <div className="App">
      <Plans />
      <Content />
      {
        allDataDescriptions.map((item, index)=>(
          <ItemContent 
            title={item.title}
            description={item.description}
            side={item.side}
            img={item.img}
            key={index}
          />
        ))
      }
      <Help />
    </div>
  );
}

export default App;
