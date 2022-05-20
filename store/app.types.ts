export interface IPageMeta {
  title?: string
  sub_title?: string
  breadcrumbs?: IBreadcrumbItemState[]
}

export interface IDocMeta {
  title?: string
}

export interface IBreadcrumbItemState {
  name: string
  isActive?: boolean
  icon?: string
  to?: string
}

export interface ISidebarItemState {
  type?: string
  name: string
  icon?: string
  to?: string
  isHide?: boolean
  isActive?: boolean
  children?: ISidebarItemState[]
}
