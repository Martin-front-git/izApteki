import SearchBlock from '@/app/components/body/SearchBlock/page';
import InfoText from '@/app/components/body/infoText/page';
import Partners from '@/app/components/body/partners/page';
import Selections from '@/app/components/body/selections/page';
import Slider from '@/app/components/body/slider/page';
import Footer from '@/app/components/footer/page';
import HeaderComponent from '@/app/components/header/page';



function MainPage() {
  return (
    <>
      <HeaderComponent title='Главная страница'/>
      <Slider/>
      <Slider/>
      <SearchBlock/>
      <Slider/>
      <Selections/>
      <Partners/>
      <InfoText/>
      <Footer/>
    </>
  );
}

  export default MainPage;