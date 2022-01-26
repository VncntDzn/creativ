const projects = `*[_type == 'projects']{
    project_type,
    title,
    url,
    tech_stack,
    answers,
    "image": image.asset->url
  }`;

export default projects;
