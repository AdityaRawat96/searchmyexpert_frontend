import { useContext } from 'react';
import SweetAlert from 'sweetalert-react/lib/SweetAlert';
import { UIContext } from '../context/UIContext';
import './SweetAlertComponent.scss';

const SweetAlertComponent = () => {
  const { uiState, updateUIState } = useContext(UIContext);
  return (
    <SweetAlert
      show={uiState.show}
      title={uiState.title ?? ''}
      text={uiState.text ?? ''}
      icon={uiState.icon ?? 'success'}
      showCancelButton={uiState.showCancel}
      onConfirm={() => {
        updateUIState({ show: false });
        if (uiState.confirmAction) {
          uiState.confirmAction();
        }
      }}
      onCancel={() => updateUIState({ show: false })}
    />
  );
};

export default SweetAlertComponent;
