import axios from "axios";

export const strapiBasePath = process.env.NEXT_PUBLIC_STRAPI_API_URL;
export const strapiConfig = {
  headers: {
    Authorization: process.env.NEXT_PUBLIC_STRAPI_TOKEN,
    contentType: "application/json",
  },
};

/**
 * Get Filtered Strapi Content
 * @param {*} path API url
 * @param {*} filters An array of filters e.g: [{slug: 'xyz', type: '$eq'}, {date: '2023-02-28', type: '&gt'}]
 * @param {*} pagination An object of pagination options e.g: { page: 1, pageSize: 5 }
 * @param {*} populateOpt Populate option for data to populate data, default = 'deep'
 * @param {*} getDraftEntries boolean: returns both draft and publish entries, default = false
 * @returns
 */
export async function getFilteredStrapiContent(
  path,
  filters = [],
  pagination = null,
  sort = [],
  populateOpt = "deep",
  getDraftEntries = false
) {
  // let url = `${strapiBasePath}${path}?populate=${populateOpt}`,
  let url = `${strapiBasePath}${path}`,
    response = null;

  filters.forEach((filter) => {
    const keys = Object.keys(filter);
    const nestedKey = keys.find((key) => key.includes("."));
    let nestedProperties = "";
    if (nestedKey) {
      nestedProperties = nestedKey.split(".");
    }

    if (keys[0] === "$or" || keys[0] === "$and") {
      url += `&filters[${keys[0]}][${filter[keys[0]]}][${keys[1]}][${
        filter[keys[2]]
      }]=${filter[keys[1]]}`;
    } else {
      if (nestedProperties && nestedProperties.length) {
        url += `&filters${nestedProperties
          .map((prop) => `[${prop}]`)
          .join("")}[${filter[keys[1]]}]=${filter[keys[0]]}`;
      } else {
        url += `&filters[${keys[0]}][${filter[keys[1]]}]=${filter[keys[0]]}`;
      }
    }
  });

  if (pagination) {
    const keys = Object.keys(pagination);
    keys.forEach((key) => {
      url += `&pagination[${key}]=${pagination[key]}`;
    });
  }

  sort.forEach((s, index) => {
    url += `&sort[${index}]=${s.field}:${s.order ?? "desc"}`;
  });

  if (getDraftEntries) {
    url += `&publicationState=preview`;
  }

  try {
    response = await axios(url, strapiConfig);
    // const paginationMeta = response.data.meta;
    // let mapppedData = normalizeData(response.data.data);
    // mapppedData = contentUpdater(mapppedData);
    // let mappedResponse = mapppedData;
    // if (path === "/blogs") {
    //     mappedResponse = {
    //         data: mapppedData,
    //         pagination: paginationMeta.pagination,
    //     };
    // }
    let mappedResponse = response.data;
    return JSON.parse(JSON.stringify(mappedResponse));
  } catch (error) {
    console.log("axios err: ", error);
  }
}
