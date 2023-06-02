import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'Log-in',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
