import item1 from "../../assets/pintaIPA.jpg";
import item2 from "../../assets/pintaROJA.jpg";
const ItemListContainer = () => {
  return (
    <div style={{ backgroundColor: "grey", padding: "5px", display: "flex", }}>
      <div>
          <h2>IPA</h2>
          <img src={item1} alt="birraBanner" />
      </div>
      <div>
          <h2>HONEY</h2>
          <img src={item1} alt="birraBanner" />
      </div>
        <div>
          <h2>GOLDEN</h2>
          <img src={item1} alt="birraBanner" />
      </div>
    </div>
    
  );
};

export default ItemListContainer;
