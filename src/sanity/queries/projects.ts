import { defineQuery } from 'next-sanity';

export const PROJECTS_HOME_QUERY = defineQuery(`*[
  _type == "project"
]|order(orderRank){
  _id,
  name,
  slug,
  "image": image.asset-> { 
    url,
    label,
    title,
    altText,
    description
  },
  inProgress,
  platform,
  shortDesc,
  repoLink,
  liveLink,
  technology[]->{
    name,
    url,
    "icon": icon.asset-> { 
      url,
      label,
      title,
      altText,
      description
    }
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
