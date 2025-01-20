import { FC, useCallback, useMemo } from 'react';
import PurchaseTable from '@components/PurchaseTable';
import PurchaseCard from '@components/PurchaseCard';
import { useWindowResize } from '@hooks/useWindowResize';
import { useDataApi } from '@hooks/useDataAPI';
import { transfromPurchaseResponse } from 'src/common/utils';
import { PurchaseItem } from 'src/common/types';
import { API_URL } from 'src/common/constants';

export const PurchaseList: FC = () => {
  const [width] = useWindowResize();
  const tranformFn = useCallback(
    (data: any) => transfromPurchaseResponse(data),
    []
  );
  // Currently all data is fetched and renderd at once
  // ideally we would write a usePagination hook that allows us
  // to query data page wise and we can use a page navigation footer in
  // table view and some sort of infinity scroll in the mobile/card view
  // Also, I have not handled any actions in this exercise due to lack of time
  // Loading and error states are not handled
  const [{ data, loading }] = useDataApi(API_URL, [], tranformFn);

  const renderCards = useMemo(
    () =>
      data.map((purchase) => (
        <PurchaseCard key={purchase?.id} purchase={purchase as PurchaseItem} />
      )),
    [data]
  );

  /**
   * The table and card views have significantly different Layout,
   * Interactions and Responsive behavior
   * considering this I am going with separate components for both views
   * which is decided based on the window size using the useWindowSize hook
   */
  const renderContent = useMemo(
    () => (
      <div id="container">
        <h1>Purchases</h1>
        {width > 760 ? (
          <PurchaseTable purchases={data as Array<PurchaseItem>} />
        ) : (
          renderCards
        )}
      </div>
    ),
    [width, renderCards]
  );

  // when loading show loading text else render purchase data
  return loading ? 'Loading ... ' : renderContent;
};
