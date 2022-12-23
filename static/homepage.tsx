import navbarAPI from "./../api/navbarAPI"
import bannerIntroAPI from "../api/bannerIntroAPI"
import bannerSliderAPI from "../api/bannerSliderAPI"

export const staticProps = async () => {
	const navbarItemsLink = await navbarAPI.getItemsLink();
  const navbarItemsTool = await navbarAPI.getItemsTool();
  const bannerIntros = await bannerIntroAPI.getAll();
  const bannerSlider = await bannerSliderAPI.getAll();
  console.log(bannerSlider.data);
  return {
      data:{
        navbarItems:{
          link: navbarItemsLink,
          tool: navbarItemsTool,
        },
        bannerIntros: bannerIntros.data,
        bannerSlider: bannerSlider.data
      } ,
    }
}	