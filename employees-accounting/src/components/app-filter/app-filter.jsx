import './app-filter.css';

function AppFilter() {
  return (
    <div className="btn-group">
      <button
        className="btn btn-light"
        type="button"
      >
        All employees
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
      >
        Awarded employees
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
      >
        Salary &gt; $1000
      </button>
    </div>
  )
}

export default AppFilter;