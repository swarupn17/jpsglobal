import PageFrame from "@/components/PageFrame";

const certificationMarks = [
  { src: "/images/company/certificate-msme.png", alt: "MSME mark" },
  { src: "/images/company/certificate-gst.png", alt: "GST mark" },
  { src: "/images/company/certificate-apeda.jpg", alt: "APEDA mark" },
  { src: "/images/company/certificate-dgft.jpg", alt: "Directorate General of Foreign Trade mark" },
];

export default function CertificationsPage() {
  return <PageFrame>
    <section className="certificate-showcase" aria-label="Certifications">
      <h1>Certifications</h1>
      <div className="certificate-logo-grid">
        {certificationMarks.map((mark) => (
          <div className="certificate-logo-card" key={mark.src}>
            <img src={mark.src} alt={mark.alt} />
          </div>
        ))}
      </div>
    </section>
  </PageFrame>;
}
