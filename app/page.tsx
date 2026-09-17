import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import SpecialOffers from "@/components/SpecialOffers";
import BenefitsStrip from "@/components/BenefitsStrip";
import BestSellingProducts from "@/components/BestSellingProducts";
import HowItWorks from "@/components/HowItWorks";
import StoreSection from "@/components/StoreSection";
import Footer from "@/components/Footer";
import { strapiFetch } from "@/lib/strapi";

type HomepageData = {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroPrimaryButtonText: string;
  heroPrimaryButtonLink: string;
  heroWhatsappButtonText: string;
  heroWhatsappButtonLink: string;
  heroImage?: {
    url: string;
  }[];
};

type StrapiResponse = {
  data: HomepageData[];
};

type Category = {
  name: string;
  slug: string;
  image?: {
    url: string;
  }[];
};

type CategoriesResponse = {
  data: Category[];
};

export default async function Home() {
  // Fetch homepage data from Strapi
  const response: StrapiResponse = await strapiFetch(
    "/api/homepages?populate=*"
  );

  const homepage = response.data?.[0];

  if (!homepage) {
    throw new Error("Homepage data not found in Strapi");
  }

  // Fetch categories from Strapi
  const categoriesResponse: CategoriesResponse = await strapiFetch(
    "/api/categories?populate=*"
  );

  const categories = categoriesResponse.data || [];

  // Debug categories in terminal
  console.log(
    "CATEGORIES:",
    JSON.stringify(categories, null, 2)
  );
 const productsResponse = await strapiFetch(
  "/api/products?populate=*"
);

const products = productsResponse.data || [];

console.log(
  "PRODUCTS:",
  JSON.stringify(products, null, 2)
);

type StoreInformation = {
  address: string;
  phone: string;
  openingHours: string;
  directionsLink: string;
  storeImage?: {
    url: string;
  }[];
  mapImage?: {
    url: string;
  }[];
};

type StoreInformationResponse = {
  data: StoreInformation[];
};

const storeResponse: StoreInformationResponse = await strapiFetch(
  "/api/store-informations?populate=*"
);

const store = storeResponse.data?.[0];
console.log(
  "STORE:",
  JSON.stringify(store, null, 2)
);

if (!store) {
  throw new Error("Store information not found in Strapi");
}

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <Hero
          heroTitle={homepage.heroTitle}
          heroSubtitle={homepage.heroSubtitle}
          heroBadge={homepage.heroBadge}
          heroPrimaryButtonText={homepage.heroPrimaryButtonText}
          heroPrimaryButtonLink={homepage.heroPrimaryButtonLink}
          heroWhatsappButtonText={homepage.heroWhatsappButtonText}
          heroWhatsappButtonLink={homepage.heroWhatsappButtonLink}
          heroImage={homepage.heroImage?.[0]?.url}
        />

        <Categories categories={categories} />

        <SpecialOffers products={products} />

        <BenefitsStrip />

        <BestSellingProducts products={products} />

        <HowItWorks />

        <StoreSection store={store} />
      </main>

      <Footer />
    </>
  );
}