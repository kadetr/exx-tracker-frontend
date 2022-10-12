import React, { useState, useEffect } from "react";
import { IExercise } from "../../types/custom";
import { IconContext } from "react-icons";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { VscGraphLine } from "react-icons/vsc";
import { ModalProvider } from "styled-react-modal";
import { CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardOptionsItem,
    CardOptions,
    CardDate,
    CardBodyLeft,
    CardBodyRight,
    CardBodyLeftItem,
    CardBodyLeftLabel,
    CardBodyLeftP,
    CardBodyRightToo,
    FormButton,
    StyledModal,
    FormContainer,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormSelect,
    Buttons,
    IconButton,
    FadingBackground,
    FormLabel,
    FormGroup
} from "./cardItemElements";

export interface CardItemProps {
    exercise: IExercise;
    deleteHandler: (e: React.MouseEventHandler<HTMLButtonElement>, id: any) => void;
    updateHandler: (e: React.SyntheticEvent, _id: string, sportType: string, exerciseDate: string, calories: string, duration: string, distance: string) => void;
}

const CardItem: React.FC<CardItemProps> = ({exercise, deleteHandler, updateHandler}: CardItemProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);


    const [calories, setCalories] = useState("");
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [sportType, setSportType] = useState("");

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

    useEffect(() => {
        if (exercise) {
            setCalories(exercise.calories);
            setDistance(exercise.distance);
            setDuration(exercise.duration);
            setSportType(exercise.sportType);
        }
      }, [exercise]);

    return (
        <ModalProvider backgroundComponent={FadingBackground}>
          <CardWrapper>
            <CardHeader>
              <CardHeading>{exercise.sportType}</CardHeading>
              <CardDate>{exercise.exerciseDate.toString()}</CardDate>
            </CardHeader>
    
            <CardBody>

            <CardBodyLeft>
                <CardBodyLeftP>
                    <CardBodyLeftLabel>Distance  </CardBodyLeftLabel>
                    <CardBodyLeftItem>{exercise.distance ? exercise.distance + " meters" : "no details"}</CardBodyLeftItem>
                </CardBodyLeftP>

                <CardBodyLeftP>
                    <CardBodyLeftLabel>Calories  </CardBodyLeftLabel>
                    <CardBodyLeftItem>{exercise.calories ? exercise.calories + " kCal" : "no details"}</CardBodyLeftItem>
                </CardBodyLeftP>

                <CardBodyLeftP>
                    <CardBodyLeftLabel>Duration  </CardBodyLeftLabel>
                    <CardBodyLeftItem>{exercise.duration ? exercise.duration + " minutes" : "no details"}</CardBodyLeftItem>
                </CardBodyLeftP>
            </CardBodyLeft>

            <CardBodyRight>
            <CardFieldset>
                <IconContext.Provider value={{ color: "black", size: "24px" }}>
                <CardOptions>
                    <CardBodyRightToo>
                      <CardOptionsItem>
                        <CardIcon ><IconButton onClick={(e: any) => deleteHandler(e, exercise._id)}> <AiFillDelete  /> </IconButton></CardIcon>
                      </CardOptionsItem>
                      <CardOptionsItem>
                        <CardIcon> 
                          <IconButton onClick={toggleModal}>
                              <AiFillEdit />
                          </IconButton> 
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
                                    <Form>
                                      <FormH1>Update Exercise</FormH1>
                                      <FormGroup>
                                        <FormLabel>Sport type</FormLabel>
                                        <FormSelect
                                            value={sportType}
                                            onChange={(e) => {
                                              setSportType(e.target.value);
                                            }}
                                            required
                                        >
                                          <option value="running">Running</option>
                                          <option value="walking">Walking</option>
                                          <option value="swimming">Swimming</option>
                                          <option value="cycling">Cycling</option> 
                                          <option value="hiking">Hiking</option> 
                                        </FormSelect>
                                      </FormGroup>
                                      <FormGroup>
                                        <FormLabel>Calories</FormLabel>
                                        <FormInput
                                            type="text"
                                            value={calories}
                                            onChange={(e) => {
                                              setCalories(e.target.value);
                                            }}
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <FormLabel>Distance</FormLabel>
                                        <FormInput
                                            type="text"
                                            value={distance}
                                            onChange={(e) => {
                                              setDistance(e.target.value);
                                            }}
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <FormLabel>Duration</FormLabel>
                                        <FormInput
                                            type="text"
                                            value={duration}
                                            onChange={(e) => {
                                              setDuration(e.target.value);
                                            }}
                                        />
                                      </FormGroup>
                                      <Buttons>
                                        <FormButton onClick={toggleModal}>Cancel</FormButton>
                                        <FormButton
                                          type="submit"
                                          onClick={
                                              e => {updateHandler(e, exercise._id as string, exercise.sportType, exercise.exerciseDate as string, calories, distance, duration); toggleModal(e);}
                                          }
                                      >
                                          Update
                                      </FormButton>
                                      </Buttons>
                                    </Form>
                                </FormContent>
                              </FormWrap>
                            </FormContainer>    
                          </StyledModal>
                      </CardIcon>
                    </CardOptionsItem>
                </CardBodyRightToo>
                <CardBodyRightToo>
                  <CardOptionsItem>
                    <CardIcon> <CgDetailsMore /> </CardIcon>
                  </CardOptionsItem>

                  <CardOptionsItem>
                    <CardIcon> <VscGraphLine /> </CardIcon>
                  </CardOptionsItem>
                  </CardBodyRightToo>
                </CardOptions>
                </IconContext.Provider>
              </CardFieldset>
            </CardBodyRight>
             
              </CardBody>
          </CardWrapper>
        {/* </div> */}
        </ModalProvider>
    );

}

export default CardItem;