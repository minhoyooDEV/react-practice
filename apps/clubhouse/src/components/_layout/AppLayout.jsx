import { GlobalHeader } from "./GlobalHeader";

/* eslint-disable react/prop-types */
export const AppLayout = ({ children }) => {
  return (
    <div className="mx-auto max-w-md h-full">
      <GlobalHeader />
      {children}
    </div>
  );
};
