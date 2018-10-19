export const UiAction = {
  START_LOAD_DATA: 'START_LOAD_DATA',
  END_LOAD_DATA: 'END_LOAD_DATA'
};

const getUiActions = () => ({
  onStartLoadData: () => ({ type: UiAction.START_LOAD_DATA }),
  onEndLoadData: () => ({ type: UiAction.END_LOAD_DATA })
});

export default getUiActions;
