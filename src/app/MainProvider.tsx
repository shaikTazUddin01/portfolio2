"use client";
import { persistor, store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <div>
        {children}
        <Toaster />
      </div>
      </PersistGate>
    </Provider>
  );
};

export default MainProvider;
