import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    {name: 'Michael C.', salary: '1300', increase: false, id: 1},
    {name: 'Adam B.', salary: '3000', increase: true, id: 2},
    {name: 'Mike E.', salary: '4100', increase: false, id: 3},
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm />
    </div>
  )
}

export default App;