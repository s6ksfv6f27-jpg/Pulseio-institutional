export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0B0F14",
      color: "#FFFFFF",
      fontFamily: "system-ui"
    }}>
      <div style={{ maxWidth: 720, textAlign: "center" }}>
        <h1 style={{ fontSize: 48, marginBottom: 24 }}>Pulse.io</h1>
        <p style={{ fontSize: 20, color: "#B5B5B5" }}>
          Decentralized infrastructure for real-time public perception, powered by Zioo.
        </p>
      </div>
    </main>
  );
}
