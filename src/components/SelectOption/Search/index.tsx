import { Input } from './styles';

export default function SelectOption({ ...props }) {
  return (
    <Input {...props}>
      <option value='week'>Weekly</option>
      <option value='day'>Daily</option>
    </Input>
  );
}
