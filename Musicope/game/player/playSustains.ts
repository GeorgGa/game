module Musicope.Game.PlayerFns {

  export class PlaySustains {

    private id = 0;

    constructor(private device: Devices.IDevice,
      private params: Params,
      private sustainNotes: Parsers.ISustainNote[]) {
        var o = this;
    }

    play = () => {
      var o = this;
      while (o.isIdBelowCurrentTime()) {
        o.playSustainNote(o.sustainNotes[o.id]);
        o.id++;
      }
    }

    private isIdBelowCurrentTime = () => {
      var o = this;
      return o.sustainNotes[o.id] &&
        o.sustainNotes[o.id].time < o.params.readOnly.p_elapsedTime;
    }

    private playSustainNote = (note: Parsers.ISustainNote) => {
      var o = this;
      if (o.params.readOnly.p_sustain) {
        if (note.on) {
          o.device.out(176, 64, 127);
        } else {
          o.device.out(176, 64, 0);
        }
      }
    }
  }

}