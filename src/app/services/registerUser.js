import user from '../../api/__mocks__/user.js';

export default async () => {
    try {
        const res = await user();
        console.log(res);
    } catch (error) {
        throw Error(error);
    }
};
