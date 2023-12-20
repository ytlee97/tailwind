import { useState, useLayoutEffect, useRef } from "react";
import { Rnd } from "react-rnd";

function Right() {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const ref = useRef(null);
  useLayoutEffect(() => {
    setState({
      x: ref.current?.offsetWidth,
      y: ref.current?.offsetHeight,
    });
  }, []);
  return (
    <Rnd
      style={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
      default={
        {
          // height: "100%",
          // width: "100%",
        }
      }
      bounds={"parent"}
      enableResizing={{
        left: true,
        right: false,
        top: false,
        bottom: false,
      }}
      disableDragging={true}
      onResize={(e, direction, ref) => {
        setState({
          x: ref.offsetWidth,
          y: ref.offsetHeight,
        });
      }}
      minWidth={"30%"}
      maxWidth={"60%"}
      className={" bg-red-50"}
    >
      <div ref={ref}>
        <p>
          {state.x} {state.y}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          rerum iste aliquam illum expedita delectus recusandae voluptatem eum
          hic non laudantium praesentium, voluptatum provident perferendis
          doloribus, dolor minus ullam. Commodi!
        </p>
      </div>
    </Rnd>
  );
}

export default Right;
