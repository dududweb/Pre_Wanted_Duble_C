import React from 'react';
import styles from './styles.module.scss';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

interface PageHeaderProps {
  title?: string;
  isClickedMenu?: boolean;
  openMenu?: () => void;
}

function PageHeader({ title, isClickedMenu, openMenu }: PageHeaderProps) {
  const router = useRouter();
  const url = router.asPath;

  const handleBackButton = () => {
    if (isClickedMenu) {
      console.log('슬라이드닫기', isClickedMenu);
    } else {
      Router.back();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <div className={styles.leftBox}>
          {url === '/' ? (
            <button
              data-cy-menu
              className={isClickedMenu ? styles.backButton : styles.menuButton}
            >
              <img
                src={`/images/icon/${isClickedMenu ? 'Back.png' : 'menu.png'}`}
                alt="메뉴버튼"
                onClick={openMenu}
              />
            </button>
          ) : (
            <button className={styles.backButton} onClick={handleBackButton}>
              {url !== '/contacts' && (
                <img src="/images/icon/Back.png" alt="뒤로가기 버튼" />
              )}
            </button>
          )}
        </div>
        <h2 className={styles.title}>{title ? title : '니콘내콘'}</h2>
        <div className={styles.rightBox}>
          <button data-cy-contacts className={styles.rightButton}>
            <Link href="/">
              <a>
                {url === '/contacts' && (
                  <img src="/images/icon/close.png" alt="close" />
                )}
              </a>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
