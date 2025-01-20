import dayjs from 'dayjs';

const decodeHTMLString = (str: string): string | null => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(
    `<!doctype html><body>${str}`,
    'text/html'
  );
  return dom.body.textContent;
};

export const transfromPurchaseResponse = (
  purchases: Array<Record<string, any>>
): Array<Record<string, any>> => {
  return purchases.map((purchase) => {
    const { id, name, location, category, description, price, purchaseDate } =
      purchase;
    return {
      id,
      name,
      location,
      category,
      description: decodeHTMLString(description), // to unescape the description
      price: Number((price / 100).toFixed(2)), // the high value of items suggests it is in cents so converting it dollars
      purchaseDate: dayjs(purchaseDate).format('MMMM DD, YYYY') // conversion to correct format using dayjs
    };
  });
};
