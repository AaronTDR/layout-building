/* discount */
import discountLarge from "../../../../assets/carousel/discount-big.webp";
import discountMedium from "../../../../assets/carousel/discount-medium.webp";
import discountSmall from "../../../../assets/carousel/discount-small.webp";
/* laptops */
import laptopLarge from "../../../../assets/carousel/laptops-big.webp";
import laptopMedium from "../../../../assets/carousel/laptops-medium.webp";
import laptopSmall from "../../../../assets/carousel/laptops-small.webp";
/* shoes */
import shoesLarge from "../../../../assets/carousel/shoes-big.webp";
import shoesMedium from "../../../../assets/carousel/shoes-medium.webp";
import shoesSmall from "../../../../assets/carousel/shoes-small.webp";
/* pets */
import petsLarge from "../../../../assets/carousel/pets-big.webp";
import petsMedium from "../../../../assets/carousel/pets-medium.webp";
import petsSmall from "../../../../assets/carousel/pets-small.webp";
/* gym */
import gymLarge from "../../../../assets/carousel/gym-big.webp";
import gymMedium from "../../../../assets/carousel/gym-medium.webp";
import gymSmall from "../../../../assets/carousel/gym-small.webp";
/* furniture */
import furnitureLarge from "../../../../assets/carousel/furniture-big.webp";
import furnitureMedium from "../../../../assets/carousel/furniture-medium.webp";
import furnitureSmall from "../../../../assets/carousel/furniture-small.webp";
/* toys */
import toysLarge from "../../../../assets/carousel/toys-big.webp";
import toysMedium from "../../../../assets/carousel/toys-medium.webp";
import toysSmall from "../../../../assets/carousel/toys-small.webp";

export const getCarouselImages = () => {
  const images = [
    {
      large: discountLarge,
      medium: discountMedium,
      small: discountSmall,
      path: "#",
    },
    {
      large: laptopLarge,
      medium: laptopMedium,
      small: laptopSmall,
      path: "#",
    },
    {
      large: shoesLarge,
      medium: shoesMedium,
      small: shoesSmall,
      path: "#",
    },
    {
      large: petsLarge,
      medium: petsMedium,
      small: petsSmall,
      path: "#",
    },
    {
      large: gymLarge,
      medium: gymMedium,
      small: gymSmall,
      path: "#",
    },
    {
      large: furnitureLarge,
      medium: furnitureMedium,
      small: furnitureSmall,
      path: "#",
    },
    {
      large: toysLarge,
      medium: toysMedium,
      small: toysSmall,
      path: "#",
    },
  ];

  return images;
};
