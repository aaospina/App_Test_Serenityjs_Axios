import {Actor} from '@serenity-js/core/lib/screenplay';
import {Cast} from '@serenity-js/core/lib/stage';
import {Properties} from '../properties';
import { CallAnApi } from './abilities/call_an_api';

export class Actors implements Cast {

    actor(name: string): Actor {
        return Actor.named(name).whoCan(CallAnApi.at(Properties.endPoint));
    }
}
