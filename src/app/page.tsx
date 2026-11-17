import Link from "next/link";
import Image from "next/image";
import { categories } from "@/mocks/SkillMock";
import { navLinks } from "@/mocks/NavMock";
import { MobileMenu } from "@/components/MobileMenu";
import { work } from "@/mocks/LumaWorksMock";
import { StepIcon } from "@/components/StepIcon";
import { collageColumns } from "@/mocks/PeoplePhotoMock";
import { PhotoCollage } from "@/components/Photos";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const avatars2 = ["/AvatarRing1.svg", "/AvatarRing2.svg", "/AvatarRing3.svg", "/AvatarRing4.svg"];
const avatars = ["/Avatar1.svg", "/Avatar2.svg", "/Avatar3.svg"];
const courseStats = ["8 lessons", "2h 40min", "Intermediate"];
const stats = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];
const contactInfo = [
  { icon: "/IconMensage.svg", label: "Email", value: "contact@luma.com", href: "mailto:contact@luma.com" },
  { icon: "/IconClocksvg.svg", label: "Response time", value: "Up to 24 hours on business days" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="relative border-b border-line bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex flex-1">
            <Link href="/">
              <Image
                src="/luma.svg"
                alt="Luma home"
                width={64}
                height={24}
                priority
                className="h-auto w-16"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>

          <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="hidden items-center gap-4 md:flex">
              <button type="button" className="cursor-pointer px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink">
                Log in
              </button>
              <Link href="#" className="rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                Start learning
              </Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main>
        {/* LEARN AT YOUR OWN PACE */}
        <section id="learn" className="overflow-x-clip bg-cream pb-12 pt-6 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Learn at your own pace</p>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-[64px]">
                Build skills that actually move you forward.
              </h1>

              <p className="mt-6 max-w-md text-lg text-muted">
                Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused
                lesson at a time.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#"
                  className="rounded-lg bg-brand px-6 py-4 text-center text-sm font-bold text-white transition-opacity hover:opacity-90">
                  Explore courses
                </Link>
                <Link
                  href="#"
                  className="rounded-lg border border-line bg-white px-6 py-4 text-center text-sm font-bold text-ink transition-colors hover:bg-cream">
                  See how it works
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3 px-5 md:px-0">
                <div className="flex -space-x-2">
                  {avatars.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 rounded-full object-cover ring-2 ring-cream"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted">
                  <strong className="font-semibold text-ink">Trusted by 24,000+</strong> learners
                </p>
              </div>
            </div>
            <div className="relative order-first mx-auto w-full max-w-120 md:order-0 md:ml-auto md:mr-0">
              <div aria-hidden="true" className="absolute -right-3 bottom-6 top-6 w-full rounded-3xl bg-peach md:-right-9" />
              <div aria-hidden="true" className="absolute bottom-5 -left-4 size-21 rounded-full bg-lavender md:-left-10" />

              <div className="relative aspect-24/25 overflow-hidden rounded-3xl">
                <Image
                  src="/MulherLaptop.png"
                  alt="Smiling person with glasses working on a laptop"
                  fill
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="object-cover"
                  loading="eager"
                />
              </div>

              <div className="absolute -left-2 top-1 flex items-center gap-3 rounded-xl bg-white px-4 py-2 text-sm shadow-lg md:top-4 md:py-3 md:-left-5">
                <span className="rounded-md bg-lavender px-2 py-1 font-bold text-brand">120+</span>
                <p>expert-led courses</p>
              </div>

              <div className="absolute bottom-4 right-2 flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm shadow-lg md:py-3 md:bottom-8 md:-right-14">
                <Image src="/Estrela.svg" height={100} width={90} alt="estrela" style={{ width: "auto", height: "auto" }}></Image>
                <p>4.9 avg rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* FIND YOUR NEXT SKILL */}
        <section id="Find" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Find your next skill</p>

            <h2 className="mt-4 max-w-md font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              Learn something worth knowing.
            </h2>

            <p className="mt-4 max-w-md text-base text-muted">
              Short, practical courses designed around skills you can put to work immediately.
            </p>

            <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <li key={c.number}>
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg">
                    <span className="w-fit rounded-md bg-lavender px-2 py-1 text-xs font-bold text-brand">{c.number}</span>

                    <h3 className="mt-6 font-display text-xl font-bold text-ink">{c.title}</h3>

                    <p className="mt-3 text-sm text-muted">{c.description}</p>

                    <Link href={c.href} className="mt-auto inline-flex items-center gap-4 pt-8 text-sm font-semibold text-ink">
                      Explore
                      <Image src="/SetaDireita.svg" height={15} width={15} alt="Seta" style={{ width: "auto", height: "auto" }}></Image>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* MOST POPULAR THIS MONTH */}
        <section id="most-popular" className="bg-brand py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                <Image
                  src="/MulherBancada.png"
                  alt="Designer's desk with color swatches and a product prototype"
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute -left-3.5 -top-4 rounded-md bg-sun px-5 py-1.5 text-[12.5px] font-bold uppercase tracking-wider text-ink">
                Featured course
              </span>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/90">Most popular this month</p>

              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight lg:text-5xl">
                Designing products people understand.
              </h2>

              <p className="mt-6 max-w-md text-white/80">
                Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful
                interaction design.
              </p>

              <p className="mt-6 text-sm text-white/90">with Maya Chen · Senior Product Designer</p>

              <ul className="mt-6 flex flex-wrap gap-3">
                {courseStats.map((stat) => (
                  <li key={stat} className="rounded-lg border border-white/40 px-3 py-2 text-xs font-medium">
                    {stat}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#"
                  className="rounded-lg bg-sun px-6 py-4 text-center text-sm font-bold text-ink transition-opacity hover:opacity-90">
                  View course
                </Link>
                <Link href="#" className="px-6 py-4 text-center text-sm font-bold">
                  Browse all courses <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HOW LUMA WORKS */}
        <section id="how-it-works" className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand">How Luma works</p>

            <h2 className="mt-4 text-center font-display text-3xl font-extrabold leading-[1.05] tracking-tight md:text-[40px]">
              Less browsing. More learning.
            </h2>

            <ol className="mt-12 grid grid-cols-1 gap-16 md:mt-16 md:grid-cols-3 md:gap-8">
              {work.map((step, index) => (
                <li key={step.id} className="relative">
                  {index < work.length - 1 && (
                    <div aria-hidden="true" className="absolute left-6 top-6 hidden h-px w-[calc(100%+2rem)] bg-line md:block" />
                  )}
                  {/* Linha vertical Mobile*/}
                  {index > 0 && <div aria-hidden="true" className="absolute -top-11 left-6 h-11 w-px bg-line md:hidden" />}

                  <StepIcon variant={step.variant} />

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-widest text-muted">{step.number}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* STATS */}
        <section id="testimonial" aria-label="What learners say" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[2fr_1fr] md:gap-16">
            <figure>
              <Image src="/aspas.svg" alt="" width={20} height={20} style={{ width: "auto", height: "auto" }} />

              <blockquote className="mt-2 max-w-xl font-display text-2xl font-semibold leading-[1.45] tracking-tight text-ink md:text-3xl">
                <p>The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.</p>
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <Image src="/AlexMorgan.svg" alt="" width={48} height={48} className="size-12 rounded-full object-cover" />
                <div>
                  <p className="text-base font-bold text-ink">Alex Morgan</p>
                  <p className="text-sm text-subtle">Product Manager</p>
                </div>
              </figcaption>
            </figure>
            <ul className="grid grid-cols-3 gap-4 md:flex md:flex-col md:gap-8 md:border-l md:border-line md:pl-12">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <p className="font-display text-4xl font-extrabold leading-none text-brand md:text-[64px]">{stat.value}</p>
                  <p className="mt-1 text-xs text-subtle md:text-sm">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* THE PEOPLE */}
        <section id="people" className="bg-cream py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">The people</p>

              <h2 className="mt-4 max-w-md font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Meet international students &amp; teachers
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in
                aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
              </p>

              <button
                type="button"
                className="mt-8 cursor-pointer rounded-lg border border-line bg-white px-6 py-4 text-sm font-bold text-ink">
                Explore teachers and students
              </button>
            </div>

            <PhotoCollage columns={collageColumns} />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Contact</p>

              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl">Get in touch</h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in
                teaching with Luma, we’d love to hear from you.
              </p>

              <ul className="mt-8 flex max-w-lg flex-col gap-4">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-center gap-4 rounded-2xl bg-cream p-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-lavender">
                      <Image src={item.icon} alt="" width={20} height={20} />
                    </span>
                    <div className="text-sm">
                      <p className="text-ink">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-brand hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <ContactForm />
          </div>
        </section>

        {/* FINAL */}
        <section id="join" className="relative overflow-hidden bg-butter py-16 md:py-24">
          <Image src="/Background.png" alt="" fill sizes="100vw" className="object-cover" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
            <div className="flex -space-x-2">
              {avatars2.map((src) => (
                <Image key={src} src={src} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-[56px]">
                What will you learn next?
              </h2>
              <p className="text-lg text-muted">Start with one course. Build from there.</p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
              <Link href="#" className="rounded-lg bg-brand px-6 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
                Explore all courses
              </Link>
              <Link
                href="#"
                className="rounded-lg border border-line bg-white px-6 py-4 text-sm font-bold text-ink transition-colors hover:bg-cream">
                Join Luma
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
