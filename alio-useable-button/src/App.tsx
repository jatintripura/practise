import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="flex gap-x-4  py-6 px-10">
        <Button size="small" variant="primary">
          Add Me
        </Button>
        <Button size="small" variant="secondary">
          Add Me
        </Button>
        <Button size="small" variant="outline">
          Add Me
        </Button>
      </div>
      <div className="flex gap-x-4  py-6 px-10">
        <Button size="medium" variant="primary">
          Add Me
        </Button>
        <Button size="medium" variant="secondary">
          Add Me
        </Button>
        <Button size="medium" variant="outline">
          Add Me
        </Button>
      </div>
      <div className="flex gap-x-4  py-6 px-10">
        <Button size="large" variant="primary">
          Add Me
        </Button>
        <Button size="large" variant="secondary">
          Add Me
        </Button>
        <Button size="large" variant="outline">
          Add Me
        </Button>
      </div>
    </>
  );
}

export default App;
