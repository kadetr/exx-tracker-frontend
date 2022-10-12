export type payload = {

}

export interface IUser {
    _id?: string;
    name: string;
    password: string,
    email: string;
    isAdmin: boolean;
}

export type UserState = {
    users: IUser[];
}

export type UserAction = {
    type: string;
    payload?: IUser;
}

export type DispatchUserType = (args: UserAction) => UserAction;

export interface IExercise {
    _id?: string;
    name?: string;
    sportType: string,
    exerciseDate: Date | string,
    calories: string;
    sets?: number;
    duration: string;
    distance: string;
    userId?: string;
}

export type IExercises = {
    exercises?: IExercise[];
}

export type ExerciseState = {
    exercises: IExercise[];
}

export type ExerciseAction = {
    type: string;
    payload?: {exercise: IExercise, exercises: IExercises, pages: number, page: number};
}

export type DispatchExerciseType = (args: ExerciseAction) => ExerciseAction;

export interface IForm {
    error: boolean
  }

  