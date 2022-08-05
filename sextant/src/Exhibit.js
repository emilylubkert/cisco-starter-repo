import Card from './Card';
function Exhibit() {
  return (
    <div className='exhibit-container'>
      <h3 className='user-data-title'>User Data</h3>
      <div className='card-container'>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Exhibit;
