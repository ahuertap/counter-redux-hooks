import { createSelector } from 'reselect';

export const countSelector = createSelector(
  state => state.dummy,
  dummy => dummy.counter.current,
);
