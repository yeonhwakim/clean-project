export type Item = { 
  task: string;
};

const createItem = (item: Item) => {
  const items = JSON.parse(localStorage.getItem("items") || "[]")
  localStorage.setItem("items", JSON.stringify([...items, {...item, userId: 1, id: items.length + 1}])); 
};

export const events = { createItem };
