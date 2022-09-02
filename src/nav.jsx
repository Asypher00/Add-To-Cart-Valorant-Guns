import { useLanguage } from "./local-provider";
export function Nav() {
  const { setLanguage } = useLanguage();

  return (
    <>
      <div style={{ textAlign: "left", marginLeft: "2rem" }}>
        <button
          style={{ margin: "8px" }}
          onClick={() => setLanguage("English")}
        >
          English
        </button>
        <button onClick={() => setLanguage("Hindi")}>Hindi</button>
      </div>
    </>
  );
}
