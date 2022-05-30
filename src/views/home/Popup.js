import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "../modal/Modal";

function Popup() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default Popup;
