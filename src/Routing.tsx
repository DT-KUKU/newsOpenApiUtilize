import Loading from 'components/common/Loading';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const NewsLogin = React.lazy(() => import('./pages/NewsLogin'));
const NewsSearch = React.lazy(() => import('./pages/NewsSearch'));
const NewsHeadline = React.lazy(() => import('./pages/NewsHeadline'));

function Routing() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<NewsHeadline />}></Route>
        <Route path="/login" element={<NewsLogin />}></Route>
        <Route path="/news" element={<NewsSearch />}></Route>
      </Routes>
    </Suspense>
  );
}

export default Routing;
