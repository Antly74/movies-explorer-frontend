import { Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';
import './ProfileLink.css';

function ProfileLink({linkStyle, ...props}) {
  return (
    <Link to="/profile"
      className={ `profile-link profile-link_style_${linkStyle} link link_style_green` }
      {...props}>
      <p className="profile-link__text">Аккаунт</p>
      <ProfileButton />
    </Link>
  );
}

export default ProfileLink;
