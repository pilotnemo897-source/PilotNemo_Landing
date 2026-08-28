import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      title: 'Mobile App Development',
      desc: 'Native and cross-platform mobile solutions engineered for performance, scale, and intuitive user experiences.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-CW9PvBjim5Jb3O9hDJvHjdNdMaNrQ39j7tkmSX1az-kErHtiqYqRyZF0kTa-B5Len6W61hvHOUe1HcUXEbsJvtSYfAIihzjJLXDL-AU_9yjUHBdJFyf-ltXta0IzyZHoWWF2Gk-xiGIA5G42_KokGtxKDKnOuLl2--7I9XBGBZ_Q3b3h3raEsRRVNCjR-Fvw-Sooj0NAXeei0bGWsx836PyEyAZfxp1QnPmfV1SK3ipfiz7WrCT_VPXJ78sQbiH-K_QBrnGe2Wv-MS4',
      tags: ['iOS', 'Android', 'Flutter', 'React Native', 'Swift'],
    },
    {
      title: 'Web Development',
      desc: 'Robust, scalable web applications and enterprise platforms built with modern tech stacks and architectural best practices.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrkX_7bkg9_solx9tD8vBo4CvqYwY38CXOo_s8rY5Pkmegff4LYawT0-sKelerngWo8cKXAaD3OE8rXIXPIJcrXxW-8D9UyXoMqzB5SlvhCMrPDMqrtSRoMJ87gXPtaeg6AeXdq9Dheewc-N08BDqtRtHJ5kMZN2fP8iD9pCATWLWy2ZCrjb2WxrMscMaeJE6McXbCQwaVJwkRwlvvu2CweKMFOuIrt2xL7XqZkp9QTnvbiWFfFdBNSOV2pM7GbwsffJgcQQrQHb8WxNM',
      tags: ['React', 'Node.js', 'Next.js', 'Python', 'AWS'],
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centric interface design and experience mapping that drives engagement and simplifies complex workflows.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_8NMmc43kqG7A8jn-f-uRvdaPDQJqT9RGQZ22orzZPQ7S-RpIEmXmolyatwBxgM-H1TMA6ZcCk27TqDWVlDwon-A2zyAHBkECjKRI8JnQU1XwmRUjdbbJLAt1lo7drAWaSwvYoobA2Se8UHsgtQwNSGV4-R9M_Rw2TpsVVUjMvLOwyYrU5MIW9lS59nFRivm3mAMCuDCg8pAPsO8DnQDmiclIccSiQ6QbTziYnH2YjwjlXq08pxAxBYl5pODE6J8q6yYwAXSyO2TCnAY',
      tags: ['Wireframes', 'Prototyping', 'Figma', 'User Testing', 'Design Systems'],
    },
    {
      title: 'Digital Marketing',
      desc: 'Data-driven acquisition strategies, performance marketing, and conversion optimization to fuel sustainable growth.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA45OBCBm564L0zsvporIiYAgAScylxARv16qtNcm22GhBOftkmAtwWYsX5P86m0bZAUTtg6Kd-boo7WzCZZC-qKJS7aZ8Qdv-oPJ3J2s3WvSSpOCT6fBx4VJ5i1Op8Fdw2zv6wSIxsPmIOQTc68Ir-7JEauFx3_LqsqxDyHpwvWqhMPzzXrgrya7rBbZVxQZSppaWRU5MPudg_K8znZQvi7xpnHJWRcApzuY50FBUbUuvIRvAF_9TH3cAPzE_dhS9XcBHLNQNMmTD1ihM',
      tags: ['SEO', 'PPC', 'Analytics', 'Content', 'CRO'],
    },
    {
      title: 'Branding & Creative',
      desc: 'Strategic brand identity development, visual language systems, and compelling creative direction for digital touchpoints.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjCV_UEYyVTFVwCHY8JYU4LpK7pST95317pC-_w4i6VfwuCnqm4M1jswTRExhwCEzRqwgOpi4kJ7t_Ba4TNMjf1QGJYJlcHkxNX8XH_w58ujTZBkLv9HLggZbkc2_vcDTtdi9j7ukSD2ML4sOb196yPVWxcpiW0BGJADHoQHA6h3IINdnI2hSwcxKeEUvQ8i3Tw6OI0t7lgThfjYnexiva4MjXrBVSHuV3AWMO1dpvlMiEZmnWUxgH5r03PLWwGKzfSL1MukACklSMbtc',
      tags: ['Identity', 'Guidelines', 'Motion', '3D', 'Copywriting'],
    },
    {
      title: 'Custom Software',
      desc: 'Bespoke software architecture, legacy system modernization, and specialized technical solutions for unique business challenges.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTa4kdOzZBanGuZ4Ti97kSV8Q2BtcKzCoM52WCbq8bQeS35TYozSfo6U9v92Unfg49b_BUe452mS5EInFRjm14vWUn5FVBxruaOaSTobQYHmfsF_WoyRyLh-pJ8gP1O3p0Y6pw5_bOZnVr-FpFej294ezibNGhT5CNfHZHKPfdgGiNQvekY3b6kv0wcm2FL31tacb2uPE466wTaf58QRvIMXrAS34PO3eh-MhJ6UzdOQf4khelSSF7Wk11ATapRxSUwo5L_Osw4yPiaLI',
      tags: ['SaaS', 'APIs', 'Microservices', 'DevOps', 'Cloud'],
    },
  ];

  const workflowSteps = ['IDEA', 'STRATEGY', 'DESIGN', 'DEVELOPMENT', 'LAUNCH', 'GROWTH'];

  return (
    <section id="services" className="py-20 border-t border-transparent relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        {/* Header */}
        <header className="pb-16 border-b border-transparent relative">
          <div className="font-label-technical text-xs text-[#b85c24] mb-4 tracking-widest uppercase font-bold">
            02 / WHAT WE DO
          </div>
          <h2 className="font-headline-lg text-4xl sm:text-6xl text-[#1a1c1b] mb-6 max-w-3xl font-extrabold">
            One team. Multiple digital capabilities.
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-[#55433a] max-w-2xl font-normal leading-relaxed">
            From product design to development and digital growth, PilotNemo brings the essential capabilities together in one connected workflow.
          </p>
        </header>

        {/* Services Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel p-6 sm:p-8 flex flex-col justify-between h-full relative group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl min-h-[480px] rounded-xs"
            >
              <div className="mb-6 overflow-hidden bg-transparent flex items-center justify-center">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-44 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="mt-auto">
                <h3 className="font-headline-md text-2xl text-white mb-3 font-bold">
                  {s.title}
                </h3>
                <p className="font-body-md text-sm text-gray-300 mb-6 leading-relaxed font-normal">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t, i) => (
                    <span
                      key={i}
                      className="font-label-technical text-[10px] px-2.5 py-1 border border-white/15 text-gray-300 bg-white/5 rounded-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow Diagram */}
        <div className="py-12 border-t border-transparent relative">
          <div className="font-label-technical text-xs text-[#929292] mb-8 tracking-widest uppercase font-bold">
            WORKFLOW ARCHITECTURE
          </div>
          <div className="flex flex-col md:flex-row items-center overflow-x-auto pb-4 scrollbar-hide justify-start gap-4">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center shrink-0"
              >
                <span className="font-label-technical text-xs px-5 py-2.5 border border-transparent bg-white/80 font-bold text-[#1a1c1b] rounded-xs shadow-xs transition-colors hover:border-[#b85c24]">
                  {step}
                </span>
                {idx < workflowSteps.length - 1 && (
                  <span className="material-symbols-outlined text-[#b85c24] mx-3 text-lg">
                    arrow_right_alt
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
