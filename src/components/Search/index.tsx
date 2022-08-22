import { Input } from './styles';

export default function Search({ ...props }) {
  return <Input placeholder='Search for a movie' {...props} />;
}
