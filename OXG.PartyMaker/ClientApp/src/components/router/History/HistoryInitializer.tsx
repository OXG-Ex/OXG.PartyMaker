import { useNavigate } from 'react-router-dom';
import { History } from './History';

export const HistoryInitializer = () => {
    History.navigate = useNavigate();
    debugger;
    return null;
};
