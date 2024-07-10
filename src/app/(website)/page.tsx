import { GoogleSheetsServices } from "@/services/Products.services";
import AppComponent from "./page.client";
import { ProductsType } from "@/types/Products.type";
import { SlidersType } from "@/types/Sliders.types";
import { AboutMeType } from "@/types/AboutMe.type";

const AppContainer = async () => {
  const googleSheetsServices = new GoogleSheetsServices();
  const getProducts =
    (await googleSheetsServices.GetProducts()) as ProductsType[];
  const getSilders = (await googleSheetsServices.GetSliders()) as SlidersType[];
  const getAboutMe = (await googleSheetsServices.GetAboutMe()) as AboutMeType[];

  if (getProducts && getSilders && getAboutMe)
    return (
      <AppComponent
        products={getProducts}
        sliders={getSilders}
        aboutMe={getAboutMe}
      />
    );

  return;
};

export default AppContainer;
