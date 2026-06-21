import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { portfolioCategories } from "@/data/portfolio-categories"
import { slugToId, categorySlug } from "../page"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return Object.keys(slugToId).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const id = slugToId[slug]
  const category = portfolioCategories.find((c) => c.id === id)
  if (!category) return {}

  const metadataBySlug: Record<string, { title: string; description: string }> = {
    "self-publishing": {
      title: "Self Publishing Services Delhi NCR | Book Design and Production | Magnum",
      description:
        "Professional self-publishing support for individual authors in India. Book cover design, layout, editing, and print production. Based in Delhi, serving authors nationwide.",
    },
    "think-tanks-defence-security": {
      title: "Think Tank and Defence Research Publication Design India | Magnum Custom Publishing",
      description:
        "Specialist publication design for think tanks, defence research institutions, and security studies organisations. Policy reports, monographs, and research papers. New Delhi.",
    },
    "global-consultants-trade": {
      title: "Corporate Report Design for Global Consultants and Trade Organisations | Magnum",
      description:
        "Professional report design and production for international consultants, trade organisations, and industry bodies. White papers, annual reports, research publications. Delhi NCR.",
    },
    "foreign-languages": {
      title: "Foreign Language Publication Design India | French Russian Spanish | Magnum",
      description:
        "Publication design and layout for documents in French, Russian, Spanish, and other foreign languages. International-standard production from New Delhi since 2005.",
    },
    "climate-change": {
      title: "Climate Change Research Publication Design India | Magnum Custom Publishing",
      description:
        "Specialist design and production for climate change research reports, sustainability publications, and environmental policy documents. Serving research institutions across India.",
    },
    "government-of-india": {
      title: "Government Publication Design India | Official Reports and Policy Documents | Magnum",
      description:
        "Design and production of official government publications, policy documents, and administrative reports for Government of India ministries and agencies. Based in New Delhi.",
    },
    "csr": {
      title: "CSR Publication Design India | Sustainability Reports | Magnum Custom Publishing",
      description:
        "Professional design for CSR reports, sustainability publications, and corporate responsibility documents. Serving corporates and NGOs across India from New Delhi.",
    },
    "school-books": {
      title: "School Textbook Design and Production India | Magnum Custom Publishing Delhi",
      description:
        "Professional design, layout, and production of school textbooks and educational materials for CBSE and other curricula. Serving schools and publishers across India.",
    },
    "childrens-books-regional-languages": {
      title: "Children's Book Design in Indian Regional Languages | Magnum Custom Publishing",
      description:
        "Specialist design and production of children's books in Hindi, Gujarati, Marathi, and other Indian regional languages. Educational and illustrated books from New Delhi.",
    },
  }

  const seo = metadataBySlug[slug]
  if (!seo) return {}

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://magnumcustompublishing.com/portfolio/${slug}`,
    },
  }
}

export default async function PortfolioCategoryPage({ params }: Props) {
  const { slug } = await params
  const id = slugToId[slug]
  const category = portfolioCategories.find((c) => c.id === id)

  if (!category) notFound()

  const isChildrenBooks = category.name === "Children's Books in Regional Languages"

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/portfolio" className="hover:text-[rgb(250,165,27)] transition-colors">Portfolio</Link>
          <ArrowRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">{category.name}</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{category.description}</p>
          <p className="text-sm text-[rgb(250,165,27)] font-semibold mt-2">{category.images.length} publications</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {category.images.map((image, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
              <div
                className="relative overflow-hidden bg-white"
                style={{ aspectRatio: isChildrenBooks ? "1.5" : "3 / 4.2" }}
              >
                <Image
                  src={image.image}
                  alt={image.altText ?? image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-4 w-full">
                    <p className="text-sm font-semibold mb-1 line-clamp-2">{image.title}</p>
                    <p className="text-xs text-gray-200 line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other categories */}
        <div className="border-t border-gray-100 pt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Portfolio Categories</h2>
          <div className="flex flex-wrap gap-3">
            {portfolioCategories
              .filter((c) => c.id !== category.id)
              .map((c) => {
                const s = categorySlug[c.id] ?? c.id
                return (
                  <Link
                    key={c.id}
                    href={`/portfolio/${s}`}
                    className="px-4 py-2 bg-orange-50 text-[rgb(250,165,27)] border border-orange-200 rounded-lg text-sm font-semibold hover:bg-[rgb(250,165,27)] hover:text-white transition-colors"
                  >
                    {c.name}
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
