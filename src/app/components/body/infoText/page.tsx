import React from "react";
import style from "@/app/Styles/Body/InfoText.module.scss";

const InfoText = () => {
  return (
    <>
      <div className={style.textBlock}>
        <div className={style.textDiv_1}>
          <h1 className={style.caption_1}>Что такое IzApteki.ru</h1>
            <p>
                IzApteki.ru — это онлайн сервис по заказу лекарственных препаратов и
                товаров для здоровья. Сервис помогает найти товары аптечного
                ассортимента по лучшей цене и оформить заказ в ближайшей аптеке.
            </p>
          <p>
            IzApteki.ru – агрегатор аптечных сетей. Товары и цены,
            представленные на сайте, предоставляются партнерами портала в
            реальном времени, благодаря этому сервис IzApteki.ru помогает
            выбрать и заказать лекарственные препраты, витамины, БАДы,
            медицинские изделия и приборы, средства гигиены, косметику, товары
            для мам и малышей, диетическое питание, памперсы – все то, что
            продается в аптеках.
          </p>
        </div>
        <div className={style.textDiv_2}>
          <h1 className={style.caption_2}>Как сделать заказ</h1>
          <p>
            Выгодные цены: мы постоянно анализируем рынок и предлагаем только
            самые выгодные предложения наших партнеров.
          </p>
          <p>
            Удобство: Сервис представлен в 36 регионах России. На данный момент
            в сети наших партнеров уже свыше 1100 аптек, а значит вы всегда
            сможете найти пункт выдачи рядом с вашим домом.
          </p>
          <p>
            Ассортимент: Izapteki.ru предлагает свыше 30 000 товарных единиц,
            больше нет необходимости искать лекарства по разным аптекам, найти и
            заказать даже самые редкие лекарства вы можете в одном месте.
          </p>
          <p>Товар может быть возвращен только до момента оплаты заказа.</p>
          <p>
            Согласно Постановлению Правительства РФ от 19.01.1998 г. №55 не
            подлежат обмену и возврату следующие товары надлежащего качества:
            лекарственные средства; предметы личной гигиены, средства гигиены
            полости рта; инструменты, приборы и аппаратура медицинские, предметы
            санитарии и гигиены из металла, резины, текстиля и других
            материалов,предметы по уходу за детьми,линзы
            очковые,парфюмерно-косметические товары.
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoText;
