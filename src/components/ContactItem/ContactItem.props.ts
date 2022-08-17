import {
  ContactItemNameType,
  ContactItemPhoneType,
} from "@main-types/contacts";

export interface ContactItemProps {
  name: ContactItemNameType;
  phone: ContactItemPhoneType;
  className?: string;
  deleteHandler: () => void;
  editHandler: () => void;
}
