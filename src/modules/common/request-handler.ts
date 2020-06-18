import { Request, Response } from "express";
import User from "../Users/models/Users";

export class RequestHandler {
  private request: Request;
  private response: Response;

  constructor(request: Request, response: Response) {
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

  links(params: any) {
    return this.response.links(params);
  }

  getRequestParameter(key: string) {
    return this.request.params[key];
  }

  getRequestQueryParameter(key: string) {
    return this.request.query[key];
  }

  validate(field: string, message: string) {
    return this.request.assert(field, message);
  }
  redirect(path: string) {
    return this.response.redirect(path);
  }

  async performValidation(): Promise<boolean> {
    const result = await this.request.getValidationResult();
    if (!result.isEmpty()) {
      this.sendValidationError(result.array()[0].msg);
      return false;
    }
    return true;
  }

  async sendResponse(data?: object) {
    return await this.response.status(200).send(data);
  }

  render(page: string, data: object) {
    return this.response.render(page, data);
  }

  sendNotFoundResponse(data?: object) {
    return this.response.status(404).send(data);
  }

  sendCreatedResponse(data?: object) {
    return this.response.status(201).send(data);
  }

  sendValidationError(error?: any) {
    return this.response.status(400).send(error);
  }

  sendConflict(error?: any) {
    return this.response.status(409).send(error);
  }

  sendServerError(error?: any, message?: any) {
    return this.response
      .status(500)
      .send({ message: error.userMessage || message || error.message, error });
  }

  handleCreatedResponse(data: {
    error: boolean;
    errorText: string;
    values: any;
  }) {
    if (data.error) return this.sendValidationError(data.errorText);
    else return this.sendCreatedResponse(data.values);
  }

  handleResponse(data: { error: boolean; errorText: string; values: any }) {
    if (data.error)
      return this.sendValidationError({ message: data.errorText });
    else return this.sendResponse(data.values);
  }
}

export function handle(
  method: (handler: RequestHandler, next?: () => void) => void
) {
  return (request: Request, response: Response, next: () => void) => {
    method(new RequestHandler(request, response), next);
  };
}

export async function authenticate(
  request: Request,
  response: Response,
  next: (error?: any) => void
) {
  const authTokenString = (request.headers["authorization"] || "").toString();
  if (!authTokenString) return response.send(401).end();
  const authToken = authTokenString.split("Bearer ")[1];
  const user = await User.find({ where: { token: authToken } });
  if (!user) return response.send(401).end();
  request.params.userId = user.id.toString();
  next();
}
