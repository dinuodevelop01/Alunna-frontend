import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// function useRouterQueryParams() {
//   // call it inside useEffect ?? but it might need before mounted.
//     return new URLSearchParams(useLocation().search);
// }

function useRouterQueryParams() {
  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  return queryParams;
}

export default useRouterQueryParams;