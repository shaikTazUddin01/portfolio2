'use client'
import { store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        {children}
      </Provider>
      <Toaster/>
    </div>
  );
};

export default MainProvider;
