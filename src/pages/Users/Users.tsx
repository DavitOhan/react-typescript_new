import {useNavigate}  from "react-router-dom";
import Button from 'components/Button';
import {UsersWrpapper} from './styles';

function Users () {

    const navigate=useNavigate();

    const goToHomePage= ()=>{
    navigate("/");
    };
    return <UsersWrpapper>Users
        <Button name='Go to Home page' onClick={goToHomePage}/>
    </UsersWrpapper>
}

export default Users;