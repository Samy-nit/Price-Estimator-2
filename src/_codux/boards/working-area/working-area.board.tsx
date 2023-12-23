import { createBoard } from '@wixc3/react-board';
import { WorkingArea } from '../../../components/working-area/working-area';

export default createBoard({
    name: 'WorkingArea',
    Board: () => <WorkingArea />,
    isSnippet: true,
});
