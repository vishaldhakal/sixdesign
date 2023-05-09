export default function ShowcaseCard(props) {
  return (
    <>
      <div className="showcase-card shadow-lg rounded-1">
        <img
          src={props.image}
          alt={props.imagealt}
          className="img-fluid showcase-card-img"
        />
        <p className="showcase-card-title mt-2 fw-medium mb-0">{props.title}</p>
      </div>
    </>
  );
}
