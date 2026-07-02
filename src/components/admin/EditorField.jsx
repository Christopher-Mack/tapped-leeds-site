export default function EditorField({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
        {label}
      </label>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-amber-400"
      />
    </div>
  );
}