import { FC, useCallback } from "react";

import MagicSet from "lib/MagicSet";

import IconSelect from "./IconSelect";

interface Props {
  value: MagicSet;
  onChange: (selectedValue: MagicSet) => void;
}

const SetSelector: FC<Props> = ({ value, onChange }) => {
  const getIcon = useCallback(
    (set: MagicSet) => <set.Icon className="text-2xl" />,
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
      options={MagicSet.ALL}
      getLabel={(set) => set.label}
      getIcon={getIcon}
      blurInputOnSelect
      instanceId="set-select"
      className="min-w-[230px] lg:min-w-[250px]"
    />
  );
};

export default SetSelector;
