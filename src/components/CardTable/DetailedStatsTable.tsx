import Tippy from "@tippyjs/react";
import React, { FC } from "react";

import { Card, Deck } from "lib/types";
import { formatPercentage, formatPercentageDifference } from "lib/util";

const StatsRow: FC<{
  label: string;
  tooltipText: string;
  className?: string;
}> = ({ label, tooltipText, className, children }) => (
  <tr className={className}>
    <td className="py-2 pr-12 pl-4">
      <Tippy
        content={<div className="p-2 max-w-sm">{tooltipText}</div>}
        placement="bottom-start"
      >
        <span className="cursor-pointer">{label}</span>
      </Tippy>
    </td>
    <td className="pr-4 font-mono text-sm text-right">{children}</td>
  </tr>
);

interface Props {
  card: Card;
}

const DetailedStatsTable: FC<Props> = ({ card }) => (
  <table className="w-full border border-neutral-200 dark:border-black">
    <tbody>
      <StatsRow
        label="Average last seen at"
        tooltipText="The average pick number where this card was last seen in packs"
      >
        {card.overallStats.lastSeenAt.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </StatsRow>
      <StatsRow
        label="Average taken at"
        tooltipText="The average pick number at which this card was taken by 17Lands drafters"
      >
        {card.overallStats.takenAt.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </StatsRow>
      <StatsRow
        label="Number of games played"
        tooltipText="The number of games played with this card in the maindeck"
        className="border-t border-neutral-200 dark:border-black"
      >
        {card.stats[Deck.ALL]!.gameCount.toLocaleString()}
      </StatsRow>
      <StatsRow
        label="Number of games in hand"
        tooltipText="The number of times this card was drawn, either in the opening hand or later"
      >
        {card.overallStats.drawnCount.toLocaleString()}
      </StatsRow>
      <StatsRow
        label="Games played win rate"
        tooltipText="The win rate of decks with this card in the maindeck"
        className="border-t border-neutral-200 dark:border-black"
      >
        {formatPercentage(card.overallStats.playedWinrate)}
      </StatsRow>
      <StatsRow
        label="Opening hand win rate"
        tooltipText="The win rate of games where this card was in the opening hand"
      >
        {formatPercentage(card.overallStats.openingHandWinrate)}
      </StatsRow>
      <StatsRow
        label="Games drawn win rate"
        tooltipText="The win rate of games where this card was drawn, not counting cards from the opening hand"
      >
        {formatPercentage(card.overallStats.drawnWinrate)}
      </StatsRow>
      <StatsRow
        label="Games in hand win rate"
        tooltipText="The win rate of games where this card was drawn, either in the opening hand or later"
      >
        {formatPercentage(card.stats[Deck.ALL]!.winrate)}
      </StatsRow>
      <StatsRow
        label="Games not drawn win rate"
        tooltipText="The win rate of games where this card was in the maindeck, but was never drawn"
      >
        {formatPercentage(card.overallStats.notDrawnWinrate)}
      </StatsRow>
      <StatsRow
        label="Improvement when drawn"
        tooltipText="The difference between Games in hand win rate and Games not drawn win rate"
      >
        {formatPercentageDifference(
          card.stats[Deck.ALL]!.winrate - card.overallStats.notDrawnWinrate
        )}
      </StatsRow>
    </tbody>
  </table>
);

export default DetailedStatsTable;
