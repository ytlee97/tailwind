import { useLayoutEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";

function Bottom() {
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
        background: "blue",
      }}
      default={
        {
          // height: "100%",
          // width: "100%",
        }
      }
      minWidth={300}
      bounds={"parent"}
      enableResizing={{
        top: true,
      }}
      disableDragging={true}
      onResize={(e, direction, ref) => {
        setState({
          x: ref.offsetWidth,
          y: ref.offsetHeight,
        });
      }}
    >
      <div ref={ref}>
        <p>
          aa{state.x} {state.y}
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

export default Bottom;
