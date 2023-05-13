import * as React from 'react';

import { MyContext } from './MyContext';

export default function MyProvider({children}) {
  return (
    <div >
      <MyContext.Provider value={{name: 'Julieta'}}>
        { children }
      </MyContext.Provider>
    </div>
  );
}
