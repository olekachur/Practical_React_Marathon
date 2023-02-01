import axios from 'axios';
import getGitHubUser from '../services/DataService/index';

jest.mock('axios');

describe('fetch users', () => {

    test('should test users', async () => {
        const userData = { login: 'test-user', type: 'User' };
        const response = { data: userData };
        axios.get.mockResolvedValueOnce(response);

        const result = await getGitHubUser();
        expect(result.data).toEqual(userData);
    });

});
