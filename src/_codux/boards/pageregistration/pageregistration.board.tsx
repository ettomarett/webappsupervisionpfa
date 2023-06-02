import { createBoard } from '@wixc3/react-board';
import { Pageregistration } from '../../../components/pageregistration/pageregistration';

export default createBoard({
    name: 'Pageregistration',
    Board: () => <Pageregistration />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
