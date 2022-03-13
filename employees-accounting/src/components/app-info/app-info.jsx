import './app-info.css'

function AppInfo({employees, increased}) {
  return (
    <div className="app-info">
      <h1>Accounting of employees in the company LAZ</h1>
      <h2>Total count of employees: {employees}</h2>
      <h2>Employees will receive the award: {increased}</h2>
    </div>
  )
}

export default AppInfo;