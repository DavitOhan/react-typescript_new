import { ContentWrapper } from "./styles";
import { useContext } from "react";
import{MainContext} from"lessons/Lesson27/components/Main/Main";

// interface ContentProps {
//   userData: {
//     userName: string;
//     age: number;
//     email: string;
//   };


function Content() {
  const userData=useContext(MainContext);
  
  return (
    <ContentWrapper>
      <h3>Content Component</h3>
      <p>Username: {userData.userName}</p>
      <p>Age: {userData.age}</p>
      <p>Email: {userData.email}</p>
    </ContentWrapper>
  );
}

export default Content;
