import user from '../../api/__mocks__/user.js';

export default async () => {
    try {
        const res = await user();
    } catch (error) {
        throw Error(error);
    }
};
