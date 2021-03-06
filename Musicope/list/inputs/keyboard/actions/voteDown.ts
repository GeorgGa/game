module Musicope.List.Inputs.KeyboardFns.Actions.List {

  export class VoteDown implements IKeyboardAction {

    id = "vote down";
    description = "";
    key = "ctrl+down";

    private contr: Controller;

    constructor(p: IKeyboardParams) {
      var o = this;
      o.contr = p.inputParams.controller;
    }

    triggerAction() {
      var o = this;
      var song: ISong = o.contr.displayedSongs()[o.contr.listIndex()];
      song.db["votes"](song.db["votes"]() - 1);
    }

    getCurrentState() {
      var o = this;
      return 0;
    }

  }

}