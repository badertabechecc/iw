export const addItem = (items, item) => {
  if (items[item.Id]) {
    items[item.Id].quantity++;
  } else {
    items[item.Id] = { item, quantity: 1 };
  }

  return items;
};
