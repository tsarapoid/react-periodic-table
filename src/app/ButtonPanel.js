import React from "react";
import PropTypes from "prop-types";

import Display from "./Display";
import Period from "./Period";
import Button from "./Button";

import "../css/ButtonPanel.css";


class ButtonPanel extends React.Component {
  hoverElement = (number, element) => {
    this.props.handElement(number, element);
  };

  render() {
    return (
      <div className = "button-panel-main">
        <div className = "button-panel">
          <Period id = "01" name="1"/>
          <Button id = "1" name="H" hoverElement={this.hoverElement} orange/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Display number={this.props.number} element={this.props.element} division={1}/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Button id = "2" name="He" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id = "02" name="2"/>
          <Button id = "3" name="Li" hoverElement={this.hoverElement} orange/>
          <Button id = "4" name="Be" hoverElement={this.hoverElement} yellow/>
          <Display number={this.props.number} element={this.props.element} division={2}/>
          <Button id = "5" name="B" hoverElement={this.hoverElement} green/>
          <Button id = "6" name="C" hoverElement={this.hoverElement} green/>
          <Button id = "7" name="N" hoverElement={this.hoverElement} green/>
          <Button id = "8" name="O" hoverElement={this.hoverElement} green/>
          <Button id = "9" name="F" hoverElement={this.hoverElement} green/>
          <Button id = "10" name="Ne" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id = "03" name="3"/>
          <Button id = "11" name="Na" hoverElement={this.hoverElement} orange/>
          <Button id = "12" name="Mg" hoverElement={this.hoverElement} yellow/>
          <Display number={this.props.number} element={this.props.element} division={3}/>
          <Button id = "13" name="Al" hoverElement={this.hoverElement} cyan/>
          <Button id = "14" name="Si" hoverElement={this.hoverElement} green/>
          <Button id = "15" name="P" hoverElement={this.hoverElement} green/>
          <Button id = "16" name="S" hoverElement={this.hoverElement} green/>
          <Button id = "17" name="Cl" hoverElement={this.hoverElement} green/>
          <Button id = "18" name="Ar" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id = "04" name="4"/>
          <Button id = "19" name="K" hoverElement={this.hoverElement} orange/>
          <Button id = "20" name="Ca" hoverElement={this.hoverElement} yellow/>
          <Button id = "21" name="Sc" hoverElement={this.hoverElement} pink/>
          <Button id = "22" name="Ti" hoverElement={this.hoverElement} pink/>
          <Button id = "23" name="V" hoverElement={this.hoverElement} pink/>
          <Button id = "24" name="Cr" hoverElement={this.hoverElement} pink/>
          <Button id = "25" name="Mn" hoverElement={this.hoverElement} pink/>
          <Button id = "26" name="Fe" hoverElement={this.hoverElement} pink/>
          <Button id = "27" name="Co" hoverElement={this.hoverElement} pink/>
          <Button id = "28" name="Ni" hoverElement={this.hoverElement} pink/>
          <Button id = "29" name="Cu" hoverElement={this.hoverElement} pink/>
          <Button id = "30" name="Zn" hoverElement={this.hoverElement} cyan/>
          <Button id = "31" name="Ga" hoverElement={this.hoverElement} cyan/>
          <Button id = "32" name="Ge" hoverElement={this.hoverElement} cyan/>
          <Button id = "33" name="As" hoverElement={this.hoverElement} green/>
          <Button id = "34" name="Se" hoverElement={this.hoverElement} green/>
          <Button id = "35" name="Br" hoverElement={this.hoverElement} green/>
          <Button id = "36" name="Kr" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id = "05" name="5"/>
          <Button id = "37" name="Rb" hoverElement={this.hoverElement} orange/>
          <Button id = "38" name="Sr" hoverElement={this.hoverElement} yellow/>
          <Button id = "39" name="Y" hoverElement={this.hoverElement} pink/>
          <Button id = "40" name="Zr" hoverElement={this.hoverElement} pink/>
          <Button id = "41" name="Nb" hoverElement={this.hoverElement} pink/>
          <Button id = "42" name="Mo" hoverElement={this.hoverElement} pink/>
          <Button id = "43" name="Tc" hoverElement={this.hoverElement} pink/>
          <Button id = "44" name="Ru" hoverElement={this.hoverElement} pink/>
          <Button id = "45" name="Rh" hoverElement={this.hoverElement} pink/>
          <Button id = "46" name="Pd" hoverElement={this.hoverElement} pink/>
          <Button id = "47" name="Ag" hoverElement={this.hoverElement} pink/>
          <Button id = "48" name="Cd" hoverElement={this.hoverElement} cyan/>
          <Button id = "49" name="In" hoverElement={this.hoverElement} cyan/>
          <Button id = "50" name="Sn" hoverElement={this.hoverElement} cyan/>
          <Button id = "51" name="Sb" hoverElement={this.hoverElement} cyan/>
          <Button id = "52" name="Te" hoverElement={this.hoverElement} green/>
          <Button id = "53" name="I" hoverElement={this.hoverElement} green/>
          <Button id = "54" name="Xe" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id = "06" name="6"/>
          <Button id = "55" name="Cs" hoverElement={this.hoverElement} orange/>
          <Button id = "56" name="Ca" hoverElement={this.hoverElement} yellow/>
          <Button id = "57" name="La" hoverElement={this.hoverElement} gray/>
          <Button id = "72" name="Hf" hoverElement={this.hoverElement} pink/>
          <Button id = "73" name="Ta" hoverElement={this.hoverElement} pink/>
          <Button id = "74" name="W" hoverElement={this.hoverElement} pink/>
          <Button id = "75" name="Re" hoverElement={this.hoverElement} pink/>
          <Button id = "76" name="Os" hoverElement={this.hoverElement} pink/>
          <Button id = "77" name="Ir" hoverElement={this.hoverElement} pink/>
          <Button id = "78" name="Pt" hoverElement={this.hoverElement} pink/>
          <Button id = "79" name="Au" hoverElement={this.hoverElement} pink/>
          <Button id = "80" name="Hg" hoverElement={this.hoverElement} cyan/>
          <Button id = "81" name="Tl" hoverElement={this.hoverElement} cyan/>
          <Button id = "82" name="Pb" hoverElement={this.hoverElement} cyan/>
          <Button id = "83" name="Bi" hoverElement={this.hoverElement} cyan/>
          <Button id = "84" name="Po" hoverElement={this.hoverElement} cyan/>
          <Button id = "85" name="At" hoverElement={this.hoverElement} green/>
          <Button id = "86" name="Rn" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id = "07" name="7"/>
          <Button id = "87" name="Fr" hoverElement={this.hoverElement} orange/>
          <Button id = "88" name="Ra" hoverElement={this.hoverElement} yellow/>
          <Button id = "89" name="Ac" hoverElement={this.hoverElement} gray/>
          <Button id = "104" name="Rf" hoverElement={this.hoverElement} pink/>
          <Button id = "105" name="Db" hoverElement={this.hoverElement} pink/>
          <Button id = "106" name="Sg" hoverElement={this.hoverElement} pink/>
          <Button id = "107" name="Bh" hoverElement={this.hoverElement} pink/>
          <Button id = "108" name="Hs" hoverElement={this.hoverElement} pink/>
          <Button id = "109" name="Mt" hoverElement={this.hoverElement} pink/>
          <Button id = "110" name="Ds" hoverElement={this.hoverElement} pink/>
          <Button id = "111" name="Rg" hoverElement={this.hoverElement} pink/>
          <Button id = "112" name="Uub" hoverElement={this.hoverElement} cyan/>
          <Button id = "113" name="Uut" hoverElement={this.hoverElement} cyan/>
          <Button id = "114" name="Uuq" hoverElement={this.hoverElement} cyan/>
          <Button id = "115" name="Uup" hoverElement={this.hoverElement} cyan/>
          <Button id = "116" name="Uuh" hoverElement={this.hoverElement} cyan/>
          <Button id = "117" name="Uus" hoverElement={this.hoverElement} gray/>
          <Button id = "118" name="Uuo" hoverElement={this.hoverElement} blue/>
        </div>

        <div className = "button-panel">
          <Period id = "006" name=""/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Button id = "57" name="La" hoverElement={this.hoverElement} magenta/>
          <Button id = "58" name="Ce" hoverElement={this.hoverElement} magenta/>
          <Button id = "59" name="Pr" hoverElement={this.hoverElement} magenta/>
          <Button id = "60" name="Nd" hoverElement={this.hoverElement} magenta/>
          <Button id = "61" name="Pm" hoverElement={this.hoverElement} magenta/>
          <Button id = "62" name="Sm" hoverElement={this.hoverElement} magenta/>
          <Button id = "63" name="Eu" hoverElement={this.hoverElement} magenta/>
          <Button id = "64" name="Gd" hoverElement={this.hoverElement} magenta/>
          <Button id = "65" name="Tb" hoverElement={this.hoverElement} magenta/>
          <Button id = "66" name="Dy" hoverElement={this.hoverElement} magenta/>
          <Button id = "67" name="Ho" hoverElement={this.hoverElement} magenta/>
          <Button id = "68" name="Er" hoverElement={this.hoverElement} magenta/>
          <Button id = "69" name="Tm" hoverElement={this.hoverElement} magenta/>
          <Button id = "70" name="Yb" hoverElement={this.hoverElement} magenta/>
          <Button id = "71" name="Lu" hoverElement={this.hoverElement} magenta/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
        </div>

        <div className = "button-panel">
          <Period id = "007" name=""/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
          <Button id = "89" name="Ac" hoverElement={this.hoverElement} magenta/>
          <Button id = "90" name="Th" hoverElement={this.hoverElement} magenta/>
          <Button id = "91" name="Pa" hoverElement={this.hoverElement} magenta/>
          <Button id = "92" name="U" hoverElement={this.hoverElement} magenta/>
          <Button id = "93" name="Np" hoverElement={this.hoverElement} magenta/>
          <Button id = "94" name="Pu" hoverElement={this.hoverElement} magenta/>
          <Button id = "95" name="Am" hoverElement={this.hoverElement} magenta/>
          <Button id = "96" name="Cm" hoverElement={this.hoverElement} magenta/>
          <Button id = "97" name="Bk" hoverElement={this.hoverElement} magenta/>
          <Button id = "98" name="Cf" hoverElement={this.hoverElement} magenta/>
          <Button id = "99" name="Es" hoverElement={this.hoverElement} magenta/>
          <Button id = "100" name="Fm" hoverElement={this.hoverElement} magenta/>
          <Button id = "101" name="Md" hoverElement={this.hoverElement} magenta/>
          <Button id = "102" name="No" hoverElement={this.hoverElement} magenta/>
          <Button id = "103" name="Lr" hoverElement={this.hoverElement} magenta/>
          <Button id = "" name="" hoverElement={this.hoverElement} white/>
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