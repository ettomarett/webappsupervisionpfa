import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/sidebar/sidebar';

export default createBoard({
    name: 'sidebar',
    Board: () => <Sidebar />,
    environmentProps: {
        windowHeight: 720,
        windowWidth: 1440,
    },
});
