export class IconJson {

  private icon: any

  constructor(icon:any) {
    this.icon = icon
  }
  custom() {
    return {
      'id': this.icon.id,
      'path' : this.icon.attributes.path,
      'alt' : this.icon.attributes.alt,
       
    }
  }
}
