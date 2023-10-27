export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // Remove the token value once done
    // token:"BQD6fNYTBZ4nTq2q4h1sBm1ooKYOOGcWabtD7tHn2rjkNWHq6ZgpEAzKAbQzt0zDXNApenVcADvgVooZQYzOtpgqWXTUWBcUgyKKqfr_Awo",
};

const reducer=(state,action)=>{
console.log(action);

switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user,
        };

        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists:action.playlists,
                };

             case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly:action.discover_weekly
                }

        default:
            return state;
            
        }
        };

        export default reducer;