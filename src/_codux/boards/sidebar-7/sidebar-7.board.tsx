import { createBoard } from '@wixc3/react-board';
import { Sidebar7 } from '../../../components/sidebar-7/sidebar-7';

export default createBoard({
    name: 'Sidebar7',
    Board: () => <Sidebar7 />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
