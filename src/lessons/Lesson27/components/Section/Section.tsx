import { Content } from "lessons/Lesson27/components";

import { SectionWrapper } from "./styles";

// interface UserData {
//   userName: string;
//   age: number;
//   email: string;
// }

// interface SectionProps {
//   // как тип для userData можете использовать interface UserData
//   // а можете писать как тут в примере
//   userData: {
//     userName: string;
//     age: number;
//     email: string;
//   };
// }

function Section() {
  return (
    <SectionWrapper>
      <h2>Section component</h2>
      <Content  />
    </SectionWrapper>
  );
}

export default Section;
