import { render, screen, waitFor } from '@testing-library/react';
import App from '../components/App';
import Info from '../components/Info';

jest.mock('../components/Info');

describe("<App />", () => {

    test('check if <h1>Hello World!</h1> renders', () => {
        render(<App />);
        const data = screen.getByText('Hello World!');
        expect(data).toBeInTheDocument();
    });

    test('check if <Info /> renders', async () => {
        render(<App />);
        await waitFor(() => expect(Info).toHaveBeenCalledTimes(2));
    });

});

// jest.mock('../componets/Info', () => {
//     return function MockInfo(props) {
//         return <div>{props.user}</div>;
//     };
// });

// test('check if <Info /> renders', async () => {
//     render(<App />);

//     const user1 = await screen.findByText("yurkovskiy");
//     expect(user1).toBeInTheDocument();

//     const user2 = await screen.findByText("mplesha");
//     expect(user2).toBeInTheDocument();
// });
