import { checklistModel } from '../../entities/checklist';

// 상태 변경
const toggleTask = (itemId: number) => {
  checklistModel.updateTaskCheckState(itemId);
}

export const events = { toggleTask };