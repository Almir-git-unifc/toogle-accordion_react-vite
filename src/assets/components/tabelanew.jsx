import './style.css';
import 'bootstrap/dist/css/bootstrap.css';


const tabelanew = () => {

    const expandables = document.querySelectorAll(".expandable");

    const detailsMap = {};
    
    for (const expandable of expandables) {
      const details = expandable.nextElementSibling;
      detailsMap[expandable] = details;
    
      expandable.addEventListener("click", function () {
        const details = detailsMap[this];
        details.classList.toggle("expanded");
    
        // Inserir o elemento details após o elemento expandable
        this.parentNode.insertBefore(details, this.nextSibling);
      });
    }

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
      
      
      <tr data-id="02" className="expandable">
        <td>02</td>
        <td>Requisitos</td>
        <td>Checado</td>
      </tr>
      <tr className="details">
        <td colSpan="3">Documento de Requisitos</td>
      </tr>
      
      <tr data-id="03" className="expandable">
        <td>03</td>
        <td>Análise de Mercado</td>
        <td>Pendente</td>
      </tr>
      <tr className="details">
        <td colSpan="3">Estudo de mercado completo</td>
      </tr>
      
      <tr data-id="04" className="expandable">
        <td>04</td>
        <td>Protótipo</td>
        <td>Em andamento</td>
      </tr>
      <tr className="details">
        <td colSpan="3">Protótipo funcional disponível</td>
      </tr>
      
      
      <tr data-id="05" className="expandable">
        <td>05</td>
        <td>Desenvolvimento</td>
        <td>Pendente</td>
      </tr>
      <tr className="details">
        <td colSpan="3">Desenvolvimento da aplicação em andamento</td>
      </tr>
      
      <tr data-id="06" className="expandable">
        <td>06</td>
        <td>Testes</td>
        <td>Pendente</td>
      </tr>
      <tr className="details">
        <td colSpan="3">Testes unitários e de integração realizados</td>
      </tr>
      
      
      <tr data-id="07" className="expandable">
        <td>07</td>
        <td>Implantação</td>
        <td>Pendente</td>
      </tr>
      <tr className="details">
        <td colSpan="3">Aplicação implantada em ambiente de produção</td>
      </tr>
      <tr data-id="08" className="expandable">
        <td>08</td>
        <td>Manutenção</td>
        <td>Pendente</td>
      </tr>
      <tr className="details">
        <td colSpan="3">Correções de bugs e novas funcionalidades em desenvolvimento</td>
      </tr>
    </tbody>
  </table>
        </div>
    </div>
  )
}

export default tabelanew