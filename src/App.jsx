import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
  const [color, setColor] = useState("gray");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <h1 className="font-semibold text-2xl">Buttons</h1>
      <Button color="red" size="large" className="m-5 ">
        Large red
      </Button>
      <Button color="blue" disabled className="m-5">
        Medium disabled
      </Button>
      <Button size="small" className="m-5">
        Small gray
      </Button>
      <hr />
      <h1 className="font-semibold text-2xl my-5">Alerts</h1>
      <Alert icon="circle" color="red" className="my-2">
        Info alert! Change a few things up and try submitting again.
      </Alert>
      <Alert icon="triangle" color="blue" iconSize="large" className="my-2">
        Info alert! Error, error, error..
      </Alert>
      <Alert
        icon="square"
        color={color}
        iconSize="small"
        iconColor="text-red-600"
        className="my-2 font-semibold"
      >
        Try changing color with the buttons.
      </Alert>
      <Button
        onClick={() => setColor("blue")}
        size="small"
        className="m-5"
        color="blue"
      >
        Blue
      </Button>
      <Button
        onClick={() => setColor("red")}
        size="small"
        className="m-5"
        color="red"
      >
        Red
      </Button>
      <Button onClick={() => setColor("gray")} size="small" className="m-5">
        Gray
      </Button>
      <hr />
      <h1 className="font-semibold text-2xl my-5">Badges</h1>
      <Badge icon="clock" size="small" className="mr-2">
        2 minutes
      </Badge>
      <Badge icon="checkmark" color="blue" className="mr-2">
        Complete
      </Badge>
      <Badge icon="search" color="red" size="large" className="mb-3">
        Search
      </Badge>
      <hr />
      <h1 className="font-semibold text-2xl my-5">Cards</h1>
      <div className="p-4 grid grid-cols-3 ml-5">
        <Card
          href="#"
          imgSrc="https://picsum.photos/id/237/400/300"
          imgAlt="Placeholder Image"
        >
          <h3 className="text-lg font-bold">Card Title</h3>
          <p className="text-sm text-gray-600">
            This is an example card description.
          </p>
        </Card>

        <Card
          href="#"
          imgSrc="https://picsum.photos/400/300"
          imgAlt="Placeholder Image"
        >
          <h3 className="text-lg font-bold">Another Card</h3>
          <p className="text-sm text-gray-600">
            This is an example card description.
          </p>
        </Card>
        <Card
          href="#"
          imgSrc="https://picsum.photos/400/300?grayscale"
          imgAlt="Placeholder Image"
        >
          <h3 className="text-lg font-bold">And another Card</h3>
          <p className="text-sm text-gray-600">
            This is an example card description.
          </p>
        </Card>
      </div>
      <hr />

      <Button
        onClick={() => setIsModalOpen(true)}
        color="blue"
        className="mt-5"
      >
        Open Modal
      </Button>

      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="large"
      >
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>
          <p>This is the body of the modal.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="gray"
            size="small"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
