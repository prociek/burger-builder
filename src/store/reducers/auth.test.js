import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return default state if actionType undefined", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      id: null,
      loading: false,
      error: null,
      redirectPath: "/"
    });
  });

  it("should store token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          id: null,
          loading: false,
          error: null,
          redirectPath: "/"
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          token: "some-token",
          id: "some-user-id"
        }
      )
    ).toEqual({
      token: "some-token",
      id: "some-user-id",
      loading: false,
      error: null,
      redirectPath: "/"
    });
  });
});
