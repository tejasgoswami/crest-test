import * as React from "react";
import Form from "react-bootstrap/Form";

type SelectColumnComponentProps = {
  handleChangeColumns: any;
  noOfColumns: number;
};

const SelectColumnComponent: React.FC<SelectColumnComponentProps> = (props) => {
  const { handleChangeColumns, noOfColumns } = props;
  return (
    <div>
      <Form.Select onChange={handleChangeColumns} value={noOfColumns}>
        {[...Array(7)].map((e, i) => {
          return <option value={i}>{i === 0 ? "No. of Columns" : i}</option>;
        })}
      </Form.Select>
    </div>
  );
};

export default SelectColumnComponent;
