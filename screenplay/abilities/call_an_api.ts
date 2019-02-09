import { Ability, UsesAbilities } from '@serenity-js/core/lib/screenplay';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Call an Api is the ability to correspond with an Api by the npm package axios.
 */
export class CallAnApi implements Ability {

    static token: string;

    private lastResponse: AxiosResponse;

    /**
     * Ability to Call and api at a specified baseUrl
     * Timeout is set to 1s and headers Accept application/json and application/xml
     *
     * @param {string} baseURL
     * @returns {CallAnApi}
     */
    static at(baseURL: string) {
        const axiosInstance: AxiosInstance = axios.create({
            baseURL,
            timeout: 2000,
            headers: { Accept: 'application/json,application/xml' },
        });
        return new CallAnApi(axiosInstance);
    }

    /**
     * Ability to Call an Api with a given axios instance.
     *
     * @param {AxiosInstance} axiosInstance
     * @returns {CallAnApi}
     */
    static using(axiosInstance: AxiosInstance) {
        return new CallAnApi(axiosInstance);
    }

    /**
     * Used to access the Actor's ability to CallAnApi from within the Interaction classes, such as GET or PUT
     *
     * @param actor
     * @return {CallAnApi}
     */
    static as(actor: UsesAbilities): CallAnApi {
        return actor.abilityTo(CallAnApi);
    }

    /**
     * Send a GET request to a specified url.
     * Response will be resolved and made available as lastResponse.
     *
     * @param {string} url
     * @param {AxiosRequestConfig} config
     * @returns {PromiseLike<void>}
     */
    get(url: string, config?: AxiosRequestConfig): PromiseLike<AxiosResponse> {
        return this.axiosInstance.get(url, Object.assign({}, { headers: { 'Authorization': 'Bearer '+CallAnApi.token } }, config,)).then(
            fulfilled => this.lastResponse = fulfilled,
            rejected => this.lastResponse = rejected.response,
        );
    }

    /**
     * Call the api method post on the url.
     * Response will be resolved and made available as lastResponse.
     *
     * @param {string} url
     * @param data
     * @param {AxiosRequestConfig} config
     * @returns {PromiseLike<void>}
     */
    post(url: string, data?: any, config?: AxiosRequestConfig): PromiseLike<AxiosResponse> {
        return this.axiosInstance.post(url, data, Object.assign({}, { headers: { 'Authorization': 'Bearer '+CallAnApi.token } }, config,)).then(
            fulfilled => this.lastResponse = fulfilled,
            rejected => this.lastResponse = rejected.response,
        );
    }

    /**
     * Send a DELETE request to a specified url.
     * Every response will be resolved and put into the lastResponse.
     *
     * @param {string} url
     * @param {AxiosRequestConfig} config
     * @returns {PromiseLike<void>}
     */
    delete(url: string, config?: AxiosRequestConfig): PromiseLike<AxiosResponse> {
        return this.axiosInstance.delete(url, Object.assign({}, { headers: { 'Authorization': 'Bearer '+CallAnApi.token } }, config,)).then(
            fulfilled => this.lastResponse = fulfilled,
            rejected => this.lastResponse = rejected.response,
        );
    }

    /**
     * PATCH the resource at a specified url.
     * Response will be resolved and made available as lastResponse.
     *
     * @param {string} url
     * @param data
     * @param {AxiosRequestConfig} config
     * @returns {PromiseLike<void>}
     */
    patch(url: string, data?: any, config?: AxiosRequestConfig): PromiseLike<AxiosResponse> {
        return this.axiosInstance.patch(url, data, Object.assign({}, { headers: { 'Authorization': 'Bearer '+CallAnApi.token } }, config,)).then(
            fulfilled => this.lastResponse = fulfilled,
            rejected => this.lastResponse = rejected.response,
        );
    }

    /**
     * Send a PUT request to a specified url.
     * Response will be resolved and made available as lastResponse.
     *
     * @param {string} url
     * @param data
     * @param {AxiosRequestConfig} config
     * @returns {PromiseLike<void>}
     */
    put(url: string, data?: any, config?: AxiosRequestConfig): PromiseLike<AxiosResponse> {
        return this.axiosInstance.put(url, data, Object.assign({}, { headers: { 'Authorization': 'Bearer '+CallAnApi.token } }, config,)).then(
            fulfilled => this.lastResponse = fulfilled,
            rejected => this.lastResponse = rejected.response,
        );
    }

    /**
     * Send a HEAD request to a specified url.
     * Every response will be resolved and put into the lastResponse.
     *
     * @param {string} url
     * @param {AxiosRequestConfig} config
     * @returns {PromiseLike<void>}
     */
    head(url: string, config?: AxiosRequestConfig): PromiseLike<AxiosResponse> {
        return this.axiosInstance.head(url, Object.assign({}, { headers: { 'Authorization': 'Bearer '+CallAnApi.token } }, config,)).then(
            fulfilled => this.lastResponse = fulfilled,
            rejected => this.lastResponse = rejected.response,
        );
    }

    getLastResponse(): PromiseLike<AxiosResponse> {
        return Promise.resolve(this.lastResponse);
    }

    authenticateWith(url: string, data?: any) {  // key, credentials, cert, etc...
        return this.post(url,data).then(res => {
            CallAnApi.token = res.data.accessToken;  // or something like this
        })
    }

    constructor(private axiosInstance: AxiosInstance) {
    }

}