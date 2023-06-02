import { createBoard } from '@wixc3/react-board';
import { Sidebar5 } from '../../components/sidebar-5/sidebar-5';
import { MaintenanceForm } from '../../components/maintenance-form/maintenance-form';

export default createBoard({
    name: '5th_page',
    Board: () => (
        <div>
            <MaintenanceForm />
            <Sidebar5 />
        </div>
    ),
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
