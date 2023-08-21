export const selectStatusColor = (state: string) => {
  return state === 'online' ? 'green' : 'default';
};
