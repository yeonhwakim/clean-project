import { createStore } from 'zustand';
import { DevtoolsOptions, devtools, PersistOptions, persist } from 'zustand/middleware';
import { checklistModel } from '@/entities/checklist';




const initialChecklistFilterState: checklistModel.State = {
  checklist: []
};

const checklistCreateStoreDevtoolsOptions: DevtoolsOptions = {
  name: 'HomePage CreateChecklistStore',
};

const persistOptions: PersistOptions<checklistModel.FilterState> = { name: 'create checklist session' };


export const checklistFilterStore = createStore<checklistModel.FilterState>()(
  devtools(persist(
    checklistModel.createChecklistFilterSlice(initialChecklistFilterState), persistOptions),
    checklistCreateStoreDevtoolsOptions,
  ),
);

export const onCreateChecklist = (name: string) => {
  checklistFilterStore.getState().add(name);
};