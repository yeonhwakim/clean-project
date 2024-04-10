export type TasksDao = {
  id: number;
  userId: number;
  name: string;
  description?: string;
};

const tasks = [
  {
    id: 1,
    userId: 1,
    name: "화장실청소",
  },
  {
    id: 2,
    userId: 1,
    name: "분리수거",
  },
  {
    id: 3,
    userId: 1,
    name: "설거지",
  },
  {
    id: 4,
    userId: 2,
    name: "화장실청소",
  },
  {
    id: 5,
    userId: 2,
    name: "분리수거",
  },
  {
    id: 6,
    userId: 3,
    name: "설거지",
  },
];

export const fetchItem = (userId: number) => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks.filter((item) => item.userId === userId))
  );
};
