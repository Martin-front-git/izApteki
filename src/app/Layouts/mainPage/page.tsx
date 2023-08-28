import Partners from '@/app/components/body/partners/page';
import Selections from '@/app/components/body/selections/page';
import Footer from '@/app/components/footer/page';
import HeaderComponent from '@/app/components/header/page';



function MainPage() {
  return (
    <>
      <HeaderComponent/>
      <Selections/>
      <Partners/>
      <Footer/>
    </>
  );
}

  export default MainPage;