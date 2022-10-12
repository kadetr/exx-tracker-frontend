import React from "react";
import { IExercise } from "../../types/custom";
import { CardWrapper,
    CardHeader,
    CardHeading,
    CardDate,
    CardBody,
    CardDistance,
    CardDuration,
    CardCalories
} from "./exerciseItemElements";

export interface ExerciseItemProps {
    exercise: IExercise;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({exercise}: ExerciseItemProps) => {
    return(
    <>
        <CardWrapper>
            <CardHeader>
                <CardHeading>
                    {exercise.sportType}
                </CardHeading>
                <CardDate>
                    {exercise.exerciseDate.toString()}
                </CardDate>
            </CardHeader>
            <CardBody>
                <CardCalories>
                    {exercise.calories} kcal
                </CardCalories>
                <CardDistance>
                    {exercise.distance} meters
                </CardDistance>
                <CardDuration>
                    {exercise.duration} minutes
                </CardDuration>
            </CardBody>
        </CardWrapper>
    </>
    )
}

export default ExerciseItem;