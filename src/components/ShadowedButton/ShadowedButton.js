import './ShadowedButton.css';

function ShadowedButton({children}) {
  return (
    <div className="shadowed-button">
      {children}
    </div>
  )
}

export default ShadowedButton;
