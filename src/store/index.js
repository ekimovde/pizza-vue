import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCount: 0,
    allPrice: 0,
    categories: [],
    cards: [],
  },
  mutations: {
    setArray(state, { elementState, data }) {
      state[elementState] = data;
    },
    setSelectBtn(state, { idCard, idBtn, typeBtn }) {
      state.cards = state.cards.map((card) => {
        if (card.idCard === idCard) {
          if (typeBtn === 0) {
            card.idActiveDough = idBtn;
          } else {
            card.idActiveDiameter = idBtn;
          }
        }
        return card;
      });
    },
    setCard(state, { idCard, card }) {
      state.cards[idCard] = card;
    },
    setCardCounter(state, { idCard, counter, price }) {
      state.cards[idCard].count += counter;
      state.cards[idCard].allPrice += price;
    },
    setAllCountAndPrice(state, { price, count }) {
      state.allPrice += price;
      state.allCount += count;
    },
    setCardDelete(state, idCard) {
      state.cards[idCard].count = 0;
      state.cards[idCard].allPrice = 0;
      state.cards[idCard].description = "";
    },
    setClearBasket(state) {
      state.cards = state.cards.map((card) => {
        card.count = 0;
        card.allPrice = 0;
        card.description = "";
        return card;
      });
      state.allCount = 0;
      state.allPrice = 0;
    },
  },
  actions: {
    setCard({ commit }, { idCard, card }) {
      const { idActiveDough, idActiveDiameter, dough, diameter, price } = card;

      card.count += 1;
      card.allPrice += price;

      const doughText = dough[idActiveDough].text.toLowerCase();
      const diameterText = diameter[idActiveDiameter].text.toLowerCase();
      const description = doughText + ", " + diameterText;
      card.description = description;

      commit("setCard", { idCard, card });
    },
  },
  getters: {
    getCards(state) {
      return state.cards;
    },
    getAllCountAndPrice(state) {
      return {
        allCount: state.allCount,
        allPrice: state.allPrice,
      };
    },
    getCategories(state) {
      return state.categories.length > 0 ? state.categories : [];
    },
  },
});
