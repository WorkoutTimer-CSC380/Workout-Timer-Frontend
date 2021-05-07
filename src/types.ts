export type Duration = {
    readonly minutes: number;
    readonly seconds: number;
};

// export interface Timed {
//     readonly duration: Duration;
//     readonly name: string;
// }   


export type Exercise = {
    readonly duration: Duration;
    readonly name: string;
    readonly sets: number;
    readonly reps: number;
};

export type Break = {
    readonly duration: Duration;
    readonly name: string;
};

export type Workout = {
    readonly name: string,
    readonly exercises: Exercise[]
}