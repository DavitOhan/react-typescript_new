import { useNavigate } from "react-router-dom";
import { ButtonWrapper, FacebookWrapper, Text } from "./styles";
import Button from "components/Button";

function Facebook() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <FacebookWrapper>
      <Text>
        Facebook is an online social media and social networking service owned
        by American technology giant Meta Platforms. Created in 2004 by Mark
        Zuckerberg with four other Harvard College students and roommates
        Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes,
        its name derives from the face book directories often given to American
        university students. Membership was initially limited to Harvard
        students, gradually expanding to other North American universities.
        Since 2006, Facebook allows everyone to register from 13 years old (or
        older), except in the case of a handful of nations, where the age limit
        is 14 years. As of December 2022, Facebook claimed 3 billion monthly
        active users. As of October 2023 Facebook ranked as the 3rd most visited
        website in the world with 22.56% of its traffic coming from the United
        States. It was the most downloaded mobile app of the 2010s.
      </Text>
      <ButtonWrapper>
        <Button name="Go back" onClick={goBack} />
      </ButtonWrapper>
    </FacebookWrapper>
  );
}

export default Facebook;
