import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data));

  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$12.000,00</td>
            <td>Devlopment</td>
            <td>12/01/2023</td>
          </tr>
          <tr>
            <td>Alguel</td>
            <td className="withdraw">-R$1.000,00</td>
            <td>Casa</td>
            <td>12/01/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
