module Musicope.Game.Inputs.KeyboardFns.Actions.List {

  export class SpeedUp implements IKeyboardAction {

    id = "speed up";
    description = "speed up the song by 10%";
    key = "up";

    constructor(private p: IKeyboardParams) { }

    triggerAction() {
      var o = this;
      o.p.params.setParam("p_speed", o.p.params.readOnly.p_speed + 0.1);
    }

    getCurrentState() {
      var o = this;
      return o.p.params.readOnly.p_speed * 100;
    }

  }

}