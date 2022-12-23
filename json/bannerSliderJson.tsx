export class BannerSliderJson {

  private bannerSlider: any

  constructor(bannerSlider:any) {
    this.bannerSlider = bannerSlider;
  }
  custom() {
    return {
      'id': this.bannerSlider.id,
      'header' : this.bannerSlider.attributes.header,
      'avatar' : this.bannerSlider.attributes.avatar,
      'content': this.bannerSlider.attributes.content,
      'author' : this.bannerSlider.attributes.author,
      'role' : this.bannerSlider.attributes.role,
    }
  }
}