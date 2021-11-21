import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import * as S from './styles';

export default function AboutTemplate() {
  return (
    <>
      <S.Container>
        <LinkWrapper href="/">
          <CloseOutline size={32}></CloseOutline>
        </LinkWrapper>

        <S.Heading>My Trips</S.Heading>

        <S.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          nesciunt ullam odio tempora maiores mollitia sed perferendis facere
          repellat vel, quia repudiandae aspernatur, temporibus voluptatibus
          itaque magnam nemo dicta saepe!
        </S.Body>
      </S.Container>
    </>
  );
}
