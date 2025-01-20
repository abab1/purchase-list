import { FC } from 'react';
import { PurchaseItem } from 'src/common/types';
import './styles.css';

interface PurchaseCardProps {
  purchase: PurchaseItem;
}

const PurchaseCard: FC<PurchaseCardProps> = ({ purchase }) => {
  // Destructure object
  const { id, name, location, price, purchaseDate, description } = purchase;
  return (
    <div className="purchase-card" key={id} data-testid={`purchase-card-${id}`}>
      <div className="card-header">
        <div>
          <img src={location} alt="logo" className="card-logo" />
          <span className="bold-800 company-name">{name}</span>
        </div>
        <span className="bold-800">{`$${price}`}</span>
      </div>
      <div className="card-description">{description}</div>
      <div className="bold-600">Purchase Date</div>
      <span>{purchaseDate}</span>
    </div>
  );
};

export default PurchaseCard;
