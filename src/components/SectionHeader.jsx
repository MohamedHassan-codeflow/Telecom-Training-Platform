function SectionHeader({ kicker, title, description, centered = false }) {
  // Reusable heading block keeps spacing and typography consistent across all sections.
  return (
    <div className={`section-header ${centered ? 'section-header--center' : ''}`}>
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionHeader;
