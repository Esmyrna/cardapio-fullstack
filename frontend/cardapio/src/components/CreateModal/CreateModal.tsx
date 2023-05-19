 

import { useEffect, useState } from "react"
import { userFoodDataMutate } from '../../hooks/userFoodDataMutate';
import { FoodData } from "../../interface/FoodData";
import * as C from './CreateModal'
import { Input } from "../Input/Input";

interface ModalProps {
   closeModal(): void;

}

 const CreateModel = ({closeModal}: ModalProps) => {

    const submit = () => {
        const foodData: FoodData ={
            title,
            price,
            image
        }
        mutate(foodData)
    }

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate, isSuccess }= userFoodDataMutate();


    useEffect(() => {
         if(!isSuccess) return
         closeModal();
    }, [isSuccess])

  return (
     <C.ModelOverlay>
         <C.ModelBody>
            <C.Title>Cadastre um novo item no cardápio</C.Title>
            <C.Form>
               <Input label="title" value={title} updateValue={setTitle} />
               <Input label="price" value={price} updateValue={setPrice} />
               <Input label="image" value={image} updateValue={setImage} />
               <C.ButtonSend onClick={submit}>Enviar</C.ButtonSend>
            
            </C.Form>
        
         </C.ModelBody>
    </C.ModelOverlay>
  )
}

export default CreateModel
