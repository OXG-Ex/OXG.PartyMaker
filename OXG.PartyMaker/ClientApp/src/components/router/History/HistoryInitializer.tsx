import { useNavigate } from 'react-router-dom';
import { History } from './History';

export const HistoryInitializer = () => {
    //@ts-ignore
    History.navigate = useNavigate();

    return null;
};
