import { createBoard } from '@wixc3/react-board';
import { Sidebar9 } from '../../../components/sidebar-9/sidebar-9';

export default createBoard({
    name: 'Sidebar9',
    Board: () => <Sidebar9 />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
