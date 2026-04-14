export default function PetHospitalHomepage() {
      title: 'Rescue, Adoption & Sanctuary',
      text:
        'We are a foster-based rescue and sanctuary dedicated to helping animals heal, stabilize, and find the right forever home.',
      image:
        'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Mobile Surgical Clinic',
      text:
        'Our mobile clinic provides affordable surgeries for the community, including dentals, amputations, eye removals, cystos, mass removals, and more.',
      image:
        'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Foster, Volunteer & Support',
      text:
        'From fostering and transport to event help, supply drives, and donations, there are many ways you can support the animals we care for.',
      image:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80',
  ];

  const helpItems = [
    'One-time or monthly donations',
    'Foster a dog or cat in your home',
    'Volunteer at adoption and fundraising events',
    'Donate supplies like food, litter, blankets, bowls, toys, towels, and leashes',
  ];

  const clinicLocations = [
    {
      title: 'Shangri-La Location',
      lines: ['2211 W. Shangri-La Rd.', 'Phoenix, AZ 85029'],
    },
    {
      title: 'AZ Animal Hospital',
      lines: ['31319 N. Scottsdale Rd.', 'Scottsdale, AZ 85266', '480-686-8083'],
      link: 'arizonaanimalhospital.com',
    },
    {
      title: 'Pet Supplies Plus',
      lines: ['245 E. Bell Rd. Suite #116', 'Phoenix, AZ 85022'],
    },
    {
      title: 'The Horny Toad Restaurant',
      lines: ['6738 E. Cave Creek Rd.', 'Cave Creek, AZ 85331'],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
      <header className="sticky top-0 z-50 border-b border-green-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900">
              <svg viewBox="0 0 64 64" className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <ellipse cx="20" cy="20" rx="5.2" ry="7.2" transform="rotate(-18 20 20)" />
                <ellipse cx="31" cy="14.5" rx="5.4" ry="7.8" />
                <ellipse cx="43" cy="20" rx="5.2" ry="7.2" transform="rotate(18 43 20)" />
                <ellipse cx="50.5" cy="31" rx="4.5" ry="6.2" transform="rotate(28 50.5 31)" />
                <ellipse cx="13.5" cy="31" rx="4.5" ry="6.2" transform="rotate(-28 13.5 31)" />
                <path d="M32 28c-5.2 0-10.2 2.2-13.4 6.2-2.6 3.2-3.4 7.1-2.1 10.3 1 2.6 3.2 4.3 5.9 4.3 2.2 0 4-.8 5.6-1.5 1.3-.6 2.5-1.1 3.9-1.1s2.6.5 3.9 1.1c1.6.7 3.4 1.5 5.6 1.5 2.7 0 4.9-1.7 5.9-4.3 1.3-3.2.5-7.1-2.1-10.3C42.2 30.2 37.2 28 32 28z" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-zinc-900">Little Rascals Rescue</span>
              <span className="text-xs tracking-wide text-zinc-500">Rescue • Sanctuary • Clinic</span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 lg:flex">
            <a href="#home" className="transition hover:text-green-900">Home</a>
            <a href="#about" className="transition hover:text-green-900">About</a>
            <a href="#services" className="transition hover:text-green-900">Services</a>
            <a href="#gallery" className="transition hover:text-green-900">Gallery</a>
            <a href="#contact" className="transition hover:text-green-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:6232106578"
              className="hidden rounded-full border border-green-900 px-5 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-green-50 md:inline-flex"
            >
              623-210-6578
            </a>
            <a
              href="#donate"
              className="rounded-full bg-green-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
            >
              Donate Now
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-medium text-green-900 shadow-sm">
                Foster-based 501(c)(3) animal rescue serving the Phoenix area
              </div>

              <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-6xl">
                Giving animals a second chance at the life <span className="text-green-900">they deserve.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                We are Little Rascals Rescue — a foster-based rescue, sanctuary, and mobile clinic dedicated to helping animals heal while they wait for their forever homes. Together with our community, we’re able to give animals a second chance at life and support the families who love them.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#donate"
                  className="rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/15 transition hover:bg-green-800"
                >
                  Make a Donation
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-green-900 hover:text-green-900"
                >
                  Explore Programs
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                  <div className="text-sm font-medium text-zinc-500">Call or Text</div>
                  <div className="mt-2 text-base font-semibold text-zinc-900">623-210-6578</div>
                </div>
                <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                  <div className="text-sm font-medium text-zinc-500">Mailing Address</div>
                  <div className="mt-2 text-base font-semibold text-zinc-900">Phoenix, Arizona</div>
                </div>
                <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                  <div className="text-sm font-medium text-zinc-500">Support Type</div>
                  <div className="mt-2 text-base font-semibold text-zinc-900">Donate, Foster, Volunteer</div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2 overflow-hidden rounded-[2rem] shadow-2xl shadow-green-900/10 ring-1 ring-black/5">
                  <img
                    src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1600&q=80"
                    alt="Rescue dog portrait"
                    className="h-[360px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-black/5">
                  <img
                    src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=80"
                    alt="Rescue cat"
                    className="h-[320px] w-full object-cover"
                  />
                </div>
                <div className="flex h-[320px] flex-col justify-between rounded-[2rem] bg-green-900 p-8 text-white shadow-lg">
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-green-100">Rescue Mission</div>
                    <div className="mt-4 max-w-xs text-4xl font-semibold leading-[1.1] tracking-tight">
                      Small rescue. Big impact.
                    </div>
                  </div>
                  <p className="max-w-sm text-base leading-7 text-green-50/90">
                    Saving animals through rescue, surgery access, adoption support, and community care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=1600&q=80"
                alt="Happy rescue dog close up"
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-800">About Little Rascals Rescue</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                Rescue. Sanctuary. Clinic. A loving place for animals to heal and find their way home.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We are a foster-based 501(c)(3) non-profit animal rescue built on the belief that a few caring people can make a difference in many animals’ lives. We provide a safe place for rescue animals to come, heal, and be loved while they wait for their forever homes.
              </p>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                We specialize in giving a second chance to animals others often overlook — including medical cases, seniors, and animals that need extra time, care, and patience. Through our foster-based approach, every animal receives individualized care in a home environment.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-green-50 p-5">
                  <div className="text-lg font-semibold text-zinc-900">501(c)(3) Non-Profit Rescue</div>
                  <div className="mt-2 text-sm leading-7 text-zinc-600">
                    As a registered non-profit, we rely on the support of our community to continue rescuing, rehabilitating, and rehoming animals in need.
                  </div>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-5">
                  <div className="text-lg font-semibold text-zinc-900">Foster-Based Care</div>
                  <div className="mt-2 text-sm leading-7 text-zinc-600">
                    Our animals are placed in loving foster homes where they receive individualized care, attention, and time to heal before finding their forever families.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-green-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-200">Programs & Services</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                What We Do Every Day to Save Lives
              </h2>
              <p className="mt-6 text-lg leading-8 text-green-50/80">
                From rescue and rehabilitation to affordable surgery access, everything we do is focused on giving animals a real chance at life.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="overflow-hidden rounded-[2rem] bg-white text-zinc-900 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
                  <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
                  <div className="p-7">
                    <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-zinc-600">{service.text}</p>
                    <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-green-900">
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-800">Rescue Life & Adoptables</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                Room for sanctuary kids, adoptable cats, event photos, and transformation stories.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-600">
              Here you’ll find a glimpse into our rescue work, sanctuary animals, adoptable pets, and moments that show the impact of what we do.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((src, index) => (
              <div key={index} className={`overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-black/5 ${index === 0 || index === 3 ? 'lg:translate-y-6' : ''}`}>
                <img src={src} alt={`Gallery ${index + 1}`} className="h-80 w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section id="donate" className="bg-white py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[2rem] bg-green-900 p-8 text-white shadow-2xl shadow-green-900/10 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-100">Support Little Rascals Rescue</div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                    Every donation directly helps us save lives.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-green-50/90">
                    Rescues survive through the support of people like you. Donations allow us to provide medical care, food, shelter, and everything our animals need during their time with us.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-green-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                      Donate or Sponsor
                    </a>
                    <a href="#contact" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                      Ask About Supply Drives
                    </a>
                  </div>
                </div>
                <div className="grid gap-3 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur">
                  {helpItems.map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-green-100 via-white to-green-50 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-800">How To Help</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                Ways You Can Help Save Lives
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                You can make an impact by fostering a pet, volunteering your time, donating supplies, helping at events, or supporting our rescue efforts in any way you can. Every bit of support helps us continue saving lives.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                  Become a Foster
                </a>
                <a href="#contact" className="rounded-full border border-green-900 px-6 py-3 text-sm font-semibold text-green-950 transition hover:bg-green-50">
                  Volunteer With Us
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-green-900/10 ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&w=1600&q=80"
                alt="Cat in rescue care"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-800">Mobile Clinic Locations</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                4 Amazing Locations to Choose From
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-600">
              Our mobile clinic serves multiple convenient locations across the Valley so more pets can receive affordable surgical care close to home.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clinicLocations.map((location) => (
              <div key={location.title} className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-lg font-semibold text-zinc-950">{location.title}</div>
                <div className="mt-4 space-y-1 text-sm leading-7 text-zinc-600">
                  {location.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                  {location.link && (
                    <div className="pt-1 font-medium text-green-900">{location.link}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-green-950 p-8 text-white shadow-2xl shadow-green-950/10">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-200">Contact Little Rascals Rescue</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Contact us to adopt, foster, donate, or learn how you can get involved</h2>
              <div className="mt-8 space-y-6 text-green-50/90">
                <div>
                  <div className="text-sm uppercase tracking-wide text-green-300">Primary Contact</div>
                  <div className="mt-2 text-lg font-semibold text-white">Jen — 623-210-6578</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-green-300">Secondary Contact</div>
                  <div className="mt-2 text-lg font-semibold text-white">Ryan — 623-606-4855</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-green-300">Email</div>
                  <div className="mt-2 text-lg font-semibold text-white">bu.ter.fly@hotmail.com</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-green-300">Mailing Address</div>
                  <div className="mt-2 text-base leading-7 text-green-50/90">
                    P.O. Box 87291<br />
                    Phoenix, AZ 85080
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
                <div className="text-lg font-semibold text-zinc-950">Clinic & Rescue Requests</div>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Reach out for adoption inquiries, fostering questions, clinic services, or any way you’d like to get involved.
                </p>
                <button className="mt-6 rounded-full bg-green-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                  Contact the Rescue
                </button>
              </div>
              <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-7 shadow-sm">
                <div className="text-lg font-semibold text-zinc-950">Mail Donations & Supply Drop-Offs</div>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  We also accept item donations and support from sponsors. Contact us for drop-off details, mailing options, or partnership opportunities.
                </p>
              </div>
              <div className="sm:col-span-2 overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=80"
                  alt="Dog receiving care"
                  className="h-72 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Little Rascals Rescue — homepage concept</div>
          <div className="flex gap-5">
            <a href="#about" className="hover:text-green-900">About</a>
            <a href="#services" className="hover:text-green-900">Programs</a>
            <a href="#contact" className="hover:text-green-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
