import { useChecklistStore } from '../../entities/checklist/model';

export const actions = {
  toggleTask: useChecklistStore.getState().toggleTask
}