export interface Project {
  title: string;
  link: string;
  imgUrl: string;
}

interface latestRepoType {
  name: string;
  description: string;
  clone_url: string;
}
export interface About {
  title: string;
  description: string[];
  currentProject: string;
  currentProjectUrl: string;
}

export interface Experience {
  title: string;
  company: string;
  year: string;
  companyLink: string;
  desc: string;
}

export interface SocialLinks {
  instagram: string;
  twitter: string;
  linkedin: string;
  github: string;
  facebook: string;
  peerlist: string;
}

export interface Skills {
  name: string;
  level: string;
}

export interface UserData {
  githubUsername: string;
  name: string;
  designation: string;
  avatarUrl: string;
  email: string;
  phone: string;
  address: string;
  projects: Project[];
  about: About;
  experience: Experience[];
  resumeUrl: string;
  socialLinks: SocialLinks;
  publishedDate?: string;
  url?: string;
  Skills?: Skills[];
  repo?: latestRepoType[];
}

interface RootData {
  userData: UserData;
}

export default RootData;
