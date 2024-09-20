import { Container, Stack } from 'react-bootstrap';
import Article from '../components/Article';

const articles = {
  '2024-01-01': {
  title: 'Article 1',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at elit vitae arcu vestibulum iaculis. Donec nec nunc id purus cursus vestibulum. Aliquam erat volutpat. Aenean nec odio id augue posuere suscipit. Integer euismod, ligula nec vehicula semper, nunc risus tincidunt turpis, at aliquet metus nunc nec libero. Donec nec nunc id purus cursus vestibulum. Aliquam erat volutpat. Aenean nec odio id augue posuere suscipit. Integer euismod, ligula nec vehicula semper, nunc risus tincidunt turpis, at aliquet metus nunc nec libero.'
  }, '2024-01-02': {
    title: 'Article 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at elit vitae arcu vestibulum iaculis. Donec nec nunc id purus cursus vestibulum. Aliquam erat volutpat. Aenean nec odio id augue posuere suscipit. Integer euismod, ligula nec vehicula semper, nunc risus tincidunt turpis, at aliquet metus nunc nec libero. Donec nec nunc id purus cursus vestibulum. Aliquam erat volutpat. Aenean nec odio id augue posuere suscipit. Integer euismod, ligula nec vehicula semper, nunc risus tincidunt turpis, at aliquet metus nunc nec libero.'
  }, '2024-01-03': {
    title: 'Article 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at elit vitae arcu vestibulum iaculis. Donec nec nunc id purus cursus vestibulum. Aliquam erat volutpat. Aenean nec odio id augue posuere suscipit. Integer euismod, ligula nec vehicula semper, nunc risus tincidunt turpis, at aliquet metus nunc nec libero. Donec nec nunc id purus cursus vestibulum. Aliquam erat volutpat. Aenean nec odio id augue posuere suscipit. Integer euismod, ligula nec vehicula semper, nunc risus tincidunt turpis, at aliquet metus nunc nec libero.'
  }
};

export default function News() {
  return (
    <Container fluid>
      <Stack direction='vertical' gap={3} className='p-5'>
        {Object.entries(articles).map(([date, article]) => (
          <Article key={date} date={date} title={article.title} content={article.content} />
        ))}
      </Stack>
    </Container>
  );
}
