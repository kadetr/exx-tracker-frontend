import React, {useState} from "react";
// import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import { Container,
         StyledModal,
         FormContainer,
         FormWrap,
         FormContent,
         Form,
         FormH1,
         FormInput,
         FormSelect,
         FormButton,
         Buttons,
         ModalButton
} from "./newExerciseModalElements";

export interface NewExerciseModalProps {
    submitHandler: (e: React.SyntheticEvent, sportType: string, exerciseDate: string, calories: string, duration: string, distance: string) => void;
}

const NewExerciseModal: React.FC<NewExerciseModalProps> = ({submitHandler}: NewExerciseModalProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);
    // const [name,setName] = useState("");
    const [sportType, setSportType] = useState("");
    const [exerciseDate, setExerciseDate] = useState(Date.now().toLocaleString("sv"));
    const [calories, setCalories] = useState("");
    // const [sets,setSets] = useState(0);
    const [duration, setDuration] = useState("");
    const [distance, setDistance] = useState("");
    const [error, setError] = useState(false);
    
    function toggleModal(e: React.SyntheticEvent | Event) {
      setOpacity(0);
      setIsOpen(!isOpen);
    }
  
    function afterOpen() {
      setTimeout(() => {
        setOpacity(1);
      }, 100);
    }
  
    function beforeClose() {
      return new Promise((resolve) => {
        setOpacity(0);
        setTimeout(resolve, 300);
      });
    }

    function cancelHandler(e: React.SyntheticEvent){
      e.preventDefault();
      setSportType("");
      setExerciseDate("");
      setCalories("");
      setDuration("");
      setDistance("");
      setError(false);
      setOpacity(0);
      setIsOpen(!isOpen);
    }

    const validateForm = React.useCallback((event: React.SyntheticEvent) => {
      event.preventDefault();
      if (!((event.target as HTMLInputElement || HTMLSelectElement).checkValidity())) {
         setError(true);
         return;
      }
      setError(false);
      submitHandler(
         event,
         sportType,
         exerciseDate,
         calories,
         duration,
         distance
      );
      setOpacity(0);
      setIsOpen(!isOpen);
      setSportType("");
      setExerciseDate("");
      setCalories("");
      setDuration("");
      setDistance("");
    }, [setError, sportType, exerciseDate, calories, duration, distance, submitHandler, isOpen])
  
    return (
      <Container>
        <ModalButton onClick={toggleModal}>New Exercise</ModalButton>
        <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        //   opacity={opacity}
          backgroundProps={{ opacity }}
        >
         <FormContainer>
            <FormWrap>
               <FormContent>
                  <Form noValidate 
                     error = {error}
                     onSubmit={(event) =>validateForm(event)}
                  >
                     <FormH1>New Exercise</FormH1>
                     <FormInput
                        type="date"
                        value={exerciseDate}
                        onChange={(e) => {
                           setExerciseDate(e.target.value);
                        }}
                        required
                     />
                     <FormSelect
                        value={sportType}
                        onChange={(e) => {
                           setSportType(e.target.value);
                        }}
                        required
                     >
                        <option value="">Select a sport</option>
                        <option value="running">Running</option>
                        <option value="walking">Walking</option>
                        <option value="swimming">Swimming</option>
                        <option value="cycling">Cycling</option> 
                        <option value="hiking">Hiking</option> 
                    </FormSelect>
                     <FormInput
                        type="text"
                        value={distance}
                        placeholder="Enter distance"
                        onChange={(e) => {
                           setDistance(e.target.value);
                        }}
                     />
                     <FormInput
                        type="text"
                        placeholder="Enter calories"
                        value={calories}
                        onChange={(e) => {
                           setCalories(e.target.value);
                        }}
                     />
                      <FormInput
                        type="text"
                        placeholder="Enter duration"
                        value={duration}
                        onChange={(e) => {
                           setDuration(e.target.value);
                        }}
                     />
                    <Buttons>
                      <FormButton onClick={(event) => {cancelHandler(event)}}>Cancel</FormButton>
                      <FormButton
                        type="submit"
                     >
                        Save
                     </FormButton>
                     </Buttons>
                  </Form>
               </FormContent>
            </FormWrap>
         </FormContainer>
        </StyledModal>
      </Container>
    );
  }

  export default NewExerciseModal;