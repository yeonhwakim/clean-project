import { Task } from '../../shared/typing/server';

const tasks: Task[] = [
  {
    id: '1',
    checklistId: '1',
    name: '욕실 청소',
    isChecked: false,
  },
  {
    id: '2',
    checklistId: '1',
    name: '방 청소',
    isChecked: false,
  }
]

export const useTask = (itemId: string) => {
  return tasks.find(item => item.id === itemId);
}

export const updateTaskCheckState = (itemId: string) => {
  const task = tasks.find(i => i.id === itemId);
  
  if (!task) {
    throw new Error('item not found');
  }

  task.isChecked = !task.isChecked;
}
