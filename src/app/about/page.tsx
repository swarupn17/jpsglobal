import PageFrame from "@/components/PageFrame";

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="about-page-hero">
        <div className="about-page-hero-copy">
          <span>ABOUT JPS</span>
          <h1>Built in India. Looking outward.</h1>
          <p>JPS Global Trade connects product opportunities, business knowledge and global markets from Nanded, Maharashtra.</p>
        </div>
        <img src="/raw/WhatsApp%20Image%202026-10-13%20at%203.08.32%20PM%20(1).jpeg" alt="Turmeric sourced by JPS Global Trade" />
      </section>

      <section className="jps-page-section product-copy about-copy">
        <div className="jps-page-heading"><span>OUR STORY</span><h2>A practical view of global trade.</h2></div>
        <div>
          <p>Established in 2024, JPS Global Trade is a registered merchant export company based in Nanded, India. We are registered under MSME and the Maharashtra Chamber of Commerce.</p>
          <p>We work across domestic trade and import-export operations, connecting Indian products and businesses with international opportunities through a collaborative, relationship-led approach.</p>
        </div>
      </section>
    </PageFrame>
  );
}
