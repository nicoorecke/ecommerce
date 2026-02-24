export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2024 Stock Fiber - Todos los derechos reservados
        </p>
        <div className="footer-powered">
          <span>Powered by</span>
          <img 
            src="/Abarcat.svg" 
            alt="Abarcat" 
            className="footer-logo"
          />
        </div>
      </div>
    </footer>
  )
}