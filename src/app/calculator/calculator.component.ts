import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccumulatorState } from '../calculator-store/calculator.reducers';
import { Equals, Add, Clear, Divide, Multiply, Subtract } from '../calculator-store/calculator.actions';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  // accumulator$: Observable<AccumulatorState>;
  accumulatorText: string = '0';
  opClicked: boolean = false;
  equalClicked: boolean = false;

  tiles: Tile[] = [
    { text: '/', rows: 1, cols: 1 },
    { text: '*', rows: 1, cols: 1 },
    { text: '-', rows: 1, cols: 1 },
    { text: 'AC', rows: 1, cols: 1 },
    { text: '7', rows: 1, cols: 1 },
    { text: '8', rows: 1, cols: 1 },
    { text: '9', rows: 1, cols: 1 },
    { text: '+', rows: 2, cols: 1 },
    { text: '4', rows: 1, cols: 1 },
    { text: '5', rows: 1, cols: 1 },
    { text: '6', rows: 1, cols: 1 },
    { text: '1', rows: 1, cols: 1 },
    { text: '2', rows: 1, cols: 1 },
    { text: '3', rows: 1, cols: 1 },
    { text: '=', rows: 2, cols: 1 },
    { text: '0', rows: 1, cols: 2 },
    { text: '.', rows: 1, cols: 1 },
  ];

  constructor(private store: Store<{ accumulator: AccumulatorState }>) {
    // this.accumulator$ = store.pipe(select('accumulator'));
  }

  onCalcButtonClick(index: number) {
    const label = this.tiles[index].text;
    if (label === '=') {
      this.checkAccumulatorText();
      this.store.dispatch(new Equals({ value: Number(this.accumulatorText)}));
      this.getStoreAccumulatorText();
    } else if (label === 'AC') {
      this.store.dispatch(new Clear());
      this.handleEqualLastClicked();
      this.handleOpLastClicked();
      this.getStoreAccumulatorText();
    } else if (['+', '-', '*', '/'].includes(label)) {
      this.checkAccumulatorText();
      switch(label) {
        case '+': {
          this.store.dispatch(new Add({ value: Number(this.accumulatorText) }));
        } break;
        case '-': {
          this.store.dispatch(new Subtract({ value: Number(this.accumulatorText) }));
        } break;
        case '*': {
          this.store.dispatch(new Multiply({ value: Number(this.accumulatorText) }));
        } break;
        case '/': {
          this.store.dispatch(new Divide({ value: Number(this.accumulatorText) }));
        } break;
      }
      this.opClicked = true;
      this.getStoreAccumulatorText();
    } else if (label === '.') {
      this.handleOpLastClicked();
      this.accumulatorText = this.accumulatorText.includes('.')
        ? this.accumulatorText
        : this.appendToAccumulator(label);
    } else {
      this.handleOpLastClicked();
      this.accumulatorText = this.accumulatorText === '0' 
        ? label
        : this.appendToAccumulator(label);
    }
  }

  appendToAccumulator(label: string) {
    return this.accumulatorText + label;
  }

  getStoreAccumulatorText() {
    this.store.select(state => state.accumulator.value).subscribe(value => {
      this.accumulatorText = `${value}`;
    });
  }

  handleOpLastClicked() {
    if (this.opClicked) this.accumulatorText = '0';
    this.opClicked = false;
  }

  handleEqualLastClicked() {
    if (this.equalClicked) this.accumulatorText = '0';
    this.equalClicked = false;
  }

  checkAccumulatorText() {
    if (this.accumulatorText[this.accumulatorText.length - 1] === '.') {
      this.appendToAccumulator('0');
    }
  }
}

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}
