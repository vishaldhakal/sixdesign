export default function ServiceCard(props) {
  return (
    <>
      <div className="service-card rounded-1">
        <img
          src={props.image}
          alt={props.imagealt}
          className="img-fluid service-card-img"
        />
        <h5 className="service-card-title mt-2 fs-4 fw-bold fw-medium mb-0">
          {props.title}
        </h5>
        <p className="mt-3 mb-1 service-description">{props.description}</p>
      </div>
    </>
  );
}
