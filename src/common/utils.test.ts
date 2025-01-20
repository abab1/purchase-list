import { describe, expect, it } from 'vitest';
import { MOCK_PURCHASE_DATA } from 'src/common/constants';
import { transfromPurchaseResponse } from './utils.ts';

describe('utils tests', () => {
  it('transfromPurchaseResponse should tranform correctly', async () => {
    const transformedData = transfromPurchaseResponse(MOCK_PURCHASE_DATA)[0];
    expect(transformedData.price).toEqual(998.82);
    expect(transformedData.name).toEqual('auxiliary generating microchip');
    expect(transformedData.category).toEqual('Food');
    expect(transformedData.purchaseDate).toEqual('December 26, 2020');
    expect(transformedData.location).toEqual('https://picsum.photos/id/0/200');
    expect(transformedData.id).toEqual(1);
    expect(transformedData.description).toEqual(`connecting the card won't do anything, we need to back up the digital HDD driver!`);
  });
});
