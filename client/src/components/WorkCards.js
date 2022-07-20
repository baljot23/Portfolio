const WorkCards = (props) => {
  return (
    <div className="relative bg-violet-300">
      <img src={props.bg} alt="/" className="object-cover w-full h-full" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default WorkCards;