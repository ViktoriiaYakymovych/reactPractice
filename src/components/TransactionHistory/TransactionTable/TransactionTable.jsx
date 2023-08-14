import { TableData } from '../TransactionData/TransactionData';

export const TransactionTable = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableData item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
