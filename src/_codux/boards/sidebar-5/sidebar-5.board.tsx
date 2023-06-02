import { createBoard } from '@wixc3/react-board';
import { Sidebar5 } from '../../../components/sidebar-5/sidebar-5';

export default createBoard({
    name: 'Sidebar5',
    Board: () => <Sidebar5 />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
