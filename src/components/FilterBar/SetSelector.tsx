import { FC, useCallback } from "react";

import SetIcon from "components/common/SetIcon";
import { ALL_SETS, SET_LABELS } from "lib/constants";
import { MagicSet } from "lib/types";

import IconSelect from "./IconSelect";

interface Props {
  value: MagicSet;
  onChange: (selectedValue: MagicSet) => void;
}

const SetSelector: FC<Props> = ({ value, onChange }) => {
  const getIcon = useCallback(
    (set: MagicSet) => <SetIcon set={set} className="text-2xl" />,
    []
  );
  return (
    <IconSelect
      value={value}
      onChange={(selectedValue) => {
        if (selectedValue) {
          onChange(selectedValue);
        }
      }}
      options={ALL_SETS.slice(1)}
      getLabel={(set) => SET_LABELS[set]}
      getIcon={getIcon}
      instanceId="set-select"
      className="min-w-[230px] lg:min-w-[250px]"
    />
  );
};

export default SetSelector;
