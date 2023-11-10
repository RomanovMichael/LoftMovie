import { useState } from "react";
import { createPortal } from "react-dom";
import { FavouritesModal } from "../components/FavouritesModal";

export function useFavouritesModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);

  return {
    showModal,
    Modal: () =>
      isModalOpen
        ? createPortal(
            <FavouritesModal close={() => setIsModalOpen(false)} />,
            document.getElementById("overlay")
          )
        : null
  };
}
