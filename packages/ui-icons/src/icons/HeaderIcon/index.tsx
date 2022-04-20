import * as S from './styles';

export interface HeaderProps {
  label: string;
}

export const HeaderIcon = (props: HeaderProps) => {
  return (
    <div>
      {props.label}
      <S.Wrapper>IconB</S.Wrapper>
    </div>
  );
};

// export default HeaderIcon;
