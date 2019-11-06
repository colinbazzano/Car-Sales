//action suite: action types, action creators, actions

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const BUY_ITEM = 'BUY_ITEM';

export const removeFeature = () => ({
    type: REMOVE_FEATURE
});

export const buyItem = () => ({
    type: BUY_ITEM
});