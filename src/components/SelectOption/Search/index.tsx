import { Input } from './styles';

export default function SelectOption({ ...props }) {
  return (
    <Input {...props}>
      <option value='day'>Daily</option>
      <option value='week'>Weekly</option>
    </Input>
  );
}
