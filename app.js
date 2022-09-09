import * as Tone from 'tone';

var currentInstrument = 0;

class instrument{
    constructor(family, loudness, playVerb){
        this.family = family;
        this.loudness = loudness;
        this.playVerb = playVerb;
    }

    playInstrument(){
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("B6", ".5");
        console.log(this.family + " " + this.playVerb + " at " + this.loudness);
    }
}

class woodwind extends instrument{
    constructor(family, loudness, playVerb){
        super(family, loudness, playVerb);
        this.family = "Woodwind";
        this.playVerb = "plays";
    }
}

class percussion extends instrument{
    constructor(family, loudness, playVerb){
        super(family, loudness, playVerb);
        this.family = "Percussion";
        this.playVerb = "plays";
    }
}

class string extends instrument{
    constructor(family, loudness, playVerb){
        super(family, loudness, playVerb);
        this.family = "String";
        this.playVerb = "plays";
    }
}

var myWoodwind = new woodwind("Woodwind", ".2 db", "plays");
var myPercussion = new percussion("Percussion", ".2 db", "plays");
var myString = new string("String", ".2 db", "plays");

const myInstruments = [myWoodwind, myPercussion, myString];

function playNext(){
    console.log(this)
        this.synth.triggerAttackRelease(this.myInstruments[this.curre], ".5");
        this.currentInstrument++;

        setTimeout(this.playInstrument.bind(this), 500);
}