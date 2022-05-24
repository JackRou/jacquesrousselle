import "./index.css";

const Modale = (props) => {
  return (
    <>
      <div
        onClick={() => {
          props.setShow(false);
        }}
        className="modale"
      >
        <div className="logo">
          <div className="name"> {props.character.name}</div>
        </div>
        <img className="portrait" src={props.character.image} />
        <div className="specify">
          <div className="Birth"> Birth : {props.character.dateOfBirth}</div>
          <div className="Birth"> Species : {props.character.species}</div>

          <div className="house">House :{props.character.house}</div>
          <div className="patro">Patronus :{props.character.patronus}</div>
          <div className="blason">Blason :{props.character.blason}</div>

          <div className="history">
            Son histoire : Le jour de ses onze ans, Harry Potter, un orphelin
            élevé par un oncle et une tante qui le détestent, voit son existence
            bouleversée.
          </div>
        </div>
      </div>
    </>
  );
};

export default Modale;
//<img src={logo} alt="hhh" width="440px" />
