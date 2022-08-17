export type ContactItemType = {
  id: ContactItemIdType;
  name: ContactItemNameType;
  phone: ContactItemPhoneType;
};

export type ContactEditItemType = {
  name: ContactItemNameType;
  phone: ContactItemPhoneType;
};

export type ContactCreateItemType = {
  name: ContactItemNameType;
  phone: ContactItemPhoneType;
};

export type ContactItemIdType = number;
export type ContactItemNameType = string;
export type ContactItemPhoneType = string;
