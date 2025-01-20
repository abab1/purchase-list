import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MOCK_PURCHASE_DATA } from 'src/common/constants';
import PurchaseTable from '.';

describe('Purchase Table tests', () => {
  it('should render all details correctly', async () => {
    render(
      <PurchaseTable
        purchases={[
          {
            ...MOCK_PURCHASE_DATA[0],
            purchaseDate: 'December 26, 2020',
            price: 998.82
          }
        ]}
      />
    );
    await screen.queryByTestId('purchase-table');
    screen.getByAltText('logo');
    screen.getByText('December 26, 2020');
    screen.getByText('$998.82');
    screen.getByText('auxiliary generating microchip');
    screen.getByText('Food');
  });
});
