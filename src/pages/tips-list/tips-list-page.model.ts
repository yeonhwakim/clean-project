import { tipsModel } from "@/entities/tips";
import { createStore } from "zustand";
import { devtools, type DevtoolsOptions } from 'zustand/middleware';

const initialTipsListFilterState: tipsModel.State = {
  pageQuery: { limit: 10, offset: 0 },
  filterQuery: {}
}

const tipsListFilterStoreDevtoolsOptions: DevtoolsOptions = {
  name: 'TipsPage FilterStore',
};

export const tipsListFilterStore = createStore<tipsModel.FilterState>()(
  devtools(
    tipsModel.createArticleFilterSlice(initialTipsListFilterState),
    tipsListFilterStoreDevtoolsOptions,
  )
);
