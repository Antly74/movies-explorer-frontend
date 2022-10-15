import './MenuButton.css';

function MenuButton({onClick}) {
  return (
    <div
      className="menu-button link link_style_green"
      onClick={onClick}
    />
  );
}

export default MenuButton;
