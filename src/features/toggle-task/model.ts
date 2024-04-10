import { taskModel } from '../../entities/task';

// 상태 변경
const toggleTask = (itemId: string) => {
  taskModel.updateTaskCheckState(itemId);
}

export const events = { toggleTask };