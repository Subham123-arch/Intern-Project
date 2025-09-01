export default function InputLabel({
    label = ""
} : { label: string }) {
  return (
    <div>
      <label className="text-xs mt-2 text-gray-600">{label}</label>
    </div>
  );
}