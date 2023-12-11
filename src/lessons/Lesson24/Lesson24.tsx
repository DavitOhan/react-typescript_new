import { useState, useEffect, ChangeEvent } from "react";

import Input from "components/Input";

import { Lesson24Wrapper, Text, Card } from "./styles";

function Lesson24() {
  const [firstName, setFirstName] = useState<string>("");
  const[catFact,setCatFact]=useState<string|undefined>(undefined);
  const[catError,setCatError]=useState<string|undefined>(undefined);
  const lesson24: string = "Lesson 24";

  const onChangeFirstNameValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const getCatFacts= async()=>{
    const response= await fetch("https://catfact.ninja/fact");


console.log(response)
if(response.ok){
const data=await response.json();
console.log(data);
setCatFact(data.fact);

}else{
setCatError("Error during get cat gacts");
}
};

  // 1. Lifecycle: Initialization(создание)
  useEffect(() => {
    console.log("Lificycle method: initialization");
    getCatFacts();
    
    // Тут обычно делаются get запросы на сервер, котрый нужно сделать чтобы отобразить что-то на странице в самом начале
  }, []);

  useEffect(()=>{
console.log("lifecycle: updation")
getCatFacts();
},[firstName])

useEffect(()=>{
return()=>setCatFact(undefined)
})
  return (
    <Lesson24Wrapper>
      <Card>
      <Text>{lesson24}</Text>
      
        <Input
          onChange={onChangeFirstNameValue}
          value={firstName}
          labelName="На каждый символ получи новый факт о котах!"
        />
        {firstName}

        <Text>fact for cat</Text>
        {catFact && <Text>{catFact}</Text>}
        {catError&& <Text> {catError}</Text>}


      </Card>
    </Lesson24Wrapper>
  );
}

export default Lesson24;
