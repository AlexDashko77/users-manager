const Field = ({ title, value, change, type }) => {
  return (
    <div>
      <p>{title}</p>
      <input
        type={type}
        className="mt-1 w-60 outline-none border-2 border-teal-700"
        value={value}
        onChange={(e) => change(e.currentTarget.value)}
      />
    </div>
  );
};

export default Field;
