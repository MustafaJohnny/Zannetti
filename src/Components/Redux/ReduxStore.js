import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  showSecondButton: false,
  showFirstButton: false,
  showThirdButton: false,
  showCartModal: false,
  showBasket: false,
  showModal: false,
  totalOldPrice: 0,
  basketNumber: 0,
  totalPrice: 0,
  totalSale: 0,
  userName: "",
  userNumber: "",
  userAddress: "",
  showSuccessMessage: false,
};

const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },

    toggleShowCart(state) {
      state.showCartModal = !state.showCartModal;
    },

    toggleShowBasket(state) {
      state.showBasket = !state.showBasket;
    },

    toggleShowButton1(state) {
      state.showFirstButton = true;
    },

    toggleHideButton1(state) {
      state.showFirstButton = false;
    },

    toggleShowButton2(state) {
      state.showSecondButton = true;
    },

    toggleHideButton2(state) {
      state.showSecondButton = false;
    },

    toggleShowButton3(state) {
      state.showThirdButton = true;
    },

    toggleHideButton3(state) {
      state.showThirdButton = false;
    },

    updateTotalPrice(state, actions) {
      state.totalPrice = state.totalPrice + actions.payload;
    },

    updateOldPrice(state, actions) {
      state.totalOldPrice = state.totalOldPrice + actions.payload;
    },

    updateSalePrice(state, actions) {
      state.totalSale = state.totalSale + actions.payload;
    },

    updateBasketNumber(state, actions) {
      state.basketNumber = state.basketNumber + actions.payload;
    },

    initBasketNumber(state) {
      state.basketNumber = 0;
    },

    initOrdersSummary(state) {
      state.totalPrice = 0;
      state.totalOldPrice = 0;
      state.totalSale = 0;
    },

    getUserData(state, actions) {
      state.userName = actions.payload.userName;
      state.userNumber = actions.payload.userNumber;
      state.userAddress = actions.payload.userAddress;
    },

    toggleSuccessMessage(state) {
      state.showSuccessMessage = !state.showSuccessMessage;
    },
  },
});

const store = configureStore({
  reducer: {
    controler: controlSlice.reducer,
  },
});

export const controlActions = controlSlice.actions;

export default store;
