import { Link } from 'react-router-dom';
import './MenuLink.css';

function MenuLink({text, linkStyle, highlighted, activated, ...props}) {

  return (
    <Link
      className={ `menu-link menu-link_style_${linkStyle}` +
        ` ${highlighted ? 'menu-link_highlighted' : ''}` +
        ` ${activated ? `menu-link_style_${linkStyle}_activated` : 'link link_style_green'}`
      }
      {...props}
    >
      {text}
    </Link>
  );
}

export default MenuLink;
