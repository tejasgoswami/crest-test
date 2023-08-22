import * as React from "react";
import Button from 'react-bootstrap/Button';

type ButtonComponentProps = {
  title : string;
  onChangeHandler : React.MouseEventHandler;
  variant : string;
};

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  const {title, onChangeHandler, variant} = props;
  return (
    <Button variant={variant} onClick={onChangeHandler}>{title}</Button>
  );
};

export default ButtonComponent;
