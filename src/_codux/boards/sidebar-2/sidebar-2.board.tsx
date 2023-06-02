import { createBoard } from '@wixc3/react-board';
import { Sidebar2 } from '../../../components/sidebar-2/sidebar-2';

export default createBoard({
    name: 'Sidebar2',
    Board: () => <Sidebar2 />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
