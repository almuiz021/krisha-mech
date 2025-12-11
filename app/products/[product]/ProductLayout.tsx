import Image from 'next/image';
import { ProductItem } from '@/types/ProductsTypes';

export default function ProductLayout({ product }: { product: ProductItem }) {
  const specs = Object.entries(product.desc.specifications ?? {});

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* ========== LEFT 75% ========== */}
        <div className="lg:col-span-9 space-y-10">
          {/* Image */}
          <div className="w-full h-[420px] relative bg-gray-50 rounded-xl shadow-md p-6">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Title + tagline + mc info */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            {product.tagline && (
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
                {product.tagline}
              </p>
            )}
            {product.desc.mcInfo && (
              <p className="text-gray-700 leading-relaxed max-w-4xl">
                {product.desc.mcInfo}
              </p>
            )}
          </div>

          {/* Features */}
          {product.desc.features?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc pl-5 text-gray-700">
                {product.desc.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Specifications */}
          {specs.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                {specs.map(([label, value]) => (
                  <Spec
                    key={label}
                    label={label}
                    value={value}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ========== RIGHT 25% ========== */}
        <aside className="lg:col-span-3 space-y-8">
          {/* CTA BOX */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-center">
              {product.name}
            </h3>

            {/* Brochure download – dynamic */}
            {product.brochure && (
              <a
                href={product.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-800 py-2.5 rounded-full hover:bg-gray-200 transition text-sm sm:text-base"
              >
                Download Product Brochure
              </a>
            )}

            {/* Get Quote – just logs "hii" for now */}
            <button
              onClick={() => console.log('hii')}
              className="w-full bg-gray-900 text-white py-2.5 rounded-full hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Get Quote
            </button>
          </div>

          {/* QUESTIONS BOX (generic, can be parameterized later) */}
          <div className="bg-gray-900 text-white rounded-xl p-6 space-y-4 shadow-md">
            <h4 className="text-lg font-semibold">Have Any Question?</h4>
            <p className="text-sm text-gray-300">
              Let us tell you more about {product.name}. Feel free to reach out
              to us anytime.
            </p>

            <a
              href="tel:+919342336169"
              className="flex items-center justify-center gap-2 bg-gray-800 py-2 rounded-full hover:bg-gray-700 transition text-sm sm:text-base"
            >
              +91 93423 36169
            </a>

            <a
              href="mailto:bfwmarketing@bfw.co.in"
              className="flex items-center justify-center gap-2 bg-white text-gray-900 py-2 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
            >
              bfwmarketing@bfw.co.in
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border rounded-lg p-3 bg-gray-50">
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="font-semibold text-gray-900 text-sm">{value}</p>
    </div>
  );
}
