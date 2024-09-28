import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../../Utils/Loading";

// Lazy load client pages
const HomePage = React.lazy(() => import("../../Pages/client/Index"));

function ClientRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </Suspense>
  );
}

export default ClientRoutes;
