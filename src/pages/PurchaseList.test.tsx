import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PurchaseList } from './PurchaseList';
import { API_URL, MOCK_PURCHASE_DATA } from 'src/common/constants';

const server = setupServer(
  http.get(API_URL, () => {
    return HttpResponse.json(MOCK_PURCHASE_DATA);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Purchase list tests', () => {
  it('should render loading message initially', async () => {
    render(<PurchaseList />);
    await screen.findByText('Loading ...');
  });

  it('should render table view when width > 760', async () => {
    render(<PurchaseList />);
    const table = await screen.findByTestId('purchase-table');
    expect(table).toBeInTheDocument();
    const card = screen.queryByTestId('purchase-card-1');
    expect(card).toBeNull();
  });

  it('should render card view when width <= 760', async () => {
    window.innerWidth = 760;
    window.innerHeight = 800;
    window.dispatchEvent(new Event('resize'));
    render(<PurchaseList />);
    const card = await screen.findByTestId('purchase-card-1');
    expect(card).toBeInTheDocument();
    const table = await screen.queryByTestId('purchase-table');
    expect(table).toBeNull();
  });

  it('should render card view when width == 761', async () => {
    window.innerWidth = 761;
    window.innerHeight = 800;
    window.dispatchEvent(new Event('resize'));
    render(<PurchaseList />);
    const table = await screen.findByTestId('purchase-table');
    expect(table).toBeInTheDocument();
    const card = screen.queryByTestId('purchase-card-1');
    expect(card).toBeNull();
  });
});
