import { Logo } from '../Logo';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useMedia } from '../../hooks/useMedia';
import { useLocation } from 'react-router-dom';
import { MobileMenu } from '../MobileMenu';
import { FiLogIn } from 'react-icons/fi';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { ButtonDefault } from '../Button';
import 'animate.css';

interface IHeader {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const Header = ({ onOpenRegister, onOpenLogin }: IHeader) => {
  const mobile = useMedia('(max-width:40rem)');
  const { pathname } = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogin = () => {
    onOpenLogin();
    setMobileMenu(false);
  };

  const handleRegister = () => {
    onOpenRegister();
    setMobileMenu(false);
  };

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className="bg-gray-300 border-b-[3px] border-green-100 border-opacity-50 relative">
      <div className="max-w-7xl m-auto px-4 py-5 flex items-center justify-between box-border">
        <div className="flex items-center gap-3 z-50">
          <Logo />
          <h1 className="tablet:text-3xl font-winner text-white text-2xl">
            ezBracket
          </h1>
        </div>

        {mobile ? (
          <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        ) : (
          <ButtonGroup gap="10">
            <Button
              fontSize="l"
              fontWeight="medium"
              textColor="white"
              variant="link"
              onClick={handleLogin}
            >
              Entrar
            </Button>
            <ButtonDefault onClick={handleRegister} text="Cadastrar" />
          </ButtonGroup>
        )}

        {mobileMenu && mobile ? (
          <div className="absolute top-[94px] left-0 flex flex-col bg-gray-300 w-full h-screen px-8 z-10 animate__animated animate__fadeInDownBig animate__fast">
            <button
              onClick={handleLogin}
              className="text-white text-xl py-6 flex items-center justify-between border-b-2 border-green-100 border-opacity-50"
            >
              Entrar
              <FiLogIn className="w-8 h-8 text-green-100" />
            </button>
            <button
              onClick={handleRegister}
              className="text-white text-xl py-6 flex items-center justify-between border-b-2 border-green-100 border-opacity-50"
            >
              Cadastrar
              <HiOutlinePencilAlt className="w-8 h-8 text-green-100" />
            </button>
          </div>
        ) : (
          <div className="absolute top-[94px] left-0 flex flex-col bg-gray-300 w-full h-screen px-8 animate__animated animate__fadeOutUpBig animate__fast"></div>
        )}
      </div>
    </header>
  );
};
