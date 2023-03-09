import { useRoutes } from "react-router-dom";
import Risk from '../pages/Risk/Risk';

export default function Router() {
let element = useRoutes([
    {
        path: "/", 
        element: <Risk /> 
    }
]);
return element;
}