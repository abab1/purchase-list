import { FC } from 'react';
import { PURCHASE_LIST_HEADERS } from '../../common/constants';
import { PurchaseItem } from 'src/common/types';
import Tag from '@components/Tag';
import './styles.css';

interface PurchaseTableProps {
  purchases: Array<PurchaseItem>;
}

const PurchaseTable: FC<PurchaseTableProps> = ({ purchases }) => {
  return (
    <table id="purchase-table" data-testid="purchase-table">
      <thead>
        <tr>
          {PURCHASE_LIST_HEADERS.map((headerName: string) => (
            <th key={headerName}>{headerName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {purchases.map((purchaseItem: PurchaseItem) => {
          const {
            id,
            name,
            location,
            category,
            price,
            purchaseDate,
            description
          } = purchaseItem;
          return (
            <tr key={id}>
              <td>
                <b>{name}</b>
              </td>
              <td>
                <img src={location} alt="logo" className="logo" />
              </td>
              <td className="small-text">{purchaseDate}</td>
              <td>
                <Tag text={category} />
              </td>
              <td className="description small-text">{description}</td>
              <td>
                <b>{`$${price}`}</b>
              </td>
              <td>
                <div className="dot-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PurchaseTable;
