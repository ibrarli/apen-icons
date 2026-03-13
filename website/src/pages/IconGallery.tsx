import { useState } from "react";
import { ALL_ICONS } from "../icon-registry";

const IconGallery = () => {
  const [search, setSearch] = useState("");

  const formatName = (name: string) => name.replace(/([A-Z])/g, " $1").trim();

  const filteredIcons = ALL_ICONS.filter(
    (icon: any) =>
      icon.name.toLowerCase().includes(search.toLowerCase()) ||
      icon.tags?.some((tag: string) =>
        tag.toLowerCase().includes(search.toLowerCase()),
      ),
  );

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-slate-900">Icon Library</h2>
        <div className="relative max-w-sm">
          <input
            type="text"
            placeholder="Search icons..."
            className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grid: Auto-filling small 40px blocks */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-2">
        {filteredIcons.map((icon: any) => (
          <div
            key={icon.name}
            className="group relative flex items-center justify-center w-10 h-10 bg-white border border-slate-100 rounded-md hover:border-blue-500 hover:shadow-sm transition-all duration-200 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(`<${icon.name} />`);
            }}
          >
            <div className="text-slate-600 group-hover:text-blue-600 transition-colors">
              <icon.component size={18} />
            </div>

            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-medium rounded-lg opacity-0 group-hover:opacity-100 group-hover:-top-11 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl ring-1 ring-white/10">
              {formatName(icon.name)}

              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 rounded-sm"></div>
            </div>
          </div>
        ))}
      </div>

      {filteredIcons.length === 0 && (
        <div className="py-20 text-center text-slate-400 text-sm italic">
          No icons found.
        </div>
      )}
    </div>
  );
};

export default IconGallery;
