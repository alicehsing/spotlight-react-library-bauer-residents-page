import DataGrid from 'react-data-grid';
import data from './data';
import './App.css';
import { generateColumns, getTotalUserOfEachCarMake } from './data-utils';
import { VictoryBar, VictoryChart, } from 'victory';
import { VictoryTheme } from 'victory';


export default function App() {
  return (
    <><div>
      <DataGrid
        columns={generateColumns(data)}
        rows={data} />
    </div>
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}>
        <VictoryBar
          style={{ data: { fill: '#c43a31' } }}
          data={getTotalUserOfEachCarMake(data)}
        />
      </VictoryChart>  
    
    </div></>
  );
}