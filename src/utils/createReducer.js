import produce from 'immer';

export const createReducer = (initialState, handlers) => (
  state = initialState,
  { type, payload }
) => produce(state, (draftState) => {
  if (handlers[type]) handlers[type](draftState, payload);
});
