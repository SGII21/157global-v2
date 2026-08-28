import { useEffect, useState } from 'react'

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className="h-8 w-8 rounded-full border-2 border-[rgba(30,30,28,0.15)] border-t-accent"
        style={{ animation: 'spin 0.7s linear infinite' }}
      />
    </div>
  )
}

const bodyClass = 'font-sans text-[17px] leading-[1.75] text-ink'

function LabeledList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item.label} className="border-l border-accent pl-4 font-sans text-[17px] text-ink">
          <strong>{item.label}:</strong> {item.text}
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <section
        className="relative flex h-screen w-full items-center justify-center bg-cover bg-center px-6"
        style={{ backgroundImage: 'url("/LinkedIn_Banner.webp")' }}
      >
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <img
            src="/157Global-Stacked-Black-web.webp"
            alt="157Global"
            width="360"
            height="289"
            className="mx-auto mb-8 w-[180px]"
            style={{ filter: 'invert(1)' }}
          />
          <h1 className="font-serif text-[34px] font-bold leading-[1.1] text-white md:text-[52px]">
            Experienced judgment in difficult places.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        
        <p className="font-sans text-xl font-semibold leading-snug text-ink mt-6">
  We have one objective: to improve and strengthen our clients' position.
</p>   
<p className="font-sans text-lg font-normal leading-relaxed text-ink mt-6">
 With over three decades as global operators and advisors, we understand the importance of turning facts into leverage. Not Hollywood's version. Real leverage is the ability to discover and use facts to achieve a desired outcome.
</p>

        <div className="mt-8">
          <h2 className="mt-12 font-serif text-[28px] font-semibold leading-[1.25] text-ink">
            Structuring
          </h2>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            Whether navigating an aggressive investment, a crucial acquisition, or a potential vulnerability, clients engage us early, before a situation develops and options narrow. We work to establish facts, isolate risks, and build the preemptive leverage required to strengthen our clients' position.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mt-12 font-serif text-[28px] font-semibold leading-[1.25] text-ink">
            Trouble Arrives
          </h2>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            Trouble cascades from reactionary decisions to fragmented information, financial pressure, reputational risk, and panic-induced thinking. When a client faces escalating financial, reputational, civil, or criminal matters, we are engaged to identify the exact points of pressure and provide a path to resolve them. Whether uncovering hidden facts, managing public perception, unifying strategies across every front, or supporting legal counsel, we understand the environment and execute to create the leverage needed to shape the outcome.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mt-12 font-serif text-[28px] font-semibold leading-[1.25] text-ink">
            The Difference
          </h2>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
           Engagements are taken selectively. The clients we do accept benefit from our decades of real-world operational and advisory global experience managing and executing multi-forum, multi-disciplinary matters.
          </p>
        </div>

        <p className="font-sans text-xl font-semibold leading-snug text-ink mt-10">Experience dictates judgment. Judgment secures leverage.</p>
      </section>
    </>
  )
}
