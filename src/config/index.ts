const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "6daxqh2d",
  dataset: "production",
  apiVersion: "v2021-03-25", // use current UTC date - see "specifying API version"!
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;
