import { useState } from "react";
import { useMenu } from "../context/MenuContext";
import Toast from "../components/Toast";
import EditorField from "../components/admin/EditorField";
import MenuSidebar from "../components/admin/MenuSidebar";
import AddItemPanel from "../components/admin/AddItemPanel";

const defaultItem = {
  name: "",
  category: "",
  detail: "",
  price: "",
  tag: "",
  description: "",
  pairsWith: "",
  image: "",
  featured: false,
};

export default function MenuManager() {
  const { menuItems, setMenuItems } = useMenu();
  const [draftItems, setDraftItems] = useState(menuItems);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [saved, setSaved] = useState(false);

  const selectedItem = draftItems[selectedIndex] ?? draftItems[0] ?? defaultItem;

  function updateField(field, value) {
    if (!draftItems.length) return;

    const updatedItems = [...draftItems];

    updatedItems[selectedIndex] = {
      ...updatedItems[selectedIndex],
      [field]: value,
    };

    setDraftItems(updatedItems);
    setSaved(false);
  }

  function addNewItem() {
    setShowAddPanel(true);
  }

  function deleteSelectedItem() {
    const updatedItems = draftItems.filter((_, index) => index !== selectedIndex);

    setDraftItems(updatedItems);
    setSelectedIndex(0);
    setSaved(false);
  }

  function updateImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    updateField("image", imageUrl);
  }

  function createNewItem(newItem) {
    const updatedItems = [...draftItems, newItem];

    setDraftItems(updatedItems);
    setSelectedIndex(updatedItems.length - 1);
    setShowAddPanel(false);
    setSaved(false);
  }

  function saveChanges() {
    setMenuItems(draftItems);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  }

  return (
    <section className="min-h-screen bg-[#050505] px-6 py-36 text-white">
      <Toast show={saved} message="Changes saved" />

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <MenuSidebar
            items={draftItems}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
            onAddItem={addNewItem}
          />
        </aside>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h1 className="text-5xl font-black">Edit Item</h1>
              <p className="mt-3 text-zinc-400">
                Edit the item, then save changes to update the live menu.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5">
            <EditorField
              label="Name"
              value={selectedItem.name}
              onChange={(value) => updateField("name", value)}
            />

            <EditorField
              label="Category"
              value={selectedItem.category}
              onChange={(value) => updateField("category", value)}
            />

            <EditorField
              label="Detail"
              value={selectedItem.detail}
              onChange={(value) => updateField("detail", value)}
            />

            <EditorField
              label="Price"
              value={selectedItem.price}
              onChange={(value) => updateField("price", value)}
            />

            <EditorField
              label="Tag"
              value={selectedItem.tag}
              onChange={(value) => updateField("tag", value)}
            />

            <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-5">
              <input
                type="checkbox"
                checked={!!selectedItem.featured}
                onChange={(event) => {
                  const updatedItems = draftItems.map((item, index) => ({
                    ...item,
                    featured: index === selectedIndex ? event.target.checked : false,
                  }));

                  setDraftItems(updatedItems);
                  setSaved(false);
                }}
                className="h-5 w-5 accent-amber-400"
              />

              <span className="font-bold">Feature this item</span>
            </label>

            <div>
              <label className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
                Description
              </label>

              <textarea
                value={selectedItem.description}
                onChange={(event) => updateField("description", event.target.value)}
                rows="5"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
                Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={updateImage}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-zinc-300 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-amber-400 file:px-4 file:py-2 file:font-bold file:text-black"
              />

              {selectedItem.image && (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="mt-5 h-64 w-full rounded-2xl object-cover"
                />
              )}
            </div>

            <EditorField
              label="Pairs With"
              value={selectedItem.pairsWith}
              onChange={(value) => updateField("pairsWith", value)}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={addNewItem}
              className="rounded-full bg-emerald-500 px-8 py-4 font-black text-black transition hover:bg-emerald-400"
            >
              + Add Item
            </button>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="rounded-full border border-red-400/30 px-8 py-4 font-bold text-red-300 transition hover:bg-red-400/10"
            >
              Delete Item
            </button>

            <button
              onClick={saveChanges}
              className="rounded-full bg-amber-400 px-8 py-4 font-black text-black transition hover:bg-amber-300"
            >
              Save Changes
            </button>

            <button
              onClick={() => {
                setDraftItems(menuItems);
                setSelectedIndex(0);
              }}
              className="rounded-full border border-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#111] p-8">
            <h2 className="text-3xl font-black">Delete Menu Item?</h2>

            <p className="mt-5 text-zinc-400">Are you sure you want to delete</p>

            <p className="mt-2 text-xl font-black text-amber-400">{selectedItem.name}</p>

            <p className="mt-4 text-sm text-zinc-500">This action cannot be undone.</p>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="rounded-full border border-white/10 px-6 py-3"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  deleteSelectedItem();
                  setShowDeleteModal(false);
                }}
                className="rounded-full bg-red-500 px-6 py-3 font-bold text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <AddItemPanel
        show={showAddPanel}
        onClose={() => setShowAddPanel(false)}
        onCreate={createNewItem}
      />
    </section>
  );
}
