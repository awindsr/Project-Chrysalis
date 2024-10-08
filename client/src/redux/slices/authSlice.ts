import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    email: string;
    role: 'admin' | 'member';
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ email: string; password: string }>) {
            // Simulate login logic
            const { email } = action.payload;
            state.user = { email, role: 'member' };
            state.isAuthenticated = true;
        },
        signup(state, action: PayloadAction<{ email: string; password: string; }>) {
            // Simulate signup logic
            const { email } = action.payload;
            state.user = { email, role:"member" };
            state.isAuthenticated = true;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
