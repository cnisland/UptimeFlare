import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "YYcn Status Page",
  links: [
    { link: 'https://yycn.site', label: 'Home' },
    { link: 'https://github.com/cnisland', label: 'GitHub' },
    { link: 'mailto:admin@yycn.site', label: 'Contact', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'yycn_site',
      name: 'yycn.site 主站',
      method: 'GET',
      target: 'https://yycn.site',
      statusPageLink: 'https://yycn.site',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'nav_yycn_site',
      name: 'nav.yycn.site 导航',
      method: 'GET',
      target: 'https://nav.yycn.site',
      statusPageLink: 'https://nav.yycn.site',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'mail_yycn_site',
      name: 'mail.yycn.site 邮件',
      method: 'GET',
      target: 'https://mail.yycn.site',
      statusPageLink: 'https://mail.yycn.site',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'img_yycn_site',
      name: 'img.yycn.site 图床',
      method: 'GET',
      target: 'https://img.yycn.site',
      statusPageLink: 'https://img.yycn.site',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }