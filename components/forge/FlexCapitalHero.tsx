type FlexCapitalHeroProps = {
  onPrimary?: () => void;
  onSecondary?: () => void;
};

export function FlexCapitalHero({ onPrimary, onSecondary }: FlexCapitalHeroProps) {
  return (
    <section className="flex-capital-hero">
      <span>Forge Capital Desk</span>
      <h1>Business owners need breathing room.</h1>
      <p>
        Forge Capital Desk helps contractors, service businesses, auto shops,
        transport companies, creatives, and local operators discover modern
        business finance tools through our Flex referral channel.
      </p>
      <div>
        <button type="button" onClick={onPrimary}>Check Flex Options</button>
        <button type="button" onClick={onSecondary}>Talk to Forge Capital Desk</button>
      </div>
    </section>
  );
}
