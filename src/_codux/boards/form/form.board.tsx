import { createBoard } from '@wixc3/react-board';
import { Form } from '../../../components/form/form';

export default createBoard({
    name: 'Form',
    Board: () => <Form />,
    environmentProps: {
        windowWidth: 1444,
        canvasHeight: 5,
        windowHeight: 720,
    },
});
