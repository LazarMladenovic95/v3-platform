// InfoBox composite that displays a header and a list of bullet points in a bordered card.

type InfoBoxProps = {
  header: string;
  points: string[];
};

export function InfoBox({ header, points }: InfoBoxProps) {
  return (
    <div className="border border-grey-100 rounded-[8px] p-4 flex flex-col gap-3">
      <h3 className="text-heading-3 text-grey-700">{header}</h3>
      <ul className="flex flex-col gap-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-grey-700 shrink-0" />
            <span className="text-body text-grey-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
