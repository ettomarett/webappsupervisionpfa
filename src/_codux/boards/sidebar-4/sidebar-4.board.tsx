import { createBoard } from '@wixc3/react-board';
import { Sidebar4 } from '../../../components/sidebar-4/sidebar-4';

export default createBoard({
    name: 'Sidebar4',
    Board: () => <Sidebar4 />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
