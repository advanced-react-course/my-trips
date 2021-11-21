import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import * as S from './styles';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

export default function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <>
      <S.Container>
        <LinkWrapper href="/">
          <CloseOutline size={32}></CloseOutline>
        </LinkWrapper>

        <S.Heading>{heading}</S.Heading>

        <S.Body>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </S.Body>
      </S.Container>
    </>
  );
}
