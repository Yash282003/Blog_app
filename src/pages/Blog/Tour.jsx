const Tour = ({ id, image, info, name, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image || "https://via.placeholder.com/300"} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          
        </div>
        <p>
{info}
</p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;