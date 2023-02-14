import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import Icred from '../../models/cred';
import { login , register} from './loginAPI';
import jwt_decode from "jwt-decode";

export interface LoginState {
 looged : boolean
 access : string
 username:string
 registered : boolean
}

const initialState: LoginState = {
  looged: false,
  access: '',
  username: '',
  registered: false
};

export const registerAsync = createAsyncThunk(
  'login/register',
  async (reg : Icred) => {
    const response = await register(reg);
    return response.data;
  }
);


export const loginAsync = createAsyncThunk(
  'login/login',
  async (cred: Icred) => {
    const response = await login(cred);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.looged = false;
      state.access = ''
    },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
      state.looged = true
      //  console.log(action.payload)
       state.access = action.payload.access
      // jwt_decode -  packege that enables access to pablic token part (can be seen at jwt_decode site)
       state.username = jwt_decode<any>(state.access).username
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
       state.registered = true
        
        })
  },
});

export const { logout } = loginSlice.actions;

export const selectLooged = (state: RootState) => state.login.looged;
export const selectAccess = (state: RootState) => state.login.access;
export const selectUsername = (state: RootState) => state.login.username;
export const selectRegistered = (state: RootState) => state.login.registered;


export default loginSlice.reducer;
