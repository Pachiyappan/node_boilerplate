"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.handle = exports.RequestHandler = void 0;
const Users_1 = require("../Users/models/Users");
class RequestHandler {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }
    getBody() {
        return this.request.body;
    }
    getRequest() {
        return this.request;
    }
    getFiles() {
        return this.request.files;
    }
    getResponse() {
        return this.response;
    }
    links(params) {
        return this.response.links(params);
    }
    getRequestParameter(key) {
        return this.request.params[key];
    }
    getRequestQueryParameter(key) {
        return this.request.query[key];
    }
    validate(field, message) {
        return this.request.assert(field, message);
    }
    redirect(path) {
        return this.response.redirect(path);
    }
    performValidation() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.request.getValidationResult();
            if (!result.isEmpty()) {
                this.sendValidationError(result.array()[0].msg);
                return false;
            }
            return true;
        });
    }
    sendResponse(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.response.status(200).send(data);
        });
    }
    render(page, data) {
        return this.response.render(page, data);
    }
    sendNotFoundResponse(data) {
        return this.response.status(404).send(data);
    }
    sendCreatedResponse(data) {
        return this.response.status(201).send(data);
    }
    sendValidationError(error) {
        return this.response.status(400).send(error);
    }
    sendConflict(error) {
        return this.response.status(409).send(error);
    }
    sendServerError(error, message) {
        return this.response
            .status(500)
            .send({ message: error.userMessage || message || error.message, error });
    }
    handleCreatedResponse(data) {
        if (data.error)
            return this.sendValidationError(data.errorText);
        else
            return this.sendCreatedResponse(data.values);
    }
    handleResponse(data) {
        if (data.error)
            return this.sendValidationError({ message: data.errorText });
        else
            return this.sendResponse(data.values);
    }
}
exports.RequestHandler = RequestHandler;
function handle(method) {
    return (request, response, next) => {
        method(new RequestHandler(request, response), next);
    };
}
exports.handle = handle;
function authenticate(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authTokenString = (request.headers["authorization"] || "").toString();
        if (!authTokenString)
            return response.send(401).end();
        const authToken = authTokenString.split("Bearer ")[1];
        const user = yield Users_1.default.find({ where: { token: authToken } });
        if (!user)
            return response.send(401).end();
        request.params.userId = user.id.toString();
        next();
    });
}
exports.authenticate = authenticate;
//# sourceMappingURL=request-handler.js.map