import { useContext, useState } from 'react';
import { AddPlayerForm } from '../../components/AddPlayerForm';
import { CampInfo } from '../../components/CampInfo';
import { UserMenu } from '../../components/UserMenu';
import { PlayersList } from '../../components/PlayersList';
import { useProtectedRoutes } from '../../hooks/useProtectedRoutes';
import { UserContext } from '../../contexts/UserContext';
import { InfoUserModal } from '../../components/Modals/ModalInfoUser';
import { ModalEdit } from '../../components/Modals/ModalEditUser';
import { NewCampModal } from '../../components/Modals/ModalNewCamp';

interface iPlayerList {
  player: string;
  playerImg?: string;
}

export const AddPlayers = () => {
  const [playersList, setPlayersList] = useState<iPlayerList[]>([]);

  const { isLogged } = useContext(UserContext);
  useProtectedRoutes(isLogged, true);

  return (
    <>
      <div className="bg-gray-300 h-screen">
        <div className="bg-dashboard bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
        <section className="py-10 tablet:py-20 bg-gray-300">
          <UserMenu />
          <div className="mx-4 tablet:mr-8 tablet:ml-44">
            <CampInfo
              name="Nome do Torneio"
              status={true}
              date="--/--/--"
              number_of_players="16"
            />

            <div className="flex gap-12 tablet:gap-24 laptop:flex-row flex-col w-full tablet:w-[80%] mt-12">
              <AddPlayerForm
                playersList={playersList}
                setPlayersList={setPlayersList}
              />
              <PlayersList playersList={playersList} />
            </div>
          </div>
        </section>
      </div>
      <InfoUserModal />
      <ModalEdit />
      <NewCampModal />
    </>
  );
};
