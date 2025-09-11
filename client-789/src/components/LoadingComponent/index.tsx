import "./index.css";

export default function LoadingComponent() {
  return (
    <>
      <div
        id="spinner"
        className="block"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%)",
          zIndex: 99999,
        }}
      >
        <div style={{ color: "#000" }} className="la-ball-atom la-3x">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
