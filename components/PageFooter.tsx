interface Props {
  lastUpdatedAtTicks: number;
}

const PageFooter = ({ lastUpdatedAtTicks }: Props) => (
  <div className="mt-32 border-t-[1px] border-zinc-400 pt-1">
    Designed by{" "}
    <a href="https://github.com/BodyCopy" target="_blank" rel="noreferrer">
      BodyCopy
    </a>{" "}
    and developed by{" "}
    <a href="https://github.com/youssefm" target="_blank" rel="noreferrer">
      youssefm
    </a>{" "}
    using{" "}
    <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
      Next.js
    </a>
    <br />
    Made possible thanks to{" "}
    <a href="https://www.17lands.com" target="_blank" rel="noreferrer">
      17Lands
    </a>
    ,{" "}
    <a href="https://scryfall.com" target="_blank" rel="noreferrer">
      Scryfall
    </a>
    ,{" "}
    <a
      href="https://www.flaticon.com/authors/freepik"
      target="_blank"
      rel="noreferrer"
    >
      Freepik
    </a>
    ,{" "}
    <a href="https://keyrune.andrewgioia.com" target="_blank" rel="noreferrer">
      Keyrune
    </a>
    , and{" "}
    <a href="https://mana.andrewgioia.com" target="_blank" rel="noreferrer">
      Mana
    </a>
    <br />
    <em>Last updated at: {new Date(lastUpdatedAtTicks).toLocaleString()}</em>
  </div>
);

export default PageFooter;
