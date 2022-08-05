
function Exhibit(props) {
  return (
      <div className='exhibit-container'>
        <h2 className="exhibit-header">{props.name}</h2>
        <div className="exhibit-content">{props.children}</div>
      </div>
    );
}

export default Exhibit;
