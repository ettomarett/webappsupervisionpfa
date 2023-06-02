import { createBoard } from '@wixc3/react-board';
import { FormRegist } from '../../../components/form-regist/form-regist';

export default createBoard({
    name: 'FormRegist',
    Board: () => <FormRegist />
});
