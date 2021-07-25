import { ApiResponse } from "../../pages/api/types";

export class FetchImpl {
  constructor(handlingErrors?: Record<any, string>) {}

  async get(url: string, options?: RequestInit) {
    return await fetch(url, {
      method: "GET",
      ...options,
    })
      .then(async (res) => {
        return new ApiResponse({
          status: res.status,
          data: await res.json(),
        });
      })
      .catch((err) => {
        return handleError()
          .when("Unexpected token")
          .thenThrow(() => {
            throw new Error("CHECK REQUEST URL");
          })
          .match(err.message ?? "");
      });
  }
}

function handleError() {
  const errors: any = {};

  function defaultErrorHandler() {
    throw new Error("DEFAULT");
  }

  function getLastKey(target: Record<string, () => never>) {
    return Object.keys(target)[Object.keys(target).length - 1];
  }

  return {
    when: function (msg: string) {
      errors[msg] = null;
      return this;
    },
    thenThrow: function (errorHandler = defaultErrorHandler) {
      const lastKey = getLastKey(errors);
      errors[lastKey] = errorHandler;
      return this;
    },
    match: (errorMessage: string) => {
      let handler;
      for (const errorPredicate of Object.keys(errors)) {
        if (errorMessage.includes(errorPredicate)) {
          handler = errors[errorPredicate];
          handler();
        }
      }
      throw new Error(
        `Error handler didn't caught this error message with: ${errorMessage}`,
      );
    },
  };
}

export const fetchImpl = new FetchImpl();
