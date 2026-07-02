import { useState } from "react";
import { X } from "lucide-react";

export default function AddItemPanel({ show, onClose, onCreate }) {
  const [item, setItem] = useState({
    category: "Beer",
    name: "",
    detail: "",
    price: "£0.00",
    tag: "",
    description: "",
    pairsWith: "",
    featured: false,
  });

  if (!show) return null;

  function updateField(field, value) {
    setItem({
      ...item,
      [field]: value,
    });
  }

  function createItem() {
    onCreate({
      ...item,
      name: item.name || "New Item",
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur">
      <button
        onClick={onClose}
        className="absolute inset-0 h-full w-full"
        aria-label="Close add item panel"
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-white/10 bg-[#080808] p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="rounded-full bg-white/10 p-3 hover:bg-white/20"
        >
          <X />
        </button>

        <h2 className="mt-10 text-5xl font-black">Add Menu Item</h2>

        <div className="mt-8 grid gap-5">
          <PanelField label="Name" value={item.name} onChange={(v) => updateField("name", v)} />
          <PanelField label="Category" value={item.category} onChange={(v) => updateField("category", v)} />
          <PanelField label="Detail" value={item.detail} onChange={(v) => updateField("detail", v)} />
          <PanelField label="Price" value={item.price} onChange={(v) => updateField("price", v)} />
          <PanelField label="Tag" value={item.tag} onChange={(v) => updateField("tag", v)} />
          <PanelField label="Pairs With" value={item.pairsWith} onChange={(v) => updateField("pairsWith", v)} />
        </div>

        <button
          onClick={createItem}
          className="mt-8 w-full rounded-full bg-amber-400 px-8 py-4 font-black text-black hover:bg-amber-300"
        >
          Create Item
        </button>
      </aside>
    </div>
  );
}

function PanelField({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-amber-400"
      />
    </div>
  );
}