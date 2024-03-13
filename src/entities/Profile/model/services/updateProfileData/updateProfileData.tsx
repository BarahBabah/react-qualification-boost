import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, ThunkApi) => {
    const { extra, rejectWithValue, getState } = ThunkApi;

    const formData = getProfileForm(getState());

    const validateErrors = validateProfileData(formData);
    if (validateErrors.length) {
        return rejectWithValue(validateErrors);
    }
    try {
        const response = await extra.api.put<Profile>('/profile', formData);

        return response.data;
    } catch (e) {
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
});
