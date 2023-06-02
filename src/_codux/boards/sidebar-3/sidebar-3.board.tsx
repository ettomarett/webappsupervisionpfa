import { createBoard } from '@wixc3/react-board';
import { Sidebar3 } from '../../../components/sidebar-3/sidebar-3';

export default createBoard({
    name: 'Sidebar3',
    Board: () => <Sidebar3 />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
