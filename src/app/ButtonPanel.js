import React from "react";
import PropTypes from "prop-types";

import Display from "./Display";
import Period from "./Period";
import Button from "./Button";

import "../css/ButtonPanel.css";


class ButtonPanel extends React.Component {

  constructor(props) {
    super(props);
    this.hoverElement = this.hoverElement.bind(this);
  }

  hoverElement = (number,element,name) => {
    this.props.handElement(number,element,name);
  };

  render() {
    return (
      <div className = "button-panel-main">
        <div className = "button-panel">
          <Period id="01" symbol="1"/>
          <Button id="1" symbol="H" name="Hydrogen / Водород" hoverElement={this.hoverElement} orange/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Display number={this.props.number} element={this.props.element}/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="2" symbol="He" name="Helium / Гелий" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id="02" symbol="2"/>
          <Button id="3" symbol="Li" name="Lithium" hoverElement={this.hoverElement} orange/>
          <Button id="4" symbol="Be" name="Berillium / Бериллий" hoverElement={this.hoverElement} yellow/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Display name={this.props.name}/>
          <Button id="5" symbol="B" name="Boron / Бор" hoverElement={this.hoverElement} green/>
          <Button id="6" symbol="C" hoverElement={this.hoverElement} green/>
          <Button id="7" symbol="N" hoverElement={this.hoverElement} green/>
          <Button id="8" symbol="O" hoverElement={this.hoverElement} green/>
          <Button id="9" symbol="F" hoverElement={this.hoverElement} green/>
          <Button id="10" symbol="Ne" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id="03" symbol="3"/>
          <Button id="11" symbol="Na" hoverElement={this.hoverElement} orange/>
          <Button id="12" symbol="Mg" hoverElement={this.hoverElement} yellow/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Display/>
          <Button id="13" symbol="Al" hoverElement={this.hoverElement} cyan/>
          <Button id="14" symbol="Si" hoverElement={this.hoverElement} green/>
          <Button id="15" symbol="P" hoverElement={this.hoverElement} green/>
          <Button id="16" symbol="S" hoverElement={this.hoverElement} green/>
          <Button id="17" symbol="Cl" hoverElement={this.hoverElement} green/>
          <Button id="18" symbol="Ar" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id="04" symbol="4"/>
          <Button id="19" symbol="K" hoverElement={this.hoverElement} orange/>
          <Button id="20" symbol="Ca" hoverElement={this.hoverElement} yellow/>
          <Button id="21" symbol="Sc" hoverElement={this.hoverElement} pink/>
          <Button id="22" symbol="Ti" hoverElement={this.hoverElement} pink/>
          <Button id="23" symbol="V" hoverElement={this.hoverElement} pink/>
          <Button id="24" symbol="Cr" hoverElement={this.hoverElement} pink/>
          <Button id="25" symbol="Mn" hoverElement={this.hoverElement} pink/>
          <Button id="26" symbol="Fe" hoverElement={this.hoverElement} pink/>
          <Button id="27" symbol="Co" hoverElement={this.hoverElement} pink/>
          <Button id="28" symbol="Ni" hoverElement={this.hoverElement} pink/>
          <Button id="29" symbol="Cu" hoverElement={this.hoverElement} pink/>
          <Button id="30" symbol="Zn" hoverElement={this.hoverElement} cyan/>
          <Button id="31" symbol="Ga" hoverElement={this.hoverElement} cyan/>
          <Button id="32" symbol="Ge" hoverElement={this.hoverElement} cyan/>
          <Button id="33" symbol="As" hoverElement={this.hoverElement} green/>
          <Button id="34" symbol="Se" hoverElement={this.hoverElement} green/>
          <Button id="35" symbol="Br" hoverElement={this.hoverElement} green/>
          <Button id="36" symbol="Kr" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id="05" symbol="5"/>
          <Button id="37" symbol="Rb" hoverElement={this.hoverElement} orange/>
          <Button id="38" symbol="Sr" hoverElement={this.hoverElement} yellow/>
          <Button id="39" symbol="Y" hoverElement={this.hoverElement} pink/>
          <Button id="40" symbol="Zr" hoverElement={this.hoverElement} pink/>
          <Button id="41" symbol="Nb" hoverElement={this.hoverElement} pink/>
          <Button id="42" symbol="Mo" hoverElement={this.hoverElement} pink/>
          <Button id="43" symbol="Tc" hoverElement={this.hoverElement} pink/>
          <Button id="44" symbol="Ru" hoverElement={this.hoverElement} pink/>
          <Button id="45" symbol="Rh" hoverElement={this.hoverElement} pink/>
          <Button id="46" symbol="Pd" hoverElement={this.hoverElement} pink/>
          <Button id="47" symbol="Ag" hoverElement={this.hoverElement} pink/>
          <Button id="48" symbol="Cd" hoverElement={this.hoverElement} cyan/>
          <Button id="49" symbol="In" hoverElement={this.hoverElement} cyan/>
          <Button id="50" symbol="Sn" hoverElement={this.hoverElement} cyan/>
          <Button id="51" symbol="Sb" hoverElement={this.hoverElement} cyan/>
          <Button id="52" symbol="Te" hoverElement={this.hoverElement} green/>
          <Button id="53" symbol="I" hoverElement={this.hoverElement} green/>
          <Button id="54" symbol="Xe" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id="06" symbol="6"/>
          <Button id="55" symbol="Cs" hoverElement={this.hoverElement} orange/>
          <Button id="56" symbol="Ca" hoverElement={this.hoverElement} yellow/>
          <Button id="57" symbol="La" hoverElement={this.hoverElement} gray/>
          <Button id="72" symbol="Hf" hoverElement={this.hoverElement} pink/>
          <Button id="73" symbol="Ta" hoverElement={this.hoverElement} pink/>
          <Button id="74" symbol="W" hoverElement={this.hoverElement} pink/>
          <Button id="75" symbol="Re" hoverElement={this.hoverElement} pink/>
          <Button id="76" symbol="Os" hoverElement={this.hoverElement} pink/>
          <Button id="77" symbol="Ir" hoverElement={this.hoverElement} pink/>
          <Button id="78" symbol="Pt" hoverElement={this.hoverElement} pink/>
          <Button id="79" symbol="Au" hoverElement={this.hoverElement} pink/>
          <Button id="80" symbol="Hg" hoverElement={this.hoverElement} cyan/>
          <Button id="81" symbol="Tl" hoverElement={this.hoverElement} cyan/>
          <Button id="82" symbol="Pb" hoverElement={this.hoverElement} cyan/>
          <Button id="83" symbol="Bi" hoverElement={this.hoverElement} cyan/>
          <Button id="84" symbol="Po" hoverElement={this.hoverElement} cyan/>
          <Button id="85" symbol="At" hoverElement={this.hoverElement} green/>
          <Button id="86" symbol="Rn" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id="07" symbol="7"/>
          <Button id="87" symbol="Fr" hoverElement={this.hoverElement} orange/>
          <Button id="88" symbol="Ra" hoverElement={this.hoverElement} yellow/>
          <Button id="89" symbol="Ac" hoverElement={this.hoverElement} gray/>
          <Button id="104" symbol="Rf" hoverElement={this.hoverElement} pink/>
          <Button id="105" symbol="Db" hoverElement={this.hoverElement} pink/>
          <Button id="106" symbol="Sg" hoverElement={this.hoverElement} pink/>
          <Button id="107" symbol="Bh" hoverElement={this.hoverElement} pink/>
          <Button id="108" symbol="Hs" hoverElement={this.hoverElement} pink/>
          <Button id="109" symbol="Mt" hoverElement={this.hoverElement} pink/>
          <Button id="110" symbol="Ds" hoverElement={this.hoverElement} pink/>
          <Button id="111" symbol="Rg" hoverElement={this.hoverElement} pink/>
          <Button id="112" symbol="Uub" hoverElement={this.hoverElement} cyan/>
          <Button id="113" symbol="Uut" hoverElement={this.hoverElement} cyan/>
          <Button id="114" symbol="Uuq" hoverElement={this.hoverElement} cyan/>
          <Button id="115" symbol="Uup" hoverElement={this.hoverElement} cyan/>
          <Button id="116" symbol="Uuh" hoverElement={this.hoverElement} cyan/>
          <Button id="117" symbol="Uus" hoverElement={this.hoverElement} gray/>
          <Button id="118" symbol="Uuo" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id="006" symbol=""/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="57" symbol="La" hoverElement={this.hoverElement} magenta/>
          <Button id="58" symbol="Ce" hoverElement={this.hoverElement} magenta/>
          <Button id="59" symbol="Pr" hoverElement={this.hoverElement} magenta/>
          <Button id="60" symbol="Nd" hoverElement={this.hoverElement} magenta/>
          <Button id="61" symbol="Pm" hoverElement={this.hoverElement} magenta/>
          <Button id="62" symbol="Sm" hoverElement={this.hoverElement} magenta/>
          <Button id="63" symbol="Eu" hoverElement={this.hoverElement} magenta/>
          <Button id="64" symbol="Gd" hoverElement={this.hoverElement} magenta/>
          <Button id="65" symbol="Tb" hoverElement={this.hoverElement} magenta/>
          <Button id="66" symbol="Dy" hoverElement={this.hoverElement} magenta/>
          <Button id="67" symbol="Ho" hoverElement={this.hoverElement} magenta/>
          <Button id="68" symbol="Er" hoverElement={this.hoverElement} magenta/>
          <Button id="69" symbol="Tm" hoverElement={this.hoverElement} magenta/>
          <Button id="70" symbol="Yb" hoverElement={this.hoverElement} magenta/>
          <Button id="71" symbol="Lu" hoverElement={this.hoverElement} magenta/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
        </div>

        <div className = "button-panel">
          <Period id="007" symbol=""/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
          <Button id="89" symbol="Ac" hoverElement={this.hoverElement} magenta/>
          <Button id="90" symbol="Th" hoverElement={this.hoverElement} magenta/>
          <Button id="91" symbol="Pa" hoverElement={this.hoverElement} magenta/>
          <Button id="92" symbol="U" hoverElement={this.hoverElement} magenta/>
          <Button id="93" symbol="Np" hoverElement={this.hoverElement} magenta/>
          <Button id="94" symbol="Pu" hoverElement={this.hoverElement} magenta/>
          <Button id="95" symbol="Am" hoverElement={this.hoverElement} magenta/>
          <Button id="96" symbol="Cm" hoverElement={this.hoverElement} magenta/>
          <Button id="97" symbol="Bk" hoverElement={this.hoverElement} magenta/>
          <Button id="98" symbol="Cf" hoverElement={this.hoverElement} magenta/>
          <Button id="99" symbol="Es" hoverElement={this.hoverElement} magenta/>
          <Button id="100" symbol="Fm" hoverElement={this.hoverElement} magenta/>
          <Button id="101" symbol="Md" hoverElement={this.hoverElement} magenta/>
          <Button id="102" symbol="No" hoverElement={this.hoverElement} magenta/>
          <Button id="103" symbol="Lr" hoverElement={this.hoverElement} magenta/>
          <Button id="" symbol="" hoverElement={this.hoverElement} white/>
        </div>
      </div>
    );
  }
}
/*
ButtonPanel.propTypes = {
  hoverElement: PropTypes.func,
};
*/
export default ButtonPanel;