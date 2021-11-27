
import React, { Suspense, lazy } from 'react'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

const MainPage = lazy(() => import('../pages/MainPage'))

export const Routing = ():JSX.Element => {
  return(
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/home'} element={<MainPage />} />
          <Route path={'*'} element={<Navigate to={'/home'}/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}