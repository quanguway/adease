export class BannerIntroJson {

  private bannerIntro: any

  constructor(bannerIntro:any) {
    this.bannerIntro = bannerIntro;
  }
  custom() {
    return {
      'id': this.bannerIntro.id,
      'type' : this.bannerIntro.attributes.type,
      'title' : this.bannerIntro.attributes.title,
      'content': this.bannerIntro.attributes.content,
      'reverse' : this.bannerIntro.attributes.reverse,
      'shadow' : this.bannerIntro.attributes.shadow,
      'button' : this.bannerIntro.attributes.button,
      'image' : this.bannerIntro.attributes.image,
      'bg' : this.bannerIntro.attributes.bg,
    }
  }
}