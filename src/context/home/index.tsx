import React from "react";
import { IHomeContext } from "./interface";
import User from "../../types/user";

const HomeContext = React.createContext<IHomeContext>({
  // Attributes
  user: undefined,

  // React useState Methods
  setUser: () => {},
});

export const HomeContextProvider: React.FC<any> = (props: any) => {
  // Attributes
  const [user, setUser] = React.useState<User | undefined>(undefined);

  // Methods
  const values = {
    user,
    setUser,
  };

  const memo = React.useMemo(() => values, [user]);

  return (
    <HomeContext.Provider value={memo}>
      {props.children}
    </HomeContext.Provider>
  );
};

export function useHomeProvider(): IHomeContext {
  const context = React.useContext(HomeContext);
  if (!context)
    throw new Error("useHomeProvider have to be inside of the All Project ICO");
  return context;
}