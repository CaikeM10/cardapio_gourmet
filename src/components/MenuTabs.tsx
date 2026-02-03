"use client";

type Category = {
  id: string;
  label: string;
};

type MenuTabsProps = {
  categories: Category[];
};

export default function MenuTabs({ categories }: MenuTabsProps) {
  if (categories.length === 0) return null;

  return (
    <div className="sticky top-0 z-30 bg-white px-4 py-3">
      <div className="flex gap-2 overflow-x-auto">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            {cat.label}
          </a>
        ))}
      </div>
    </div>
  );
}
