const projects = `*[_type == 'projects']{
    project_type,
    title,
    url,
    tech_stack,
    "image": image.asset->url
  }`;

export default projects;
