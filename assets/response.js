import Defs from './constants'

export default class Response {
    static success (result) {
        return {
            statusCode: Defs.STATUS_CODE_SUCCESS,
            body: JSON.stringify(result, null, 2)
        }
    }

    static error (msg) {
        return {
            statusCode: Defs.STATUS_CODE_ERROR,
            body: JSON.stringify(msg)
        }
    }
}