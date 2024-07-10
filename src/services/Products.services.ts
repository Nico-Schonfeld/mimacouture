import revalidateCache from "@/utils/cache/revalidateCache";

export class GoogleSheetsServices {
  async GetProducts() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_PRODUCTS}`, {
        method: "GET",
        next: { tags: ["productsTag"] },
      });

      revalidateCache("productsTag");

      const text = await res.text();

      return text
        .split("\n")
        .slice(1)
        .map((row) => {
          const [id, title, description, category, post, img] = row.split("\t");

          return {
            id,
            title,
            description,
            category,
            post: Boolean(post),
            img: img.replaceAll("\r", ""),
          };
        });
    } catch (error) {
      console.log(error);
      throw new Error("Error en la request");
    }
  }

  async GetSliders() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_SLIDERS}`, {
        method: "GET",
        next: { tags: ["productsTag"] },
      });

      revalidateCache("productsTag");

      const text = await res.text();

      return text
        .split("\n")
        .slice(1)
        .map((row) => {
          const [id, category, img, path] = row.split("\t");

          return {
            id,
            category,
            img,
            path: path.replaceAll("\r", ""),
          };
        });
    } catch (error) {
      console.log(error);
      throw new Error("Error en la request");
    }
  }

  async GetAboutMe() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_ABOUTME}`, {
        method: "GET",
        next: { tags: ["productsTag"] },
      });

      revalidateCache("productsTag");

      const text = await res.text();

      return text
        .split("\n")
        .slice(1)
        .map((row) => {
          const [
            id,
            name,
            company,
            description,
            description_optional,
            instagram,
            facebook,
            email,
          ] = row.split("\t");

          return {
            id,
            name,
            company,
            description,
            description_optional,
            instagram,
            facebook,
            email,
          };
        });
    } catch (error) {
      console.log(error);
      throw new Error("Error en la request");
    }
  }
}
