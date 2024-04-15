import { Checkbox } from '../../shared/ui/checkbox';
import { checklistModel } from '../../entities/checklist';
import * as toggleItemModel from './model';

type ToggleItemProps = {
  itemId: number;
  withStatus?: boolean;
}

export const ToggleTask = ({ itemId }: ToggleItemProps) => {
  const task = checklistModel.selectors.useTask(itemId);

  if (!task) {
    return null;
  }
  
  return (
    <>
      <button onClick={() => toggleItemModel.actions.toggleTask(itemId)}>{task.isChecked ? '완료' : '미완료'}</button>
    </>
  )
}