import * as React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Card, Container, Row, Col } from "react-bootstrap";

type GridBoxProps = {
  noOfColumns: number;
  numberOfCards: number;
  onChangeHandler: React.MouseEventHandler;
};

const GridBox: React.FC<GridBoxProps> = (props) => {
  const { noOfColumns, numberOfCards, onChangeHandler } = props;
  return (
    <div id="grid-boxes">
      <Container>
        <Row xs={noOfColumns || 3}>
          {[...Array(numberOfCards)].map((e, i) => {
            return (
              <Col>
                <Card className="p-2 mb-4">
                  <div>
                    <h5>Card {i + 1}</h5>
                    <ButtonComponent
                      variant="danger"
                      title="X"
                      onChangeHandler={onChangeHandler}
                    />
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default GridBox;
