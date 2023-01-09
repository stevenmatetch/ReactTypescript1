import React, { useEffect, useState } from "react";
import "./Color.css";
import { Enumerable } from "sharp-collections";

interface Color {
  id: number;
  col: string;
}
let colorr: Color[] = [];

let thecol = "";
function Color() {
  const [colors, setcolors] = useState<Color[]>([]);

  //const [newcol, setnewCol] = useState<string>("");

  const chooseColor = (e: any) => {
    thecol = e.currentTarget.className;
  };

  const chooseSquare = (e: any) => {
    const enumerable = Enumerable.from(colors); // or List.from(data)

    const thisSquare = enumerable
      .where((x) => x.id == e.currentTarget.id)
      .toArray();
    thisSquare[0].col = thecol;
    setcolors([...colors]);

    /*for (const s of colors) 
    {
      if (e.currentTarget.id == s.id) 
      {
        console.log("yes");
        setnewCol(col);
      }
    }
    */
  };

  function ADD() {
    let colorr: Color[] = [];
    const newcol = {} as Color;
    newcol.id = 1;
    newcol.col = "red";
    colorr.push(newcol);

    const newcol1 = {} as Color;
    newcol1.id = 2;
    newcol1.col = "gray";
    colorr.push(newcol1);

    setcolors(colorr);
  }

  useEffect(() => {
    ADD();
  }, []);

  return (
    <div>
      <div>
        <div onClick={(e) => chooseColor(e)} className="black"></div>
        <div onClick={(e) => chooseColor(e)} className="green"></div>
        <div onClick={(e) => chooseColor(e)} className="orange"></div>
      </div>

      <div>
        {colors.map((color, index) => (
          <div
            style={{ backgroundColor: color.col }}
            key={index}
            className="div"
            id={color.id.toString()}
            onClick={(e) => chooseSquare(e)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Color;
