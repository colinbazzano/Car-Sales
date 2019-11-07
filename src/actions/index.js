//action suite: action types, action creators, actions

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const BUY_ITEM = 'BUY_ITEM';

export const removeFeature = item => ({
    type: REMOVE_FEATURE, payload: item
});

export const buyItem = item => ({
    type: BUY_ITEM, payload: item
});