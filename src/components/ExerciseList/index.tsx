import React from "react";
import { IExercise } from "../../types/custom";
import CardItem from "../CardItem";
import Paginate from "../Paginate";
import {ListWrapper, Message
} from "./exerciseListElements";

export interface ExerciseListProps {
    exercises: IExercise[];
    page: number;
    pages: number,
    deleteHandler: (e: React.MouseEventHandler<HTMLButtonElement>, id: any) => void;
    updateHandler: (e: React.SyntheticEvent, _id: string, sportType: string, exerciseDate: string, calories: string, duration: string, distance: string) => void;
}

const ExerciseList: React.FC<ExerciseListProps> = ({exercises, page, pages, deleteHandler, updateHandler}: ExerciseListProps) => {
    return(
    <>
        <ListWrapper>
        {exercises.length !== 0 ? 
        exercises.map(exercise =>
            <CardItem key={exercise["_id"]} exercise={exercise} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
        ): <Message>No exercise recorded!</Message>}
        <Paginate
            pages={pages}
            page={page}
          />
        </ListWrapper>
        
    </>
    )
}

export default ExerciseList;