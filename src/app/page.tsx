import ProductList from "@/components/common/product-list";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Image from "next/image";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  return (
    <div className="space-y-6">
      <div className="px-5">
        <Image
          src="/banner-01.png"
          alt="Leve uma vida com estilo"
          height={0}
          width={0}
          sizes="100dvw"
          className="h-auto w-full"
        />
      </div>

      <ProductList title="Mais vendidos" products={products} />

      <div className="px-5">
        <Image
          src="/banner-02.png"
          alt="Seja autêntico"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default Home;
