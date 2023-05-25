import { createContext, useState } from 'react';

export const UIContext = createContext();

const initial_state = {
  show: false,
  title: null,
  text: null,
  icon: 'success',
  showCancel: false,
  confirmAction: null,
};

export const UIContextProvider = (props) => {
  const [uiState, setUIState] = useState(initial_state);

  const updateUIState = (state) => {
    setUIState({ ...uiState, ...state });
  };

  return (
    <UIContext.Provider value={{ uiState, updateUIState }}>
      {props.children}
    </UIContext.Provider>
  );
};
