export const removeItem = () => (items, id) => {
  debugger;
  if (items[id]?.quantity === 1) {
    delete items[id];
  }
  if (items[id]?.quantity > 1) {
    items[id].quantity--;
  }

  return items;
};
