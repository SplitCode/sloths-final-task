import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Subcategories } from '../../components/Sidebar/Subcategories/Subcategories';

export enum Planets {
  earth = 'earth',
  venus = 'venus',
  mars = 'mars'
}
enum PlanetsColor {
  venus = 'rgb(255,219,75)',
  earth = 'rgb(31, 163, 240)',
  mars = 'rgb(197,42,9)'
}
export interface planetSliceState {
  planet: Planets;
  accentColor: PlanetsColor;
  subcategory: Subcategories | null;
}

const initialState: planetSliceState = {
  planet: Planets.earth,
  accentColor: PlanetsColor.earth,
  subcategory: null
};
export const planetSlice = createSlice({
  name: 'planet_slice',
  initialState,
  reducers: {
    setPlanet(state, action: PayloadAction<Planets>) {
      state.planet = action.payload;
      state.accentColor = PlanetsColor[action.payload];
    },
    setSubcategory(state: planetSliceState, action) {
      state.subcategory = action.payload;
    }
  }
});

export const setPlanet = planetSlice.actions.setPlanet;
export const setSubcategory = planetSlice.actions.setSubcategory;
