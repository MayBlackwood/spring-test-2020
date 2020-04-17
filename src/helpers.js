export const addDisabledCardId = (id, deletedDate) => {
  const ids = JSON.parse(localStorage.getItem("disabledCardIds")) || [];

  ids.push({ id, deletedDate });
  localStorage.setItem("disabledCardIds", JSON.stringify(ids));
};

export const getDisabledCardsIds = () =>
  JSON.parse(localStorage.getItem("disabledCardIds")) || [];

export const restoreDisabledCardId = (id) => {
  const ids = JSON.parse(localStorage.getItem("disabledCardIds")) || [];

  const newIds = ids.filter((item) => item.id !== id);
  localStorage.setItem("disabledCardIds", JSON.stringify(newIds));
};
