module Musicope.Game.Inputs.KeyboardFns.Actions.List {

  export class SlowDown implements IKeyboardAction {

    id = "slow down";
    description = "slow down the song by 10%";
    key = "down";

    constructor(private p: IKeyboardParams) { }

    triggerAction() {
      var o = this;
      o.p.params.setParam("p_speed", o.p.params.readOnly.p_speed - 0.1);
    }

    getCurrentState() {
      var o = this;
      return o.p.params.readOnly.p_speed * 100;
    }

  }

}