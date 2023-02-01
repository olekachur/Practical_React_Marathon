import { render, screen, waitFor } from '@testing-library/react';
import Info from '../components/Info';
import getGitHubUser from '../services/DataService';

jest.mock('../services/DataService');

describe('<Info />', () => {

  test('display user info', async () => {
    const mockData = { login: 'test-user', type: 'User' };
    getGitHubUser.mockResolvedValueOnce({ data: mockData });
    render(<Info user='test-user' />);
    await waitFor(() => {
      Object.keys(mockData).forEach((key) => {
        expect(
          screen.getByText(`${key}: ${mockData[key]}`)).toBeInTheDocument();
      });
    });
  });

  test('error message after faild call', async () => {
    getGitHubUser.mockRejectedValueOnce({ error: "request error" });
    render(<Info user='test-user' />);
    await waitFor(() => {
      const error = screen.getByText(/request error/i);
      expect(error).toBeInTheDocument();
    });
  });

});
