import {Question} from '@serenity-js/core/lib/screenplay';
import {AxiosResponse} from 'axios';
import {CallAnApi} from '../abilities/call_an_api';
import {expect} from '../expect';

export const ResponseMessage = () => Question.about(`The Response Message`, actor =>
   CallAnApi.as(actor).getLastResponse() as PromiseLike<AxiosResponse>,
);

export const hasResponseCode = id => question => question.then(lastResponse => expect(lastResponse.statusstatus).to.equal(id));

export const hasResponseToken = id => question => question.then(lastResponse => expect(lastResponse.data.accessToken));
