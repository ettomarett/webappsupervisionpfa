import { createBoard } from '@wixc3/react-board';
import { Sidebar6 } from '../../../components/sidebar-6/sidebar-6';

export default createBoard({
    name: 'Sidebar6',
    Board: () => <Sidebar6 />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
