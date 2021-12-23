type HighlightProps = {
    text:string,
    matchString: string
}
export const Highlight = (props:HighlightProps) => {
    const parts = props.text.split(new RegExp(`(${props.matchString})`, "gi"));
    return (
      <div>
          <h2>Test Three: Highlight a text match</h2>
        {" "}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === props.matchString.toLowerCase()
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {part}
          </span>
        ))}{" "}
      </div>
    );
}