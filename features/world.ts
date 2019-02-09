import {serenity} from '@serenity-js/core/lib';
import {Actors} from '../screenplay/actors';

export = function() {

    this.setDefaultTimeout(60 * 1000);

    this.World = function() {
        this.stage = serenity.callToStageFor(new Actors());
    };
};
