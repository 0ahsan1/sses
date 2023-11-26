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
  getDraftEntries = false
) {
  let url = `${strapiBasePath}${path}`,
    response = null;

  filters.forEach((filter) => {
    const keys = Object.keys(filter);
    url += `?[${keys[0]}]=${filter[keys[0]]}`;
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
    let mappedResponse = response.data;
    if (mappedResponse && mappedResponse.length) {
      mappedResponse = mappedResponse.sort((a, b) => a - b);
    }
    return JSON.parse(JSON.stringify(mappedResponse));
  } catch (error) {
    console.log("axios err: ", error);
  }
}
