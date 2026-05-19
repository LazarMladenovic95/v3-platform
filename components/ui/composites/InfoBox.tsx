// InfoBox composite that displays a header and a list of bullet points in a bordered card.
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

type InfoBoxProps = {
  header: string;
  points: string[];
};

export function InfoBox({ header, points }: InfoBoxProps) {
  return (
    <div className="flex flex-col gap-3 rounded-[8px] border border-border bg-surface p-4">
      <Heading as="h3" variant="heading-3">
        {header}
      </Heading>
      <ul className="flex flex-col gap-2">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-foreground-body" aria-hidden />
            <Text as="span" variant="body-regular">
              {point}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
}
