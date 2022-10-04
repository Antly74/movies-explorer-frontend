import { Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';
import './ProfileLink.css';

function ProfileLink({linkStyle, ...props}) {
  return (
    <Link
      className={ `profile-link profile-link_style_${linkStyle} link link_style_green` }
      {...props}>
      <span className="profile-link__text">Аккаунт</span>
      <ProfileButton />
    </Link>
  );
}

export default ProfileLink;
