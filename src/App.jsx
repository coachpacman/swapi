import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((data) => {
      console.log(data);
    })
  })

  return (
    <div className='container-md'>
      <div className="row">
        <h1>Star Wars API</h1>
      </div>
      <div className="input-group">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary rounded-0 rounded-start" type="button">search characters</button>
        </div>
        <input type="text"className="form-control" placeholder="who?" name="" id="" />
      </div>
      <div className="table-responsive mt-5">
        <table className='table'>
          <thead>
            <tr>
              <th className='text-start'>Name</th>
              <th>Birth Date</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Homeworld</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            <tr>
              <td>Luke Skywalker</td>
              <td>19BBY</td>
              <td>172</td>
              <td>77</td>
              <td>https://swapi.dev/api/planets/1/</td>
              <td>not listed</td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">1</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">2</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">3</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default App
