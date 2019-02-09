import { Question } from "@serenity-js/core/lib/screenplay";
import { CallAnApi } from "../abilities";

export const LastResponseStatus = () => Question.about(`last response status`, actor =>
  CallAnApi.as(actor).getLastResponse().then(response => response.status)
);

export const LastResponseDataToken = () => Question.about(`last response token`, actor =>
  CallAnApi.as(actor).getLastResponse().then(response => response.data.accessToken)
);