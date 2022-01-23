const actions = (state = state, action) => {
  switch (action.type) {
    case "NOW_PLAYING":
      return {
        ...state,
        nowPlaying: action.payload.video,
        canPlay: action.payload.canPlay,
        cover: action.payload.cover,
      };

    case "SET_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };

    case "AUTHENICATE_USER":
      return {
        ...state,
        canPlay: true,
      };

    case "LOAD_COURSE":
      return {
        ...state,
        course: action.payload,
      };

    case "OPEN":
      return {
        ...state,
        isActive: true,
      };

    case "CLOSE":
      return {
        ...state,
        isActive: false,
      };

    case "PAYSTACK":
      return {
        ...state,
        usePaystack: true,
      };

    case "STRIPE":
      return {
        ...state,
        useStripe: action.payload,
      };

    case "SET_STRIPE":
      return {
        ...state,
        order: action.payload,
      };

    case "NEW_LESSON":
      return {
        ...state,
        course: {
          ...state.course,
          lessons: [...state.course.lessons, action.payload],
        },
      };

    default:
      return state;
  }
};
