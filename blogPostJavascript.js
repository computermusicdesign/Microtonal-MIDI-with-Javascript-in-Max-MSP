autowatch = 1;

inlets = 2;
outlets = 3;

function midiNoteIn(){
	var midiNoteIn = arguments[0];
	var midiNoteOut = Math.floor(midiNoteIn);
	var velocity = arguments[1];
	var pitchBend = (midiNoteIn - midiNoteOut) * 32 + 64;
	
	if (pitchBend != 64) {
		outlet(2, 2);
	} else {
		outlet(2, 1);
	}
	
	outlet(0, [midiNoteOut, velocity]);
	outlet(1, Math.round(pitchBend));
	
	
} 
