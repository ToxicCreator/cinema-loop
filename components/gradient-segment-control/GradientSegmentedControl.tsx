import { SegmentedControl } from '@mantine/core';
import classes from './GradientSegmentedControl.module.css';


export function GradientSegmentedControl(props: {
  data: string[], 
  value: string,
  onChange: (newValue: string) => void
}) {
  const {data, value, onChange} = props;
  return (
    <SegmentedControl
      radius="xl"
      size="sm"
      data={data}
      value={value}
      onChange={onChange}
      classNames={classes}
    />
  );
}
