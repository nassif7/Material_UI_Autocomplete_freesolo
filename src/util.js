import { createFilterOptions } from "@material-ui/lab/Autocomplete";
const filter = createFilterOptions();

export const filterOptions = (options, params) => {
  const filtered = filter(options, params);
  if (
    params.inputValue !== "" &&
    filtered.every(
      (o) => o.title.toLowerCase() !== params.inputValue.toLowerCase()
    )
  ) {
    filtered.push({
      inputValue: params.inputValue,
      title: `Add "${params.inputValue}"`
    });
  }

  return filtered;
};

export const getOnChangeValue = (values, newValues) => {
  let difference = (values.length > newValues.length ? values : newValues).find(
    (value) =>
      !(values.length > newValues.length
        ? newValues.map((i) => i.title)
        : values.map((i) => i.title)
      ).includes(value.title)
  );

  return difference;
};
