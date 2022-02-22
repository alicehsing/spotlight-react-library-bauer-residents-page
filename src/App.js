import DataGrid from 'react-data-grid';
import data from './data';
import './App.css';
import { generateColumns } from './data-utils';

// function App() {
  
//   return (
//     <div className="App">
//     Hello World!
//     </div>
//   );
// }

// export default App;


export default function App() {
  return <DataGrid 
    columns={generateColumns(data)} 
    rows={data} />;
}