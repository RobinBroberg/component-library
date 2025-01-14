import "./App.css";
import CustomAlert from "./components/CustomAlert";
import CustomBadge from "./components/CustomBadge";
import CustomButton from "./components/CustomButton";
import CustomCard from "./components/CustomCard";

function App() {
  return (
    <>
      <h1 className="font-semibold text-2xl mb-5">Buttons</h1>
      <CustomButton color="red" size="large" className="m-5 ">
        Large red
      </CustomButton>
      <CustomButton color="blue" disabled className="m-5">
        Medium disabled
      </CustomButton>
      <CustomButton size="small" className="m-5">
        Small gray
      </CustomButton>
      <hr />
      <h1 className="font-semibold text-2xl my-5">Alerts</h1>
      <CustomAlert icon="circle" color="red" className="my-2">
        Info alert! Change a few things up and try submitting again.
      </CustomAlert>
      <CustomAlert
        icon="triangle"
        color="blue"
        iconSize="large"
        className="my-2"
      >
        Info alert! Error, error, error..
      </CustomAlert>
      <CustomAlert
        icon="square"
        color="gray"
        iconSize="small"
        iconColor="text-red-600"
        className="my-2 text-red-800"
      >
        Info alert! Warning, warning, warning...
      </CustomAlert>
      <hr />
      <h1 className="font-semibold text-2xl my-5">Badges</h1>
      <CustomBadge icon="clock" size="small" className="mr-2">
        2 minutes
      </CustomBadge>
      <CustomBadge icon="checkmark" color="blue" className="mr-2">
        Complete
      </CustomBadge>
      <CustomBadge icon="search" color="red" size="large" className="mb-3">
        Search
      </CustomBadge>
      <hr />
      <h1 className="font-semibold text-2xl my-5">Cards</h1>
      <div className="p-4 grid gap-6 grid-cols-3">
        <CustomCard
          href="#"
          imgSrc="https://picsum.photos/id/237/400/300"
          imgAlt="Placeholder Image"
        >
          <h3 className="text-lg font-bold">Card Title</h3>
          <p className="text-sm text-gray-600">
            This is an example card description.
          </p>
        </CustomCard>

        <CustomCard
          href="#"
          imgSrc="https://picsum.photos/seed/picsum/400/300"
          imgAlt="Placeholder Image"
        >
          <h3 className="text-lg font-bold">Another Card</h3>
          <p className="text-sm text-gray-600">More details about this card.</p>
        </CustomCard>
        <CustomCard
          href="#"
          imgSrc="https://picsum.photos/400/300?grayscale"
          imgAlt="Placeholder Image"
        >
          <h3 className="text-lg font-bold">Another Card</h3>
          <p className="text-sm text-gray-600">More details about this card.</p>
        </CustomCard>
      </div>
    </>
  );
}

export default App;
