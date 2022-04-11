import "../App.css";
import PropsClass from "./PropsClass";
import PropsFunction from "./PropsFunction";
//impt ==> TAB

function ReactTuto() {
  return (
    <div className="ReactTuto">
      <hr />
      <PropsFunction props_key="function 2022 props data geldi" />
      <hr />
      <PropsClass
        props_key="class 2022 props data geldi"
        adi="Hamit Class"
        soyadi="Mızrak Class"
      />
      <hr />
    </div>
  );
}

export default ReactTuto;
