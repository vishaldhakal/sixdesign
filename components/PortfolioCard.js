export default function PortfolioCard(props) {
  return (
    <>
      <div className="yc-portfolio-card">
        <img
          src={props.image}
          alt={props.imagealt}
          className="yc-portfolio-img"
        />
        <p className="yc-portfolio-title">
          {props.title}
        </p>
      </div>
    </>
  );
}
