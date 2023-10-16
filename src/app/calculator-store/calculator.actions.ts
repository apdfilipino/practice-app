import { Action, createAction, props } from "@ngrx/store";

export enum CalculatorActionTypes {
    Add = "[Calculator] Add",
    Subtract = "[Calculator] Subtract",
    Multiply = "[Calculator] Multiply",
    Divide = "[Calculator] Divide",
    Equals = "[Calculator] Equals",
    Compute = "[Calculator] Compute",
    Clear = "[Calculator] Clear"
}

export interface CalculatorProps { value: number };

export class CalculatorActionWithProps {
    value: number;

    constructor({ value }: CalculatorProps) {
        this.value = value;
    }
}

   
export class Add extends CalculatorActionWithProps implements Action {
    type = CalculatorActionTypes.Add;

    constructor(props: CalculatorProps) {
        super(props);
    }
}

export class Subtract extends CalculatorActionWithProps implements Action {
    type = CalculatorActionTypes.Subtract;

    constructor(props: CalculatorProps) {
        super(props);
    }
}

export class Multiply extends CalculatorActionWithProps implements Action {
    type = CalculatorActionTypes.Multiply;

    constructor(props: CalculatorProps) {
        super(props);
    }
}

export class Divide extends CalculatorActionWithProps implements Action {
    type = CalculatorActionTypes.Divide;

    constructor(props: CalculatorProps) {
        super(props);
    }
}

export class Equals extends CalculatorActionWithProps implements Action {
    type = CalculatorActionTypes.Equals;

    constructor(props: CalculatorProps) {
        super(props);
    }
}

export class Compute implements Action {
    readonly type = CalculatorActionTypes.Compute;
}

export class Clear implements Action {
    readonly type = CalculatorActionTypes.Clear;
}