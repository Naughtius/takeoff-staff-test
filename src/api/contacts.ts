import {
  ContactCreateItemType,
  ContactItemIdType,
  ContactItemType,
} from "@main-types/contacts";
import { $api } from ".";

export const contactsApi = async () => {
  return $api.get("/contacts");
};

export const deleteContactApi = async (id: ContactItemIdType) => {
  return $api.delete("/contacts/" + id);
};

export const editContactApi = async ({ name, phone, id }: ContactItemType) => {
  return $api.put("/contacts/" + id, {
    name,
    phone,
  });
};

export const createContactApi = async ({
  name,
  phone,
}: ContactCreateItemType) => {
  return $api.post("/contacts", {
    name,
    phone,
  });
};
