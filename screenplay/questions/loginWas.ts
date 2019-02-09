import {expect} from '../expect';
export const loginWasSuccesful = () => question => question.then(lastResponses => expect(lastResponses).not.to.be.empty);

export const equals = (expected: number) => (actual: number) => expect(actual).to.eventually.equal(expected);