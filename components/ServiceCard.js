export default function ServiceCard(props) {
  return (
    <>
      <div className={`yc-card ${props.className || ""}`}>
        <h4 className="yc-card-title">
          {props.image && (
            <img
              src={props.image}
              alt={props.imagealt}
              style={{ width: "24px", marginRight: "10px", verticalAlign: "middle" }}
            />
          )}
          {props.title}
        </h4>
        <p className="yc-card-text">{props.description}</p>
      </div>
    </>
  );
}
