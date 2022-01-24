import { proxy, snapshot } from "valtio";

const store = proxy({
  token: null,
  userInfo: null,
  nowPlaying: "",
  canPlay: false,
  course: {},
  isActive: false,
  component: "",
  courses: [],
  cover: "",
  usePaystack: false,
  useStripe: false,
  order: {},
  country: "",
});

const actions = (action, state = snapshot(store)) => {
  switch (action.type) {
    case "SET_USER":
      store.userInfo = action.payload.user;
      store.token = action.payload.token;
      break;

    case "NOW_PLAYING":
      store.nowPlaying = action.payload.video;
      store.canPlay = action.payload.canPlay;
      store.cover = action.payload.cover;
      break;

    case "SET_COUNTRY":
      store.country = action.payload;
      break;

    case "AUTHENICATE_USER":
      store.canPlay = true;
      break;

    case "LOAD_COURSE":
      store.course = action.payload;
      break;

    case "OPEN":
      store.isActive = true;
      store.component = action.payload;
      break;

    case "CLOSE":
      store.isActive = false;
      break;

    case "PAYSTACK":
      store.usePaystack = true;
      break;

    case "STRIPE":
      store.useStripe = action.payload;
      break;

    case "SET_STRIPE":
      store.order = action.payload;
      break;

    case "NEW_LESSON":
      store.course = {
        ...state.course,
        lessons: [...state.course.lessons, action.payload],
      };
      break;

    default:
      return state;
  }
};

export default store;
export { actions };
