import {Interaction, UsesAbilities} from '@serenity-js/core/lib/screenplay';
import {CallAnApi} from '../abilities';

export class Head implements Interaction {

    static resource = (resource: string) => new Head(resource);

    performAs(actor: UsesAbilities): PromiseLike<any> {
        return CallAnApi.as(actor).head(this.resource);
    }

    constructor(private resource: string) {
    }

    toString = () => `#actor executes a HEAD on resource ${this.resource}`;
}
