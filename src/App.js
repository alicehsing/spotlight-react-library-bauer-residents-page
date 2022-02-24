import DataGrid from 'react-data-grid';
import data from './data';
import './App.css';
import { generateColumns, getTotalUserOfEachCarMake } from './data-utils';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { VictoryTheme } from 'victory';


export default function App() {
  return (
    <><div>
      <DataGrid
        columns={generateColumns(data)}
        rows={data} />
    </div>
    <div style={{ height: 1000 }} className="bar-chart">
      <h2>Total Number of Users Per Car Brand</h2>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 5 }}
        width={500}
        height={600}
      >
        <VictoryAxis
          dependentAxis={true}
          style={{
            grid: { stroke: 'grey' }
          }}
        />
        <VictoryAxis />
        <VictoryBar horizontal
          style={{ 
            data: { fill: '#c43a31' },
            labels: { fontSize: ({ text }) => text.length > 10 ? 8 : 10 }
          }}
          data={getTotalUserOfEachCarMake(data)}
          labels={({ datum }) => `${datum.y}`}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
        />
      </VictoryChart>  
    
    </div></>
  );
}