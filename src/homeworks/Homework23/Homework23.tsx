import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";

import Input from "components/Input";
import Button from "components/Button";

import {
  CreatePersonCard,
  Homework23Wrapper,
  PersonCard,
  PersonInfoBig,
  PersonInfoContainer,
  PersonInfoSmall,
} from "./styles";

interface UserInfo {
  name: string;
  lastName: string;
  ageValue: string;
  jobPosition: string;
}

function Homework23() {
  const [nameValue, setNameValue] = useState<string>("");
  const [lastNameValue, setLastNameValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");
  const [jobPositionValue, setJobPositionValue] = useState<string>("");
  // Создадим state, который решает когда нам карточку показывать, а когда нет
  const [isShowCard, setIsShowCard] = useState<boolean>(false);
  // Создаем контейнер(стейт), в котором будет храниться информация для карточки,
  // чтобы она туда добавлялась только на onClick
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    lastName: "",
    ageValue: "",
    jobPosition: "",
  });

  // const onChangeNameValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setNameValue(event.target.value);
  // };

  // const onChangeLastNameValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setLastNameValue(event.target.value);
  // };

  // const onChangeAgeValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAgeValue(event.target.value);
  // };

  // const onChangeJobPositionValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setJobPositionValue(event.target.value);
  // };

  const onChangeFieldsValue = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: Dispatch<SetStateAction<string>>
  ) => {
    setFieldValue(event.target.value);
  };

  return (
    <Homework23Wrapper>
      <CreatePersonCard>
        <Input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setNameValue)
          }
          value={nameValue}
          labelName="Имя"
          placeholder="Иван"
        />
        <Input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setLastNameValue)
          }
          value={lastNameValue}
          labelName="Фамилия"
          placeholder="Василевский"
        />
        <Input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setAgeValue)
          }
          value={ageValue}
          labelName="Возраст"
          placeholder="25"
        />
        <Input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeFieldsValue(event, setJobPositionValue)
          }
          value={jobPositionValue}
          labelName="Должность"
          placeholder="Старший специалист"
        />
        <Button
          name="Создать"
          onClick={() => {
            // Если все значения у нас не пустые, то показываем карточку
            if (
              !!nameValue &&
              !!lastNameValue &&
              !!ageValue &&
              !!jobPositionValue
            ) {
              setUserInfo({
                name: nameValue,
                lastName: lastNameValue,
                ageValue: ageValue,
                jobPosition: jobPositionValue,
              });
              setIsShowCard(true);
            } else {
              // Показываем alert если хотя бы одно из полей пустое
              alert("Введите данные во все поля");
            }
          }}
        />
      </CreatePersonCard>
      {isShowCard && (
        <PersonCard>
          <PersonInfoContainer>
            <PersonInfoSmall>Имя</PersonInfoSmall>
            <PersonInfoBig>{userInfo.name}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Фамилия</PersonInfoSmall>
            <PersonInfoBig>{userInfo.lastName}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Возраст</PersonInfoSmall>
            <PersonInfoBig>{userInfo.ageValue}</PersonInfoBig>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonInfoSmall>Должность</PersonInfoSmall>
            <PersonInfoBig>{userInfo.jobPosition}</PersonInfoBig>
          </PersonInfoContainer>
        </PersonCard>
      )}
    </Homework23Wrapper>
  );
}

export default Homework23;
