import { observable } from 'mobx'

export class LocalState {
  @observable num: number

  handleIncNum = () => {
    this.num++
    console.log(this.num)
  }

  constructor() {
    this.num = 0
  }
}
