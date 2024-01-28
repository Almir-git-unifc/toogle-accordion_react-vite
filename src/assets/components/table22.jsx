import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const table22 = () => {
  return (
   <div>
        <h4>Titulo real da tabela</h4>
        <div>
        <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>A Fazer</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr data-id="01" className="expandable">
        <td>01</td>
        <td>B.M.C</td>
        <td>Checado</td>
      </tr>
      <tr className="details">
        <td colSpan="3">Business Model Canvas</td>
      </tr>

      
    </tbody>
  </table>
        </div>
    </div>
  )
}

export default table22
