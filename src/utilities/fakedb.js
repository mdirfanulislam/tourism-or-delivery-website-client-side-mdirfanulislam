// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let amount_cart = {};
  if (!exists) {
    amount_cart[id] = 1;
  }
  else {
    amount_cart = JSON.parse(exists);
    if (amount_cart[id]) {
      const newCount = amount_cart[id] + 1;
      amount_cart[id] = newCount;
    }
    else {
      amount_cart[id] = 1;
    }
  }
  updateDb(amount_cart);
}

const getDb = () => localStorage.getItem('amount_cart');

const updateDb = cart => {
  localStorage.setItem('amount_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const amount_cart = JSON.parse(exists);
    delete amount_cart[id];
    updateDb(amount_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('amount_cart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }