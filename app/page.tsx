export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B0F14",
        color: "#FFFFFF",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <div style={{ maxWidth: 720, textAlign: "center" }}>
        <h1 style={{ fontSize: 48, marginBottom: 24 }}>
          Pulseio
        </h1>

        <p style={{ fontSize: 20, color: "#B5B5B5", lineHeight: 1.6 }}>
          Decentralized infrastructure for real-time public perception.
          <br />
          Powered by Zioo.
        </p>
      </div>
    </main>
  );
}
