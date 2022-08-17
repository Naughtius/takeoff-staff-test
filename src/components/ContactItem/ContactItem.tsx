import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { ContactItemProps } from "./ContactItem.props";
import css from "./ContactItem.module.scss";

const ContactItem: FC<ContactItemProps> = ({
  name,
  phone,
  className,
  deleteHandler,
  editHandler,
}) => (
  <Card className={className}>
    <Card.Header>{name}</Card.Header>
    <Card.Body>
      <Card.Title>{phone}</Card.Title>
      <div className={css.contact_btns}>
        <Button onClick={editHandler} variant="success">
          Edit
        </Button>
        <Button onClick={deleteHandler} variant="danger">
          Delete
        </Button>
      </div>
    </Card.Body>
  </Card>
);

export default ContactItem;
