import { FC } from 'react';
import './styles.css';

interface TagProps {
  text: string;
}

const CategoryColorMap: Record<string, string> = {
  Technology: 'black',
  Shopping: 'green',
  Entertainment: 'blue',
  Automotive: 'red'
};

const Tag: FC<TagProps> = ({ text }) => {
  const color = CategoryColorMap[text] || 'black';
  return <div className={`tag ${color}`}>{text}</div>;
};

export default Tag;
