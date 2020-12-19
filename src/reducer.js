export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //remove after finish development
    //token:'BQDWmDLkjeE-uSmDQGlvJ7vxjAAJCVhZEF1DzgGGxYwXGCdqdvLc6N6-K5SKt9wMre-FuCfHHNYSTCT8dzsGZ9n1FSrpoIVkdn4JFE9mQNUevD3dNIEbpkZ3gc7HvYD9thV7UDVTsMSWgXv_4dcwU1xddS2CGSiyZ6od-50d8q3oJrTe',
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
        
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
        
        case "SET_PLAYLISTS":
    return{
        ...state,
        playlists:action.playlists
    }  
  
        default:
        return state;
    }
  };
  
  export default reducer;