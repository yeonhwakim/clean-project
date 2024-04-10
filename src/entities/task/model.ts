import { Task } from '../../shared/typing';

const tasks: Task[] = [
  {
    id: '1',
    checklist_id: '1',
    title: '욕실 청소',
    isChecked: false,
  },
  {
    id: '2',
    checklist_id: '1',
    title: '방 청소',
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
