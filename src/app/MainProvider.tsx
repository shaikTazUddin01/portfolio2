'use client'
import { store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
      <Provider store={store}>
    <div>
        {children}
      <Toaster/>
    </div>
      </Provider>
  );
};

export default MainProvider;
