export type ItemDao = {
    id: number;
    userId: number;
    task: string;
    description?: string;
};

const items = [
  {
    id: 1,
    userId: 1,
    task: '화장실청소',
  },
  {
    id: 2,
    userId: 1,
    task: '분리수거',
  },
  {
    id: 3,
    userId: 1,
    task: '설거지',
  },
  {
    id: 4,
    userId: 2,
    task: '화장실청소',
  },
  {
    id: 5,
    userId: 2,
    task: '분리수거',
  },
  {
    id: 6,
    userId: 3,
    task: '설거지',
  },
]
 
export const fetchItem = (userId: number) => {
  localStorage.setItem("items", JSON.stringify(items.filter(item => item.userId === userId)));
}

 