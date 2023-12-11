import { useNavigate } from "react-router-dom";
import { AppleWrapper, ButtonWrapper, Text } from "./styles";
import Button from "components/Button";

function Apple() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <AppleWrapper>
      <Text>
        Apple Inc. is an American multinational technology company headquartered
        in Cupertino, California. As of March 2023, Apple is the world's largest
        company by market capitalization, and with US$394.3 billion the largest
        technology company by 2022 revenue. As of June 2022, Apple is the
        fourth-largest personal computer vendor by unit sales; the largest
        manufacturing company by revenue; and the second-largest mobile phone
        manufacturer in the world. It is considered one of the Big Five American
        information technology companies, alongside Alphabet (parent company of
        Google), Amazon, Meta, and Microsoft.
      </Text>
      <ButtonWrapper>
        <Button name="Go back" onClick={goBack} />
      </ButtonWrapper>
    </AppleWrapper>
  );
}

export default Apple;
