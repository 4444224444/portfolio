import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <main className="home">
      {/* 메뉴 버튼 */}
      <button
        className={`menu-btn ${open ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="메뉴 열기"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 오른쪽 슬라이드 메뉴 */}
      <nav className={`menu ${open ? 'open' : ''}`}>
        <ul>
          <li><Link to="/about" onClick={closeMenu}>about</Link></li>
          <li><Link to="/work" onClick={closeMenu}>work</Link></li>
          <li><Link to="/project" onClick={closeMenu}>project</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>contact</Link></li>
        </ul>
      </nav>

      {/* 어두운 오버레이 */}
      {open && <div className="overlay" onClick={closeMenu}></div>}

      {/* 좌측 하단 타이틀 */}
      <div className="home__bottomLeft">
        <h1 className="home__title">portfolio</h1>
      </div>
    </main>
  );
}


