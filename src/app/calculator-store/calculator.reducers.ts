import { Action } from '@ngrx/store';
import { CalculatorActionTypes, CalculatorProps } from './calculator.actions';

export interface AccumulatorState {
    value: number;
    operand1: number;
    operand2: number;
    lastOperation: string;
}

export const initialState: AccumulatorState = {
    value: 0,
    operand1: 0,
    operand2: 0,
    lastOperation: ''
}

function computeValue(operation: string, num1: number, num2: number): number {
    switch(operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
    }
    return 0;
}

export function calculatorReducer(state = initialState, action: Action) {

    const newState: AccumulatorState = { ...state };

    switch(action.type) {
        case CalculatorActionTypes.Clear: return initialState;

        case CalculatorActionTypes.Equals: { 
            newState.operand2 = (<Action & CalculatorProps>action).value;
            newState.value = computeValue(state.lastOperation, newState.operand1!, newState.operand2!);
            return { ...newState };
        }

        case CalculatorActionTypes.Add: {
            newState.operand1 = (<Action & CalculatorProps>action).value;
            newState.lastOperation = '+';
            return { ...newState };
        } 
            
        case CalculatorActionTypes.Subtract: {
            newState.operand1 = (<Action & CalculatorProps>action).value;
            newState.lastOperation = '-';
            return { ...newState };
        } 
            
            
        case CalculatorActionTypes.Multiply: {
            newState.operand1 = (<Action & CalculatorProps>action).value;
            newState.lastOperation = '*';
            return { ...newState };
        }

        case CalculatorActionTypes.Divide: {
            newState.operand1 = (<Action & CalculatorProps>action).value;
            newState.lastOperation = '/';
            return { ...newState };
        }
        
        default: return state;
    }
}
 

