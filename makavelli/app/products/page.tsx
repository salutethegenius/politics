const products = [
  { name: "LawBey", tagline: "Legal infrastructure for The Bahamas.", status: "planning" },
  { name: "VerityOS", tagline: "Strategic operating system core.", status: "active" },
  { name: "KRM Desk", tagline: "Kemis relationship management.", status: "active" },
  { name: "BACO Portal", tagline: "Bahamas company and open data portal.", status: "planning" },
  { name: "Dashboards", tagline: "Government and sector dashboards.", status: "active" },
  { name: "Bahamas Open Data Intelligence", tagline: "Public data intelligence layer.", status: "active" },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Products</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-foreground">{product.name}</h2>
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent-foreground">
                {product.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{product.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
