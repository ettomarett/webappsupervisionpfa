import { createBoard } from '@wixc3/react-board';
import { RegistPage } from '../../../components/regist-page/regist-page';

export default createBoard({
    name: 'RegistPage',
    Board: () => <RegistPage />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
