import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [], // Array of Objs with marketId
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.ADD_MARKET:
      // increment lastMarketId and totalMarkets counters
      const lastMarketId = state.lastMarketId + 1, totalMarkets = state.totalMarkets + 1;
      // create the new market object from provided data
      const newMarket = {
        marketId: lastMarketId,
        location: state.newLocation,
        cards: 1,
        percentOfTotal: state.totalCards
      };

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);

      // return updated state
      return {
        ...state,
        totalCards: state.totalCards + 1,
        marketList,
        lastMarketId,
        totalMarkets,
      };
    case types.SET_NEW_LOCATION: 
      // need to write cases here
      const location = action.payload;
      return {
        ...state,
        newLocation: location
      }
    case types.ADD_CARD: 
      // need to write cases here
      const totalCards = state.totalCards + 1;
      const _marketList = [].concat(state.marketList);
      for (let i = 0; i < _marketList.length; i++) {
        const marketItem = _marketList[i]
        if (marketItem.marketId === action.payload) {
          const copyMarketItem = Object.assign({}, marketItem);
          const cards = copyMarketItem.cards + 1;
          const percentOfTotal = cards / totalCards * 100;
          copyMarketItem.cards = cards;
          copyMarketItem.percentOfTotal = percentOfTotal;
          _marketList[i] = copyMarketItem;
          break;
        }
      }
      return {
        ...state,
        totalCards,
        marketList: _marketList
      }
    case types.DELETE_CARD: 
      const _totalCards = state.totalCards - 1;
      const __marketList = [].concat(state.marketList);
      for (let i = 0; i < __marketList.length; i++) {
        const marketItem = __marketList[i]
        if (marketItem.marketId === action.payload) {
          const _copyMarketItem = Object.assign({}, marketItem);
          const _cards = _copyMarketItem.cards - 1;
          const _percentOfTotal = _cards / _totalCards * 100;
          _copyMarketItem.cards = _cards;
          _copyMarketItem.percentOfTotal = _percentOfTotal;
          __marketList[i] = _copyMarketItem;
          break;
        }
      }
      return {
        ...state,
        totalCards: _totalCards,
        marketList: __marketList
      }

    case types.UPDATE_STATE:
      return action.payload.markets;
    default: {
      return state;
    }
  }
};

export default marketsReducer;
