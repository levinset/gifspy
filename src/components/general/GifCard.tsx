//import libraries and components

//types
import { GifType } from "../../types/GifTypes";
//main component
export default function GifCard(props: GifType) {
  return (
    <>
      <div key={props.id}>
        <img
          className="w-full my-2 rounded-lg"
          src={props.images.original.url}
          alt={props.title}
        />
      </div>
    </>
  );
}
