import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MOCK_PURCHASE_DATA } from 'src/common/constants';
import PurchaseCard from '.';

describe('Purchase Card tests', () => {
  it('should render all details correctly', async () => {
    render(
      <PurchaseCard
        purchase={{
          ...MOCK_PURCHASE_DATA[0],
          purchaseDate: 'December 26, 2020',
          price: 998.82,
        }}
      />
    );
    await screen.queryByTestId('purchase-card-1');
    screen.getByAltText('logo');
    screen.getByText('December 26, 2020');
    screen.getByText('$998.82');
    screen.getByText('auxiliary generating microchip');
    const categoryText = screen.queryByText('Food');
    expect(categoryText).toBeNull();
  });
});
