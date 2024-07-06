import revalidateCache from "@/utils/cache/revalidateCache";

export class GoogleSheetsServices {
  async GetProducts() {
    try {
      const res = await fetch(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vQwClqVFBbGWyFpoYy-C9Krqc1OHjP5I6ghO2E5WH5p0nNlCrHQG23MqfDjmcztT-u4SQ-mObxOEZkk/pub?output=tsv`,
        {
          method: "GET",
          next: { tags: ["productsTag"] },
        }
      );

      /*       if (!res.ok) {
        throw new Error("Error en la request");
      }
 */
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
            img,
          };
        });
    } catch (error) {
      console.log(error);
      throw new Error("Error en la request");
    }
  }
}
