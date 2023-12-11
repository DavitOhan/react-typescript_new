import { useState, createContext } from "react";
import { Section} from"lessons/Lesson27/components";
import { MainWrapper } from "./styles";

interface UserData{
userName:string;
sge:number;
email:string;
};

export const MainContext= createContext({
userName:``,
age:0,
email:``,
})
function Main(){
    const [userData,setUserData]=useState({
    userName: "Igor Igorevich",
    age:40,
    email:"exemple@exemple.com"
    });

return(
    <MainContext.Provider value={userData}>
    <MainWrapper>
    <h1>Main Component</h1>
    <Section />
    </MainWrapper>
    </MainContext.Provider>
    );
}
export default Main;