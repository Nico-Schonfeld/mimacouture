import { GoogleSheetsServices } from "@/services/Products.services";
import AppComponent from "./page.client";

const AppContainer = async () => {
  const googleSheetsServices = new GoogleSheetsServices();
  const getProducts = await googleSheetsServices.GetProducts();

  return <pre>{JSON.stringify(getProducts, null, 2)}</pre>;

  return <AppComponent />;
};

export default AppContainer;
