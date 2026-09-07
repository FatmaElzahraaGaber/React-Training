import { useState } from "react";
import Button from "/src/components/ui/Button.tsx";
import Card from "/src/components/ui/Card.tsx";
import Table from "/src/components/ui/Table.tsx";
import "./App.css";

function App() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 500);
  };
  const columns = ["Name", "Role", "City"];

  const students = [
    { name: "Layla Hassan", role: "Student", city: "Cairo" },
    { name: "Omar Farouk", role: "Student", city: "Giza" },
    { name: "Sara Ahmed", role: "Teaching Assistant", city: "Alexandria" },
    { name: "Youssef Nabil", role: "Student", city: "Aswan" },
  ];
  return (
    <div
      style={{
        minHeight: "260px",
        background: "#F4F1EA",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div>
        <h1
          style={{
            color: "#1F1B16",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "50px",
          }}
        >
          Assignment 2
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row !important",
          justifyContent: "space-around",
        }}
      >
        <Card
          title="Desert Trail Map"
          description="A downloadable route covering the full 12km loop, with elevation notes."
          image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
        />
        <Card
          title="Desert Trail Map"
          description="A downloadable route covering the full 12km loop, with elevation notes."
        >
          <Button
            text="Loading…"
            onClick={() => {
              alert("!s");
            }}
            variant="danger"
            disabled={true}
          />
        </Card>

        <Card
          title="Weekly Newsletter"
          description="Short dispatches on design and craft, sent every Friday morning."
          image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop"
        >
          <Button
            text={saving ? "Loading…" : " Subscribe"}
            onClick={handleSave}
            variant="primary "
            disabled={saving}
          />
        </Card>
      </div>

      <Table columns={columns} data={students} striped />
    </div>
  );
}

export default App;
