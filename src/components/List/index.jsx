import Left from "./Left";
import Right from "./Right";

function List() {
  return (
    <div className="flex  w-full [&>div]:w-full h-full max-w-max">
      <Left />
      <Right />
    </div>
  );
}
export default List;
