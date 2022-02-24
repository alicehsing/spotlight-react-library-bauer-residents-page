import DataGrid from 'react-data-grid';
import data from './data';
import './App.css';
import { generateColumns, getTotalUserOfEachCarMake, getGenderBreakdownOfToyotaOwners } from './data-utils';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryPie, VictoryLine } from 'victory';
import { VictoryTheme } from 'victory';


export default function App() {
  return (
    <><div className='resident-data'>
      <h1>Bauer Crest Residents Information</h1>
      <DataGrid
        columns={generateColumns(data)}
        rows={data} />
    </div>
    <div style={{ height: 1000 }} className="bar-chart">
      <h2>Number of Residents by Car Brand</h2>
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
      <h2>Gender Breakdown of Toyota Owners</h2>
      <VictoryPie
        colorScale={['tomato', 'gold', 'navy']}
        data={getGenderBreakdownOfToyotaOwners(data)}
        labels={({ datum }) => `${datum.x}: ${datum.y}`} 
      />
      
    </div></>
  );
}