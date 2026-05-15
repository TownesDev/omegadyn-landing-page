import svgPaths from "../imports/Html→Body/svg-nft2pub58f";
import imgMainLogo from "../imports/image.png";
import imgOmegadynPressLogo from "../imports/omegadyn_press_logo.png";
import imgHeroSection from "../imports/Html→Body/942a1b00c7fd5e2a2b9c87388d8002908e25ca63.png";
import imgDigitalFrontiers from "../imports/Html→Body/1d2dae63f1dc7c5af073930bb282b72d333382ed.png";

export default function App() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full">
      {/* Header */}
      <header className="fixed backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start left-0 pb-px top-0 w-full z-50 border-b border-[#e2e8f0]">
        <div className="h-[80px] max-w-[1280px] mx-auto relative w-full">
          <div className="flex items-center size-full px-[24px] justify-between">
            <div className="flex gap-[12px] items-center">
              <div className="h-[16px] w-[22px]">
                <svg className="block size-full" fill="none" viewBox="0 0 22 16">
                  <path d={svgPaths.p378800} fill="#0F172A" />
                </svg>
              </div>
              <div className="font-['Liberation_Serif:Regular',sans-serif] text-[24px] tracking-[-1.2px] text-[#0f172a]">
                Omegadyn LLC
              </div>
            </div>
            <button className="px-[16px] py-[8px] rounded-[2px]">
              <div className="font-['Liberation_Serif:Italic',sans-serif] text-[18px] text-[#0f172a]">
                Contact
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="min-h-screen relative w-full">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-1/2 -translate-x-1/2 min-w-full object-cover" src={imgHeroSection} />
          </div>
          <div className="absolute bg-[rgba(10,15,26,0.95)] inset-0" />

          <div className="relative flex flex-col items-center justify-center min-h-screen px-[24px] py-[120px]">
            <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] rounded-[8px] p-[16px] mb-[32px]">
              <div className="size-[128px] overflow-hidden flex items-center justify-center">
                <img alt="Omegadyn LLC" className="size-full object-contain" src={imgMainLogo} />
              </div>
            </div>

            <h1 className="font-['Newsreader:Regular',sans-serif] text-[48px] leading-[56px] text-white text-center mb-[16px]">
              Omegadyn LLC
            </h1>

            <p className="font-['Newsreader:Italic',sans-serif] italic text-[16px] leading-[24px] text-[#cbd5e1] text-center mb-[48px]">
              Excellence in Enterprise & Literature
            </p>

            <div className="flex flex-col gap-[24px] items-center max-w-[448px] w-full">
              <button className="bg-[#cba72f] w-full py-[16px] px-[65px]">
                <span className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#191c1e] tracking-[1.6px]">
                  EXPLORE PUBLICATIONS
                </span>
              </button>
              <button className="w-full py-[17px] px-[120px] border border-white">
                <span className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-white tracking-[1.6px]">
                  OUR VISION
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-white py-[120px] px-[24px]">
          <div className="max-w-[896px] mx-auto flex flex-col gap-[32px] items-center">
            <h2 className="font-['Newsreader:Regular',sans-serif] text-[16px] leading-[24px] text-black text-center">
              Our Vision
            </h2>
            <div className="bg-[#cba72f] h-[4px] w-[96px]" />
            <div className="text-center py-[16px]">
              <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[26px] text-[#45464d]">
                At Omegadyn LLC, we believe that the gap<br />
                between corporate strategy and profound<br />
                storytelling is where true innovation resides.<br />
                Our mission is to bridge the analytical<br />
                precision of executive leadership with the<br />
                timeless resonance of literary craft.
              </p>
            </div>
            <blockquote className="max-w-[672px] w-full border-l-4 border-[#cba72f] pl-[36px] py-[16px]">
              <p className="font-['Newsreader:Italic',sans-serif] italic text-[16px] leading-[24px] text-[#131b2e]">
                "Strategy gives us the path, but stories give us<br />
                the soul. We publish the works that define both."
              </p>
            </blockquote>
          </div>
        </section>

        {/* Omegadyn Press Section */}
        <section className="bg-[#f2f4f6] py-[120px] px-[24px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-[64px]">
              {/* Section Header */}
              <div className="flex flex-col items-end justify-between w-full">
                <div className="flex flex-col gap-[24px]">
                  <div className="size-[64px] overflow-hidden flex items-center justify-center">
                    <img alt="Omegadyn Press" className="size-full object-contain" src={imgOmegadynPressLogo} />
                  </div>
                  <h2 className="font-['Newsreader:Regular',sans-serif] text-[16px] leading-[24px] text-black">
                    Featured Publications
                  </h2>
                </div>
                <div className="max-w-[448px] mt-[24px]">
                  <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#45464d]">
                    Curated works exploring the intersection of<br />
                    modern philosophy, digital evolution, and the<br />
                    human condition.
                  </p>
                </div>
              </div>

              {/* Book Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                {/* Book Card 1 */}
                <div className="bg-white border border-[#e2e8f0] overflow-hidden">
                  <div className="h-[453px] overflow-hidden">
                    <img alt="The Omega Mindset" className="h-full w-full object-cover" src={imgHeroSection} />
                  </div>
                  <div className="p-[32px] flex flex-col justify-between min-h-[282px]">
                    <div className="mb-[24px]">
                      <h3 className="font-['Newsreader:Regular',sans-serif] text-[16px] leading-[24px] text-black mb-[16px]">
                        The Omega Mindset
                      </h3>
                      <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#45464d]">
                        A transformative exploration into<br />
                        executive psychology and the pursuit<br />
                        of operational excellence in the<br />
                        modern age.
                      </p>
                    </div>
                    <button className="bg-[#131b2e] w-full py-[16px] flex items-center justify-center gap-[8px]">
                      <span className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-white tracking-[1.6px]">
                        BUY ON AMAZON
                      </span>
                      <div className="size-[10.5px]">
                        <svg className="size-full" fill="none" viewBox="0 0 10.5 10.5">
                          <path d={svgPaths.p32ab500} fill="white" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Book Card 2 */}
                <div className="bg-white border border-[#e2e8f0] overflow-hidden">
                  <div className="h-[453px] overflow-hidden">
                    <img alt="Digital Frontiers" className="h-full w-full object-cover" src={imgDigitalFrontiers} />
                  </div>
                  <div className="p-[32px] flex flex-col justify-between min-h-[282px]">
                    <div className="mb-[24px]">
                      <h3 className="font-['Newsreader:Regular',sans-serif] text-[16px] leading-[24px] text-black mb-[16px]">
                        Digital Frontiers
                      </h3>
                      <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#45464d]">
                        Navigating the complexities of the<br />
                        digital revolution and its impact on<br />
                        the future of literary expression.
                      </p>
                    </div>
                    <button className="bg-[#131b2e] w-full py-[16px] flex items-center justify-center gap-[8px]">
                      <span className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-white tracking-[1.6px]">
                        BUY ON AMAZON
                      </span>
                      <div className="size-[10.5px]">
                        <svg className="size-full" fill="none" viewBox="0 0 10.5 10.5">
                          <path d={svgPaths.p32ab500} fill="white" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-[120px] px-[24px] border-t border-[#f1f5f9]">
          <div className="max-w-[672px] mx-auto">
            <div className="flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[16px] items-center">
                <h2 className="font-['Newsreader:Regular',sans-serif] text-[16px] leading-[24px] text-black text-center">
                  Connect With Us
                </h2>
                <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#45464d] text-center">
                  Inquiries regarding corporate strategy or<br />
                  literary submissions.
                </p>
              </div>

              {/* Contact Form */}
              <form className="flex flex-col gap-[32px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                  <div className="flex flex-col gap-[4px] border-b border-[#cbd5e1] pb-[9px] pt-[8px]">
                    <label className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#64748b]">
                      NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="font-['Manrope:Regular',sans-serif] text-[16px] text-[#cbd5e1] bg-transparent outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] border-b border-[#cbd5e1] pb-[9px] pt-[8px]">
                    <label className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#64748b]">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="font-['Manrope:Regular',sans-serif] text-[16px] text-[#cbd5e1] bg-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[4px] border-b border-[#cbd5e1] pb-[9px] pt-[8px]">
                  <label className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#64748b]">
                    MESSAGE
                  </label>
                  <textarea
                    placeholder="How can we assist you?"
                    rows={3}
                    className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#cbd5e1] bg-transparent outline-none resize-none"
                  />
                </div>

                <button type="submit" className="bg-black w-full py-[20px]">
                  <span className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-white tracking-[3.2px]">
                    SEND INQUIRY
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f8fafc] border-t border-[#e2e8f0] w-full">
        <div className="max-w-[1280px] mx-auto px-[24px] py-[48px]">
          <div className="flex flex-col items-center gap-[48px]">
            <div className="flex flex-col gap-[8px] items-center">
              <div className="font-['Liberation_Serif:Regular',sans-serif] text-[20px] leading-[28px] text-[#0f172a]">
                Omegadyn LLC
              </div>
              <div className="font-['Liberation_Serif:Italic',sans-serif] text-[14px] leading-[20px] text-[#475569]">
                Omegadyn.net
              </div>
              <div className="font-['Nimbus_Sans:Regular',sans-serif] text-[12px] leading-[16px] tracking-[1.2px] text-[#64748b] uppercase">
                © 2024 OMEGADYN LLC. ALL RIGHTS RESERVED.
              </div>
            </div>

            <div className="flex flex-wrap gap-[24px] justify-center text-center">
              <a href="#" className="font-['Nimbus_Sans:Regular',sans-serif] text-[12px] leading-[16px] tracking-[1.2px] text-[#64748b] uppercase opacity-80 hover:opacity-100">
                PRIVACY POLICY
              </a>
              <a href="#" className="font-['Nimbus_Sans:Regular',sans-serif] text-[12px] leading-[16px] tracking-[1.2px] text-[#64748b] uppercase opacity-80 hover:opacity-100">
                TERMS OF SERVICE
              </a>
              <a href="#" className="font-['Nimbus_Sans:Regular',sans-serif] text-[12px] leading-[16px] tracking-[1.2px] text-[#64748b] uppercase opacity-80 hover:opacity-100">
                PRESS KIT
              </a>
              <a href="#" className="font-['Nimbus_Sans:Regular',sans-serif] text-[12px] leading-[16px] tracking-[1.2px] text-[#64748b] uppercase opacity-80 hover:opacity-100">
                INVESTOR RELATIONS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
