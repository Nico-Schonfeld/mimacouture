import { GoogleSheetsServices } from "@/services/Products.services";
import AppComponent from "./page.client";
import { ProductsType } from "@/types/Products.type";

const AppContainer = async () => {
  const googleSheetsServices = new GoogleSheetsServices();
  const getProducts =
    (await googleSheetsServices.GetProducts()) as ProductsType[];

  if (getProducts) return <AppComponent products={getProducts} />;

  return;
};

export default AppContainer;
