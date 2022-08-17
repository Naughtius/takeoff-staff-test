import { ValuesAuthType } from "@main-types/auth";
import { $api } from ".";

export const usersApi = async ({ email, password }: ValuesAuthType) => {
  return $api.get("/users", {
    params: {
      email,
      password,
    },
  });
};
