export default function PortfolioCard(props) {
  return (
    <>
      <div className="portfolio-card shadow-lg rounded-1">
        <img
          src={props.image}
          alt={props.imagealt}
          className="img-fluid portfolio-card-img"
        />
        <p className="portfolio-card-title mt-2 fw-medium mb-0">
          {props.title}
        </p>
      </div>
    </>
  );
}
