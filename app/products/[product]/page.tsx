import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SpecsTable } from './SpecsTable';
import { findProductBySlug } from '@/helpers/findProducts';
import { ProductSidebar } from './ProductSideBar';
import { footerContent } from '@/data/footerContent';

const {
  contactInfo: { email, phone },
} = footerContent;

interface PageProps {
  params: Promise<{ product: string }>; // Next 16: params is a Promise
}

export default async function ProductPage({ params }: PageProps) {
  const { product: slug } = await params;

  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* ========== LEFT 75% ========== */}
        <div className="lg:col-span-9 space-y-10">
          {/* Image */}
          <div className="w-full h-[420px] relative bg-cream rounded-xl shadow-card-sm p-6">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Title + tagline + mc info */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-panel">{product.name}</h1>
            {product.tagline && (
              <p className="text-text-main/90 text-base sm:text-lg max-w-3xl">
                {product.tagline}
              </p>
            )}
            {product?.desc?.mcInfo && (
              <p className="text-text-main leading-relaxed max-w-4xl">
                {product.desc.mcInfo}
              </p>
            )}
          </div>

          {/* Features */}

          {Array.isArray(product.desc?.features) &&
            product.desc.features.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-panel">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc pl-5 text-text-main">
                  {product.desc.features.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

          {/* Specifications */}
          {product?.desc?.specTable && (
            <div className="space-y-4 mt-8">
              <h2 className="text-xl font-semibold text-panel">
                Specifications
              </h2>
              <SpecsTable data={product.desc.specTable} />
            </div>
          )}
        </div>

        {/* ========== RIGHT 25% (Client Component) ========== */}
        <aside className="lg:col-span-3 space-y-8">
          <ProductSidebar
            productName={product.name}
            brochure={product.brochure}
            phone={phone}
            email={email}
          />
        </aside>
      </div>
    </section>
  );
}
