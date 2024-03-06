type editInputType = {
  label: string;
  value?: string;
  name: string;
  type?: string;
  change?: (e: any) => void;
  error?: string;
};

const EditInput: React.FC<editInputType> = ({
  label,
  name,
  value,
  change,
  type,
  error,
}) => {
  return (
    <div className="my-2">
      <input
        type={type ?? "text"}
        name={name}
        value={value}
        onChange={change}
        placeholder={label}
        className="block w-full rounded-md py-2 px-4 outline-none text bg-white border border-gray-500 mt-2"
        required
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default EditInput;
