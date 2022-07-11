import data from "./data.json";
// DO_NOT_CHANGE
function fakeFetch({ page = 1, limit = 5, orderBy = "asc" }) {
  return new Promise((res, rej) => {
    try {
      if (
        typeof limit !== "number" ||
        typeof page !== "number" ||
        !["asc", "desc", "ASC", "DESC"].includes(orderBy)
      ) {
        console.log(typeof limit, typeof page);
        throw new Error(
          "page,limit needs to be number, orderBy needs to be asc or desc"
        );
      }
      if (orderBy.toLowerCase() === "asc") {
        data.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
      } else if (orderBy.toLowerCase() === "desc") {
        data.sort((a, b) => (b.name < a.name ? -1 : b.name > a.name ? 1 : 0));
      }
      const start = (page - 1) * limit;
      const end = page * limit;
      const total = Math.ceil(data.length / limit);
      setTimeout(() => {
        res({
          data: data.filter((_, i) => i >= start && i < end),
          totalPages: total
        });
      }, 1000);
    } catch (err) {
      return rej(err);
    }
  });
}

export default fakeFetch;
