import './styles/global.scss';
import { ButtonIcon } from '@thiago_brolly/icons';
import { Separator } from '@thiago_brolly/components';

export function App() {
  return (
    <div>
      <h1>Hello Paylivre</h1>
      {/* <Button /> */}
      <Separator marginBottom="50px" />
      <ButtonIcon />
    </div>
  );
}
