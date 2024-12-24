import { defineQuery } from 'next-sanity';

export const PROJECTS_HOME_QUERY = defineQuery(`*[
  _type == "project"
]{
  _id,
  name,
  slug,
  image,
  inProgress,
  platform,
  shortDesc,
  repoLink,
  liveLink,
  technology[]->{
    name,
    url,
    icon
  }
}`);

export const PROJECT_SINGLE_QUERY = defineQuery(`*[
  _type == "project" &&
  slug.current == $slug  
][0]{
  ...,
  technology[]->{
    name,
    url,
    icon
  },
}`);
