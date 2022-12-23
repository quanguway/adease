export class NavbarJson {

  private navbar: any

  constructor(navbar:any) {
    this.navbar = navbar;
  }
  custom() {
    return {
      'id': this.navbar.id,
      'title' : this.navbar.attributes.title,
      'path' : this.navbar.attributes.path,
      'active': this.navbar.attributes.active,
      'dropdown' : this.navbar.attributes.dropdown,
      'icon': !this.navbar.attributes.icon.data ? undefined : {
        'path': this.navbar.attributes.icon.data.attributes.path,
        'alt': this.navbar.attributes.icon.data.attributes.alt,
      }
    }
  }
}