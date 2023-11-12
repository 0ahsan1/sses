import moment from "moment-timezone";

const regexForMultipleChar = /<p>|<\/p>|\&nbsp\;|<br>/g;

export const slugTranslator = (slug, parentObjKey) => {
    if (!slug) {
        return "";
    }
    let traslatedSlug = slug.toString().replaceAll("-", "_");

    if (slug === "online-sellers" && parentObjKey) {
        traslatedSlug = `${parentObjKey}_${traslatedSlug}`;
    }
    return traslatedSlug;
};
export const MappHistoricalData = (data, hasUTCFormat = true) => {
    let ItemArray = [];
    let DateValue = data["LastUpdate"] ?? data["RateDate"];
    let RatePairValue = data["RatePairValue"] ?? data["ActualRateValue"];
    if (DateValue) {
        // DateValue = DateValue.toString();
        let estDateTime = new Date(DateValue).getTime();

        let utcDateTime;
        // if (hasUTCFormat) {
        //   utcDateTime = estDateTime;
        // } else {
        let myTimezone = "America/Toronto";
        let myDatetimeFormat = "YYYY-MM-DD hh:mm:ss a z";
        // let myDatetimeString = moment(DateValue).tz(myTimezone).format(myDatetimeFormat);
        let myDatetimeString = moment
            .tz(DateValue, "ddd, DD MMM YYYY HH:mm:ss", "America/New_York")
            .format(myDatetimeFormat);
        let abc = new Date(myDatetimeString).toISOString();
        utcDateTime = Date.parse(abc);
        // }
        ItemArray.push(utcDateTime);
        ItemArray.push(parseFloat(RatePairValue));
        return ItemArray;
    }
};
export function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
export const dateFormatter = (date, format) => moment(date).format(format);

export const mapDate = (d, hasUTC = true) => {
    let newArray = [];
    d.forEach((d) => {
        newArray.push(MappHistoricalData(d, hasUTC));
    });
    return newArray;
};

export function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}
export const formatDate = (date) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Adding leading zero if necessary
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");

    return `${month}, ${day} ${year} ${hours}:${minutes}`;
};
export const strapiImageLoader = (image) => {
    let url = "";
    if (typeof image == "string") {
        if (image.includes("uploads")) {
            image = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${image}`;
        } else {
            image = setCharAt(image, 1, "I");
        }
        url = image;
    } else {
        if (image && image.hasOwnProperty("data")) {
            image = image.data;
        }
        if (image) {
            let key = "url";
            Object.keys(image).forEach(function eachKey(k) {
                switch (k) {
                    case "url":
                    case "link":
                    case "src":
                        key = k;
                        break;
                }
            });

            if (image[key].includes("uploads")) {
                url = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${image[key]}`;
            } else {
                image[key] =
                    image[key][1] == "i" ? setCharAt(image[key], 1, "I") : image[key];
                url = image[key];
            }
        }
    }
    return url;
};

export const strapiLinkLoader = (button) =>
    button.link.includes("uploads")
        ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${button.link}`
        : button.link;

/**
 * Returns an Object from strapi data
 * @param {*} data
 * @returns
 */

export const mapObject = (data) => {
    return data;
};

/**
 * Returns datewise sorted array
 * @param {*} data
 * @returns
 */
export const sortContent = (data) => {
    return data.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
    });
};

/**
 * Returns Background Image Url
 * @param {*} src
 * @returns
 */
export const setBackgroundImageUrl = (image) => {
    return {
        backgroundImage: `url(${strapiImageLoader(image)})`,
    };
};

/**
 * Returns plain object from API response object
 * @param {*} data
 * @returns
 */
export function normalizeData(data) {
    const isObject = (data) =>
        Object.prototype.toString.call(data) === "[object Object]";
    const isArray = (data) =>
        Object.prototype.toString.call(data) === "[object Array]";

    const flatten = (data) => {
        if (!data.attributes) return data;

        return {
            id: data.id,
            ...data.attributes,
        };
    };

    if (isArray(data)) {
        return data.map((item) => normalizeData(item));
    }

    if (isObject(data)) {
        if (isArray(data.data)) {
            data = [...data.data];
        } else if (isObject(data.data)) {
            data = flatten({ ...data.data });
        } else if (data.data === null) {
            // data = null;
        } else {
            data = flatten(data);
        }

        for (const key in data) {
            data[key] = normalizeData(data[key]);
        }

        return data;
    }

    return data;
}

export function regex(type) {
    switch (type) {
        case "numeric":
            return /^\d+$/;
        case "email":
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        case "decimal":
            return /^\d*\.?\d*$/;
        case "alpha":
            return /^[A-Za-z ]+$/;
        default:
            return "";
    }
}
/**
 * Returns Filtered data from data set
 * @param {*} data
 * @param {*} filters
 * @returns
 */
export const getFilteredData = (data, filters) => {
    const filterKeys = Object.keys(filters[0]);
    let found = null;
    if (Array.isArray(data)) {
        found = data.filter((d) => d[filterKeys[0]] === filters[0][filterKeys[0]]);
    } else {
        found = data[filters[0][filterKeys[0]]];
    }
    return found;
};

/**
 * Return manipulated content string
 * @param {*} data
 * @returns
 */
export const contentUpdater = (data) => {
    if (data.length) {
        data.forEach((obj) => {
            if (obj.content) {
                obj.content = obj.content.replaceAll(
                    "/uploads",
                    `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads`
                );
                obj.content = obj.content.replaceAll("<a", `<a target="_blank" `);
            }
        });
    } else if (typeof data === "object" && data.content) {
        data.content = data.content.replaceAll(
            "/uploads",
            `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/uploads`
        );
        data.content = data.content.replaceAll("<a", `<a target="_blank" `);
    }

    return data;
};

export const commaFormattedCurrency = (n) => {
    if (typeof n !== "string") {
        n = n.toFixed(2);
    }

    let parts = n.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    let value =
        numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
    return value;
};

export const getRemainingDaysOfWeek = (date) => {
    const day = date.getDay();
    let add = 1;
    if (day == 6) {
        add = day + 1;
    } else {
        add = 6 - day;
    }
    return add;
};

/**
 * Converts Editor Content to CSS
 * @param {*} obj
 * @param {*} styleKey
 * @returns
 */
export const editorToCssFormatter = (obj, styleKey = "style") => {
    if (obj[styleKey]) {
        obj[styleKey] = `${obj[styleKey].replace(regexForMultipleChar, "")}`;
    }
    Object.keys(obj).forEach((key) => {
        if (obj[key] && obj[key][styleKey]) {
            obj[key][styleKey] = `${obj[key][styleKey].replace(
                regexForMultipleChar,
                ""
            )}`;
        }
    });
    return obj;
};
