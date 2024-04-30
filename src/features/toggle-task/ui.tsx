import { Checkbox } from '@/shared/ui/checkbox';
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
    <div className="flex items-center space-x-2">
      <Checkbox onClick={() => toggleItemModel.actions.toggleTask(itemId)} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {task.isChecked ? '완료' : '미완료'}
      </label>
    </div>
  )
}