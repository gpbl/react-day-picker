import { configure } from "@testing-library/dom";
import "@testing-library/jest-dom";
import "html-validate/jest";

import "./dateMatchers";

configure({
  getElementError: (message, container) => {
    const error = new Error(message as string | undefined);
    error.name = "TestingLibraryElementError";
    error.stack = undefined;
    return error;
  }
});
