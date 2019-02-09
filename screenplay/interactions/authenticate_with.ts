import {Interaction, UsesAbilities} from '@serenity-js/core/lib/screenplay';
import {CallAnApi} from '../abilities';

export class AuthenticateWith implements Interaction {

    static item = (item: any) => ({ on: (resource: string) => new AuthenticateWith(item, resource) });

    performAs(actor: UsesAbilities): PromiseLike<any> {
        return CallAnApi.as(actor).authenticateWith(this.resource, this.item)
    }

    constructor(private item: any, private resource: string) {
    }

    toString = () => `#actor executes a AuthenticateWith on resource ${this.resource} with item: ${this.item}`;
}
